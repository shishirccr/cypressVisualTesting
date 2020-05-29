# What is it?
An example of visual testing of a web based system using cypress and cypress-image-snapshot plugin

![course page diff](https://user-images.githubusercontent.com/54541188/83279185-bc0d8d00-a1a2-11ea-85d3-a44ba6aa1a62.png)

![signup page diff](https://user-images.githubusercontent.com/54541188/83279186-bca62380-a1a2-11ea-8d35-e5ee951a21a8.png)

# Tooling
Here is the view of tools used:
* Node 10 [Download](https://nodejs.org/en/download/)
* Cypress ^4.2.0
* Cypress image snapshot [^3.1.1](https://github.com/palmerhq/cypress-image-snapshot)

Project setup
============

#### Project Setup

1. Clone the repository:

2. Run 
``` bash 
npm install 
``` 
   to get download Cypress and Cypress image snapshot. Refer the ```package.json``` file for the details

3. Once the installation is successfully completed, run 
``` bash
npx cypress open
```
   to view the Cypress dashboard to run the test cases

4. To specify the base url for a run, use the below command:
```bash
CYPRESS_BASE_URL=https://staging.app.com cypress run
```

#### Run test cases headless

1. Running test cases headless means to run a test case or a set of test cases without using the Dashboard. This makes the test cases to run in backgraond without opening the browser. Cypress provides [--headless](https://docs.cypress.io/guides/guides/command-line.html#How-to-run-commands) command to run the test cases in the described manner.
2. The ```--headless``` command is accompanies by the choice of browser the test cases should be run. This can be specified using ```--browser <browser name>``` command.
Example:
```bash
npx cypress run --headless --browser chrome --spec "path to file"
```

##### Cypress Version Requirements

Cypress's screenshot functionality has changed significantly across `3.x.x` versions. In order to avoid buggy behavior, please use the following version ranges:

- `cypress-image-snapshot@>=1.0.0 <2.0.0` for `cypress@>=3.0.0 <3.0.2`
- `cypress-image-snapshot@>2.0.0` for `cypress@>3.0.2`.
