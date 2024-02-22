Feature('Task 1');

/**
 * @Author Aaron
 * @Steps
 * - Open Page
 * - Validate first name
 * - Submit a Guest book entry
 * - Validate entry is submitted successfully
 */
Scenario('Task 1 - Leave Guest Book Entry', ({ I, janusObitPage }) => {
    // Load page
    I.amOnPage(process.env.URL);

    // Validate first name
    I.see('Virginia', janusObitPage.headerPersonName);

    // Fill and submit guestbook form
    janusObitPage.createGuestBookEntry();
});
