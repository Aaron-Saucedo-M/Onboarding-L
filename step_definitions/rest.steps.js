const { I, janusObitPage } = inject();
let _url;

Given('I use url {string}', async (url) => {
    _url = url;
});

Then('Status code should be {string}', async (status_code) => {
    const response = await I.sendGetRequest(_url);
    I.assert(response.status, parseInt(status_code));
});
