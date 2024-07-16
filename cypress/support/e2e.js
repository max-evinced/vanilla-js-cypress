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

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import Evinced from '@evinced/cypress-sdk';

Evinced.init();

// Optional aXe config
// const axeConfig = {
//     rules: {
//         "color-contrast": { enabled: false },
//     },
// };


// Global config
//Evinced.init({ axeConfig, ignoreTypes:['NOT_FOCUSABLE'] });

//Evinced toggle to add aXe needs review and best practices issues
//Evinced.init({toggles: {USE_AXE_NEEDS_REVIEW: true, USE_AXE_BEST_PRACTICES: true }});