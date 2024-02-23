Feature('Task 1 - Guest Book');

/**
 * @Author Aaron
 * @Steps
 * - Open Page
 * - Validate first name
 * - Submit a Guest book entry
 * - Validate entry is submitted successfully
 */
Scenario('Task 1 - Leave Guest Book Entry', async ({ I, janusObitPage }) => {
    const result = await I.getJanusPersonRecord();

    // Load page using dynamic PID
    I.amOnPage(`${process.env.URL}pid=${result.PersonId}`);

    // Validate first name
    I.see(result.FirstName, janusObitPage.headerPersonName);

    // Fill and submit guestbook form
    janusObitPage.createGuestBookEntry();
});
