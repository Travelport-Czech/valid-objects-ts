Valid object helps to convert unknown data to type safe data.

## Install
```
npm install @travelport-czech/valid-objects-ts
```

## Usage

```typescript
import { createEmailFromUnknown, ValidEmail } from '@travelport-czech/valid-objects-ts' import { ValidEmail } from './ValidEmail'

const unknownEmail: unknown = 'email@email.com'

const email: string = createEmailFromUnknown(unknownEmail).toString()
// or
const email: ValidEmail = createEmailFromUnknown(unknownEmail)
```

## Version release workflow

Version is automatically changed if the master branch is changed

* Based on the commit messages, increment the version from the lastest release.
If the string "BREAKING CHANGE" is found anywhere in any of the commit messages or descriptions the major version will be incremented.
* If a commit message begins with the string "feat" then the minor version will be increased. This works for most common commit metadata for feature additions: "feat: new API" and "feature: new API".
* All other changes will increment the patch version.
