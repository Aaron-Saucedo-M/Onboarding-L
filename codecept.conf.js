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
        JanusDBHelper: {
            require: './helpers/janusDB_helper.js'
        },
        WebDriver: {
            url: process.env.URL,
            browser: 'chrome',
            desiredCapabilities: {
                chromeOptions: {
                    args: ['--incognito', 'window-size=1920,1080'],
                },
            },
        },
    },
    include: {
        I: './steps_file.js',
        janusObitPage: './pages/JanusObit.PO.js',
    },
    name: 'Onboarding-L',
};
