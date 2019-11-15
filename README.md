[![CircleCI](https://img.shields.io/circleci/build/gh/Travelport-Czech/valid-objects-ts)](https://circleci.com/gh/Travelport-Czech/valid-objects-ts)
[![npm (scoped)](https://img.shields.io/npm/v/@ceesystems/valid-objects-ts)](https://www.npmjs.com/package/@ceesystems/valid-objects-ts)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@ceesystems/valid-objects-ts)](https://www.npmjs.com/package/@ceesystems/valid-objects-ts)

Valid object improving application data management and make them more safe.

## Install
```
npm install @travelport-czech/valid-objects-ts
```

## Version release workflow

Version is automatically changed if the master branch is changed

* Based on the commit messages, increment the version from the lastest release.
If the string "BREAKING CHANGE" is found anywhere in any of the commit messages or descriptions the major version will be incremented.
* If a commit message begins with the string "feat" then the minor version will be increased. This works for most common commit metadata for feature additions: "feat: new API" and "feature: new API".
* All other changes will increment the patch version.
