# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------
FROM node:26-alpine AS build

WORKDIR /app

# Abhängigkeiten in einer eigenen Schicht: ändert sich nur der Quellcode,
# bleibt diese Schicht im Cache. `npm ci` statt `install` installiert exakt,
# was package-lock.json festschreibt, und bricht bei Abweichung ab.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# Serve
#
# Unprivilegiertes Image: läuft als UID 101 und lauscht auf 8080. Das
# offizielle nginx-Image startet seinen Master-Prozess als root, nur um Port 80
# binden zu dürfen - hier unnötig, weil der Host-nginx TLS terminiert und
# hierher weiterreicht.
# ---------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine AS serve

COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# busybox-wget ist im Alpine-Basisimage enthalten, kein zusätzliches Paket.
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD wget -q --spider http://localhost:8080/ || exit 1
