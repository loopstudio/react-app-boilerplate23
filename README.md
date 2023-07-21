![react app banner](https://user-images.githubusercontent.com/15303963/84329475-1e7b6b80-ab5b-11ea-828d-9249c79ab522.png)

<p align="center"><strong>An opinionated boilerplate code for starting a new react web project.</strong></p>

![GitHub Actions Badge](https://github.com/loopstudio/react-app-boilerplate/workflows/CI/badge.svg)
[![Codebeat Badge](https://codebeat.co/badges/6382173b-82aa-4fe5-9087-87d53bd5595e)](https://codebeat.co/a/loopstudio/projects/github-com-loopstudio-react-app-boilerplate-master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/loopstudio/react-app-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/loopstudio/react-app-boilerplate/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/loopstudio/react-app-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/loopstudio/react-app-boilerplate/context:javascript)

<sub>Created and maintained with ❤️ by <a href="[https://loopstudio.dev/](https://loopstudio.dev/)">LoopStudio</a></sub>

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [List of Packages](#list-of-packages)
- [Recommended Extensions](#recommended-extensions)
- [Getting Started](#getting-started)
- [Running the Test Suite](#running-the-test-suite)
- [Contributing](CONTRIBUTING.md)
- [Credits](#credits)

## Project Structure

```
.
├── .github/
├── public/
├── .husky/
├── src
│   ├── assets/
│   ├── features/
│   │   ├── common/
│   ├── helpers/
│   ├── layouts/
│   ├── pages/
│   ├── App.styles.ts
│   ├── App.tsx
│   ├── emotion.d.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   └── theme.ts
├── .env
├── .gitignore
├── .eslintrc.json
├── .prettierrc.json
├── tsconfig.json
├── jest.config.js
├── package.json
├── README.md
└── yarn.lock
```

## Feature Structure

```
├── features
│ └── myFeature
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── services/
│   ├── types.ts
│   └── index.ts
```

#### What does a feature export?

A feature should export anything that is meant to be consumed from outside the feature
IE:

- actions
- reducer
- components (if they're meant to be used outside the feature)
- hooks (if they're meant to be used outside the feature)
- helpers (if they're meant to be used outside the feature)

## Component Structure

```
├── MyComponent
│ ├── index.ts
│ ├── MyComponent.tsx
│ ├── MyComponent.styles.tsx
│ ├── MyComponent.test.tsx
```

### Optional

If you want to split your component into pieces for readability, maintainability, or any other reason you could put the secondary components in the same folder. This is only for cases where these secondary components are only used inside MyComponent. If later they want to be used in other places they should be extracted to their own folder inside components.

```
├── MyComponent
│ ├── index.ts
│ ├── MyComponent.tsx
│ ├── MyComponent.styles.tsx
│ ├── MyComponent.test.tsx
│ ├── SecondaryComponent.tsx
│ ├── SecondaryComponent.styles.tsx
```

## Features

1. Based on [create-react-app](https://create-react-app.dev/).
2. Code splitting and prefetching.
3. Errors handling.
4. The httpClient provides status code errors handling and camelCase to snake_case automatic conversion.
5. Async actions and store hydration.
6. Internationalization.
7. Concurrent Mode ready.
8. Environment-specific settings provided through the built-in [environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables) system provided by CRA.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/) 10.16.3 or greater.
2. Install [Yarn](https://yarnpkg.com/lang/en/) as a package manager.

## List of Packages

### Routing:

- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start): the most popular and powerful routing solution for React.

### Testing:

- [jest](https://jestjs.io/): a delightful JavaScript Testing Framework with a focus on simplicity.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro): a very light-weight solution for testing React components.
- [cypress](https://www.cypress.io/): automated integration tests. This tool isn't installed in our project, but we recommend to use it. You can install it running `yarn add cypress --dev`. For more information about the configuration, you can read [this guide](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

### Styling:

- [emotion](https://emotion.sh/docs/introduction): Provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

## Recommended Extensions

### Style / Linting

VSCode:

- [Prettier](https://github.com/prettier/prettier-vscode) - An opinionated code formatter.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates [ESLint](http://eslint.org/) into VS Code.

Sublime:

- [Prettier](https://packagecontrol.io/packages/JsPrettier) - JsPrettier is a Sublime Text Plug-in for Prettier, the opinionated code formatter.
- [ESLint](https://packagecontrol.io/packages/ESLint) - ESLint any JavaScript file in Sublime Text.

### Intellisense

VSCode:

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - AI-assisted development features.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Visual Studio Code plugin that autocompletes filenames.
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Visual Studio Code plugin that autocompletes npm modules in import statements.

Sublime:

- [SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel) - Full-featured code intelligence and smart autocomplete engine.
- [AutoFileName](https://packagecontrol.io/packages/AutoFileName) - Sublime Text plugin that autocompletes filenames.

### Version Control

VSCode:

- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) - See Git Blame information in the status bar for the currently selected line.

Sublime:

- [Git Blame](https://packagecontrol.io/packages/Git%20blame) - Show Git blame information while viewing a file in Sublime Text.

### Syntax Highlighting

VSCode:

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - A port of [DotENV](https://github.com/zaynali53/DotENV) for VSCode.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - This extension styles CSS/web colors found in your document.
- [VSCode Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) - Syntax highlighting and IntelliSense for styled-components or emotion.

Sublime:

- [DotENV](https://packagecontrol.io/packages/DotENV) - SublimeText Syntax Highlighting support for Environment (.env) Files
- [Color Highlight](https://packagecontrol.io/packages/Color%20Highlight) - 🎨 Lightweight Color Highlight colorizer for Sublime Text

### Snippets

VSCode:

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - This extension provides you JavaScript and React/Redux snippets in ES7 with Babel plugin features for VSCode.

Sublime:

- [ES7 React/Redux/GraphQL/React-Native snippets](https://packagecontrol.io/packages/Sublime%20ES7%20React%20Redux%20ReactNative%20JS%20snippets) - Sublime ES7 React/Redux/React-Native/JS snippets.

## Getting Started

1. Clone this repository and navigate to the folder.
2. Install all dependencies by running the `yarn install` command in the root directory.
3. Modify the environment variables files in root folder(.env.dev, .env.staging and .env.prod).
4. Start the dev server: `yarn start` command.

## Running the Test Suite

1. Run the `yarn test` command.

## Credits

React App Boilerplate is maintained by [LoopStudio](https://loopstudio.dev).

[<img src='https://loopstudio.dev/wp-content/uploads/2019/05/logoblack.png' width='300'/>](https://loopstudio.dev)
