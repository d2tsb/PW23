{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    # Node.js LTS (npm comes with it). nodejs_20 was dropped from nixpkgs
    # after its 2026-04-30 EOL -- keep this on a maintained LTS.
    nodejs_22
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
