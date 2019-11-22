<p>
  <a href="https://www.npmjs.com/package/dashgen">
    <img src="https://img.shields.io/npm/v/dashgen.svg" alt="npm version">
  </a>

  <a href="https://packagephobia.now.sh/result?p=dashgen">
    <img src="https://packagephobia.now.sh/badge?p=dashgen" alt="install size">
  </a>

  <a href="https://github.com/jzillmann/dashgen/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/dashgen.svg" alt="license">
  </a>
</p>

# Dashgen

Simplistic _static_ dashboard generator. Store your metrics in a generic JSON format, _Dashgen_ will generate an HTML report out of them them!

# JSON report structure

You can have one or multiple files in this format:

```
{
    "sourceName": "my source"
    "reports": [
        {
            "name": "my report 1",
            "metrics": {
                "key1": "value1",
                "key2": "value2",
                ...
            },
            "messages" :[
                "Something seemed slightly off with ..."
            ]
        },
        {
            "name": "my report 1",
            ...
    ]
}
```

## How to generate a HTML report out of the JSON files

- `npm install --global dashgen`
- `dashgen <dataFolder> <targetFolder>`
- Open `<targetFolder>/index.html`

## How to build

- `npm run dev` => Serve the svelte app over HTTP with live reload. Visit http://localhost:5000.

## How to publish

- Test the package with `npm run pack:dry` and `npm run pack`
- Test `cli.js` with `npm link`. Now you can execute `dashgen`. Unlink with `npm unlink`.
- Release the package:
  - `npm version [patch|minor|major]`
  - `npm run build`
  - `npm publish`
  - `git push`
  - `git push --tags`
