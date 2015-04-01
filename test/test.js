/* global mocha */
'use strict';

mocha.setup('bdd');
mocha.reporter('html');

// Add each test class here as they are implemented
require('./spec/AccordionTest');

if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}