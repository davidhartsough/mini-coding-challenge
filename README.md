# Mini Coding Challenge

Your challenge is to complete two utility functions and ensure their corresponding tests pass.

NOTE: If you have any questions about this, please email me: hartsoughdavid@gmail.com

**Steps**

1. [Installation](#installation)
2. [Implementation](#implementation)
3. [Submission](#submission)

## Installation

Do NOT fork this repo.

1. Clone this repo (and `cd` into it)
2. Install the dependencies using npm

## Implementation

In `./src/` you'll find 2 JavaScript files (`.js`) and 2 test respective Jest test files (`.test.js`).

1. `get-metadata.js` which exports `getMetadata()`
2. `filter-metadata.js` which exports `filterMetadata()`

Both files are assumed to be utility functions that are a part of a larger application.

The fictional web app deals primarily with these "Metadata" objects as its main data, structured like so:

```typescript
type Metadata = {
  url: string | null;
  siteName: string | null;
  title: string | null;
  description: string | null;
  keywords: string[] | null;
  author: string | null;
};
```

Example:

```javascript
const metadata = {
  url: "https://www.example.com/something/to-test",
  siteName: "Example Site Name",
  title: "Example Title",
  description: "Example description.",
  keywords: ["example", "keywords"],
  author: "Example Author",
};
```

Imagine that you have a server backend which is able to pull the HTML from a website at a specific URL. From there, it would be handed down to the `getMetadata()` function, with the HTML passed (as a string) as the parameter.

For the `getMetadata()` function, you'll need to parse the HTML to extract the important and relevant metadata information, including the URL, site name, title, description, keywords, and author. (Then you'll return the Metadata object.)

From there, imagine that the frontend web app has a list of these Metadata objects and a search input bar. That search bar will require you to finish the `filterMetadata()` function, which it will use to filter the Metadata list based on a given search query.

### `get-metadata.js`

In this file, you'll need to complete the `getMetadata()` function. It's typings are:

```typescript
function getMetadata(html: string): Metadata;
```

You are welcome to break this down however you'd like; however, please don't use any external libraries or packages for this file, such as JSDOM.

Please follow the instructions in the JSDoc comments above the function.

### `filter-metadata.js`

In this file, you'll need to complete the `filterMetadata()` function. It's typings are:

```typescript
function filterMetadata(metadata: Metadata[], query: string): Metadata[];
```

You are also welcome to break this down into multiple functions, and if you choose to or feel the need to, you can import any external libraries or packages you'd like. (Honestly, I don't think the challenge requires anything from npm, but please solve this in whatever way _you_ believe is best.)

As before, please follow the instructions in the JSDoc comments above the function.

### Tests

This challenge uses [Jest](https://jestjs.io/) for testing.

As you complete the implementation, please ensure that the Jest tests pass.

In the root project directory, you can run the following scripts:

```bash
npm test
```

Or, to keep an open watcher, run:

```bash
npm run test:watch
```

## Submission

Once again, do NOT fork this repo.

When you're done and ready to submit your code in the application, follow these steps to push your code to your own GitHub repo:

1. Create a new repository on GitHub.
2. Remove the remote origin with: `git remote rm origin`
3. Add the remote origin of your new repo with: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`
4. Push your code to your new repo with: `git push -u origin master` (or `main` or whatever your preferred branch name is)
5. I recommend that you keep this repo private, so you'll have to add me, `davidhartsough`, as a as a collaborator: https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/access

Once you've done all of that, please email me and Flo with the URL to your repo (https://github.com/YOUR-USERNAME/YOUR-REPO-NAME)

To: david@thoughtsaver.com, florence@thoughtsaver.com

## Linting/Formatting

- [ESLint](https://eslint.org/) - linting
- [Prettier](https://prettier.io/) - formatting

As you complete the challenge, you are encouraged to lint and format your code.

In the root project directory, you can run the following scripts:

```bash
npm run lint
```

Or, to let eslint try to fix your code according to the linter and formatter standards, run:

```bash
npm run lint:fix
```
