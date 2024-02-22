const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const dotenv = require('dotenv');
dotenv.config();
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*_test.spec.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.URL,
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--incognito'],
        },
      },
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'Onboarding-L',
};
