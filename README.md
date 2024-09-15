# Cypress Automation for OrangeHRM

This project is an automation script for the second Cypress tutorial from the Lumestack channel. It demonstrates how to validate and assert functionalities on the OrangeHRM website using Cypress. The focus is on automating tests for the login page.

## Project Overview

The purpose of this project is to showcase automated testing for the OrangeHRM login page using Cypress, a powerful end-to-end testing framework. The test suite includes:

1. **Validating Successful Login**: Verifies that a user can log in with valid credentials and checks if the login was successful.
2. **Testing Invalid Login**: Ensures that incorrect credentials trigger an appropriate error message.
3. **Validating Required Fields**: Checks if the application properly handles cases where required fields are left empty.

This project helps in understanding how to use Cypress for validating different scenarios on a web application.

## Prerequisites

Before you start, ensure you have the following tools installed on your machine:

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime used to run Cypress and manage project dependencies. Make sure to install the latest stable version (v14.x or later recommended).
- **[npm](https://www.npmjs.com/)**: The Node package manager, which comes with Node.js and is used to install project dependencies.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:
   Clone this repository to your local machine using Git:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   ```

2. Navigate to the project directory:
```bash
cd your-repository-name
```
3. Install the dependencies:
```bash
npm install
```
## Configuration
The project is designed to run with default settings. No additional configuration is required beyond what is specified in the cypress.json configuration file, which Cypress uses to manage global settings and environment variables.

## Running Tests
To run the automated tests, use the following commands:
1. Open Cypress Test Runner: This command opens the Cypress Test Runner, where you can interactively run and debug tests:
```bash
npx cypress open
```
2. Run Tests in Headless Mode: If you prefer running tests in a headless mode (without opening the Test Runner GUI), use:
 ```bash
   npx cypress run
 ```
This will execute all tests in the background and output the results to the terminal.

## Test Cases
The following test cases are implemented to validate different scenarios on the login page:

### 1. Validate Correct Login
This test case ensures that a user can log in successfully with valid credentials and checks for the visibility of the login confirmation element.
~~~javascript
it('Validar login correto', () => {
  // Enter valid credentials
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123');
  
  // Click on the login button
  botaoLogin();

  // Verify successful login by checking for the presence of the top bar breadcrumb
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    .should('be.visible');
});

~~~~

### 2. Test Invalid Login
This test case verifies that incorrect credentials lead to an error message indicating invalid login attempts.
~~~javascript
it('Teste de Login Inválido', () => {
  // Enter invalid credentials
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Adminm');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin1234');
  
  // Click on the login button
  botaoLogin();
  
  // Check for the error message indicating invalid credentials
  cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
});
~~~~
![orange cy js-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/5dd2e487-06bd-411e-9d08-ca536ce9fda3)


### 3. Validate Empty Required Field
This test case ensures that when required fields are left empty, the application displays the appropriate validation message.
~~~javascript
it('Validar campo obrigatorio vazio', () => {
  // Clear the input fields
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear();
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear();
  
  // Click on the login button
  botaoLogin();
  
  // Verify that the required field validation message is displayed
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible');
});
~~~~
## Helper Function
To avoid code repetition, a helper function botaoLogin is used to click the login button:
~~~javascript
function botaoLogin() {
  cy.get('.oxd-button').click();
}
~~~~

## Useful Links
- [Cypress Documentation: Official Cypress documentation with guides and API references.](https://docs.cypress.io/guides/overview/why-cypress)
- [OrangeHRM: The web application used for testing.](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

## Autores

 [@viniandmelo](https://github.com/ViniandMelo)
