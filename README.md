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

## Release workflow

Releases are published manually from the `Publish` GitHub Actions workflow.
Before running it:

1. Update the version in `package.json` and `package-lock.json` on `master`.
2. Create the matching Git tag after the version change is merged.
3. Run the `Publish` workflow from `master` and enter that tag.

The workflow verifies the package before publishing it to npm and GitHub
Packages. npm publishing requires the `NPM_AUTH_TOKEN` repository secret to
have publish access to the `@travelport-czech` scope.
