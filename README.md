# Dashgen

Simplistic _static_ dashboard generator. Store your metrics in a generic JSON format, _Dashgen_ will generate an HTML report out of them them!

## How to use

- `npm install --global dashgen`
- `dashgen <dataFolder> <targetFolder>`
- Open `<targetFolder>/index.html`

## How to build

- `npm run dev` => Serve the svelte app over HTTP with live reload. Visit http://localhost:5000.

## How to publish

- Test the package with `npm run pack:dry` and `npm run pack`
- Test `cli.js` with `npm link`. Now you can execute `dashgen`. Unlink with `npm unlink`.
- Release the package:
  - `npm run release`
  - `git push`
  - `git push --tags`
