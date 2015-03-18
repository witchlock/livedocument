#Transform cucumber feature files into markdown and generate the html documentation with cleaver
---
## Setup
1. Install node and npm
2. Install grunt-cli by `npm install -g grunt-cli`
3. Install cleaver by `npm install -g cleaver`
4. `npm install`

## How to generate the markdown file?
- `node ./feature_wrapper.js` or
- `grunt wrap`

## How to generate the html file?
- `cleaver livedocument.md` or
- `grunt transform`

## How to view the document?
Open livedocument-cleaver.html in any browser
