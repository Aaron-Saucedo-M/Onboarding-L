const { I, janusObitPage } = inject();
let result;

Given('I am on an obit page', async () => {
    result = await I.getJanusPersonRecord();

    // Load page using dynamic PID
    I.amOnPage(`${process.env.URL}pid=${result.PersonId}`);
});

Then("I validate the person's first name", () => {
    I.see(result.FirstName, janusObitPage.headerPersonName);
});

Then('I sign the guest book', () => {
    janusObitPage.createGuestBookEntry();
});
