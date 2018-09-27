# onepw

This app reproduces a bug in 1Password. Currently when localhost is added to the
ignore list it still asks to save the password when running tests that update a
password.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd onepw`
- `yarn install`

## Running

- `ember serve`
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests) in Chrome.
- The 1Password prompt should pop up while running the tests.
