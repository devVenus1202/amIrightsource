# Arachnys frontend take-home challenge

## Welcome

Thank you for interviewing at Arachnys, we hope you enjoy our frontend challenge. We understand that it can be hard to carve out time to complete a coding exercise so we've designed our challenge to take no more than 2 hours. We are committed to providing feedback for all submissions regardless of whether they are successful and won't give extra consideration to submissions that go beyond scope.

In the subsequent technical interview we will discuss the problem and your solution as if we are giving peer review, asking about the trade-offs in decisions you've made. This will help you to see how we work at Arachnys and will help us to understand how you approached the problem. We may also ask you how the solution could be adapted if requirements change.

If you have any questions that aren't addressed in this README then please feel free to ask us.

## Overview of the challenge

In this challenge we are making a very basic prototype of a search application that allows users to search for businesses and people as part of their investigations. You'll find that we have already started this prototype for you and need your help extending it.

## What we would like you to do

When you run the application you will discover we have provided a rudimentary UI and we need your help to dynamically load results from the backend.

**We would like you to:**

- Extract a reusable search result component.
- Modify the application so that it fetches search results and renders them dynamically as the user types. If there is nothing in the search box then no results should be rendered.
- Update the hard-coded 'Results count' to reflect the actual number of results.
- Update the hard-coded 'Average risk' to be the mean risk score of the returned results rounded to one decimal place (or the string "N/A" if there are no results).
- Ensure that the application always renders the last requested set of search results (bearing in mind that HTTP responses may arrive in a different order than the order in which the requests are made).

When completing this exercise feel free to approach the problem in any way you feel is best, using whatever tools or dependencies you feel are needed.

**When completing this challenge we do not want you to spend time:**

- Changing how the application is bundled and run.
- Setting up a linter or code formating tool.
- Considering browser compatibility - this iteration only needs to run in the latest stable version of Chrome or Firefox.
- Thinking about pagination or the order of results (results have a hard limit in the API in this prototype).
- Debouncing user input.
- Testing (we will discuss this in the interview stage).

**Once you have completed the challenge:**

1. Update `CANDIDATE-NOTES.md`.
2. Create a zip file of your solution - **remember not to include files in the `.gitignore` like `node_modules`, `dist` and `.cache`**.
3. Upload your zipped solution to us following the instructions we've provided via email.

Please don't share your solution anywhere publicly.

## Getting started

At Arachnys we use TypeScript, but we have provided you with both TypeScript and JavaScript applications so you can use the language you feel most comfortable with.

1. Use the version of Node that is specified in the `.nvmrc` file at the root of this project.
2. Make sure you have [yarn v1.x](https://classic.yarnpkg.com) installed for dependency management.
3. Run `yarn` in the project root to install all dependencies.
4. Run `yarn start-api` to start the mock API.
5. If using TypeScript run `yarn start-ts`, or if using JavaScript then run `yarn start-js`.
6. The client application should load in your browser automatically, but if not then check your terminal for the URL and load it manually.
7. Have a read about the API in [api/README.md](api/README.md).
8. If using TypeScript you will need to make changes in the [src-ts](src-ts) directory, or if using JavaScript then you will need to make changes in the [src-js](src-js) directory.

You should be good to start making changes to the app and the development server should automatically update what you see in the browser.

If you have trouble with any of these instructions then please get in touch - it's probably our fault!
