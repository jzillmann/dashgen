# Dashgen

Generates *static* Dashboards from JSON files. The JSON files have to be in a well defined but generic format.


## How to build

- `npm run dev` => Serve the svelte app over HTTP with live reload. Visit http://localhost:5000.


## How to publish

- Test the package with `npm run pack:dry` and `npm run pack`
- Test `cli.js` with `cd public && npm link`. Now you can execute `dashgen`. Unlink with `npm unlink`.
- Release the package:
  - Increase version number in package.json & public/package.json
  - `npm login`
  - `npm publish`