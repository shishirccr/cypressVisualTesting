// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// note this causes the pipeline to fail.  If we need this, we may
// need to create a specialized docker image for running.
// require('cypress-plugin-tab')

// Import commands.js using ES2015 syntax:
import "./commands";
import path from "path";
// import 'cypress/types'

// Monkey patch for AO tests, see: https://github.com/cypress-io/cypress/issues/2118
Cypress.on("window:load", function(window) {
  const original = window.addEventListener;
  window.addEventListener = function() {
    if (arguments && arguments[0] === "beforeunload") {
      return;
    }
    return original.apply(this, arguments);
  };
});

// Note: running in bb-pipeline, was getting this error
// Uncaught Error: ResizeObserver loop limit exceeded
// which is supposedly benign, can safely ignore.
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  if (/ResizeObserver/.test(err.message)) {
      return false;
  }
});
