## Installation

no webpack in this app. parcel will be used

```bash    npm install --save react
    npm install --save react-dom
    npm install --save-dev parcel-bundler
    npm install --save-dev babel-preset-env
    npm install --save-dev babel-preset-react
```
## Setup

### Babel

    // .babelrc
    {
    "presets": ["env", "react"]
    }

### Start script
_add the start script to package.json_

    // package.json
    "scripts": {
    "start": "parcel index.html"
    }
