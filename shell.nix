{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    # Node.js (npm comes with it). Pin an explicit major so the shell stays
    # reproducible across nixpkgs bumps. 26 goes LTS on 2026-10-28, EOL 2029-04-30.
    # Keep this ahead of EOL -- nodejs_20 was dropped from nixpkgs outright
    # once it went end-of-life on 2026-04-30.
    nodejs_26
  ];

  # Security: audit on install, scoped to this shell only.
  # These are env vars on purpose -- `npm set` would write them to the
  # global ~/.npmrc and leak into every other project on the machine.
  NPM_CONFIG_AUDIT = "true";
  NPM_CONFIG_AUDIT_LEVEL = "moderate";

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"

    echo "Nix development environment for PW23 (Vite + React + TypeScript)"
    echo "Node version: $(node --version)"
    echo "npm version:  $(npm --version)"
    echo "Info: Use 'npm ci' to install exactly what package-lock.json pins"
    echo "Info: Always review package.json changes before running 'npm install'"
  '';
}
