<frontmatter>
  title: Topic 1
  pageNav: 4
  pageNavTitle: "Topics"
</frontmatter>

<br>

# UI Testing with Playwright

## Introduction

Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

## Installation

### Installing Playwright

Get started by installing Playwright using npm or yarn. Alternatively, you can also get started and run your tests using the VS Code Extension.

**npm**

```bash
npm init playwright@latest
```

**yarn**

```bash
yarn create playwright
```

**pnpm**

```bash
pnpm init playwright@latest
```

Run the install command and select the following to get started:

- Choose between TypeScript or JavaScript (default is TypeScript)
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)

## Getting Started

### What's Installed

Playwright will download the browsers needed as well as create the following files:

- `playwright.config.ts`
- `package.json`
- `package-lock.json`
- `tests/`
  - `example.spec.ts`
- `tests-examples/`
  - `demo-todo-app.spec.ts`

The `playwright.config` is where you can add configuration for Playwright, including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project, then dependencies will be added directly to your `package.json`.

The `tests` folder contains a basic example test to help you get started with testing. For a more detailed example, check out the `tests-examples` folder, which contains tests written to test a todo app.

### Running the Example Test

By default, tests will be run on all three browsers: Chromium, Firefox, and WebKit, using three workers. This can be configured in the `playwright.config` file. Tests are run in headless mode, meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

```bash
npx playwright test
```

<panel type="primary" header="Exercises">
  <h3>E2E testing Exercises</h3>
<p>The example Playwright test provided for you is in the tests folder in a file named trial.spec.cjs. This example test verifies the following functionalities: </p>

<p>1. Navigating to the home page</p>
<p>2. Clicking on various links such as 'Home', 'Categories', 'All Categories', and 'Cart'</p>
<p>3. Checking and unchecking product filters</p>
<p>4. Adding a product to the cart</p>
<p>5. Navigating to the login page</p>

Your task is to write UI tests to test the following functionalities:

<p>(a) Navigating to the login page</p>
<p>(b) Filling in the login form and submitting it</p>
<p>(c) Adding items to the cart</p>
<p>(d) Navigating through different categories and verifying the filter functionality</p>
<p>(e) Checking out the items in the cart</p>
</panel>

````
### HTML Test Reports

After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.

```bash
npx playwright show-report
````

### Running the Example Test in UI Mode

Run your tests with UI Mode for a better developer experience with time travel debugging, watch mode, and more.

```bash
npx playwright test --ui
```

## Updating Playwright

To update Playwright to the latest version run the following command:

```bash
npm install -D @playwright/test@latest
# Also download new browser binaries and their dependencies:
npx playwright install --with-deps
```

You can always check which version of Playwright you have by running the following command:

```bash
npx playwright --version
```

## System Requirements

- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

## What's Next

- Write tests using web-first assertions, page fixtures, and locators
- Run single test, multiple tests, headed mode
- Generate tests with Codegen
- See a trace of your tests

<box type="tip" style="background-color: #FF5733; color: white;">
**Tip:**
When writing UI tests with Playwright, remember to cover various scenarios and edge cases to ensure robust testing of your web application.
</box>
