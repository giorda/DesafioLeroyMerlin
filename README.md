# Test Project

This projetc have the tests for the Sign Up, Sign In, Publish article, and Delete article. The interface tests are located in the `e2e` folder, and the API tests are located in the `integration` folder.

I used the [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor#cypress-configuration) to write the tests in Gherkin, and will need to install it by running `npm install --save-dev cypress-cucumber-preprocessor`.

To run the API tests, Cypress requires the Angular CLI, just install.

To execute the tests, I used the standard command `npx cypress open`.
