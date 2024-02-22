Feature('Task 1');

/**
 * @Author Aaron
 * @Steps
 * - Open Page
 * - Validate first name
 * - Submit a Guest book entry
 * - Validate entry is submitted successfully
 */
Scenario('Task 1 - Leave Guest Book Entry', ({ I }) => {
    // Load page
    I.amOnPage(process.env.URL);
    
    // Validate first name
    I.see('Virginia', { css: 'h2[data-component="NameHeadingText"]' });

    // Submit Guest Book Entry
    I.scrollIntoView({ css: 'textarea[name="_GuestbookForm_Message"]' });
    I.fillField(
        { css: 'textarea[name="_GuestbookForm_Message"]' },
        'Test Message'
    );
    I.fillField({ css: 'input[name="_GuestbookForm_From"]' }, 'Test From');
    I.fillField(
        { css: 'input[name="_GuestbookForm_Email"]' },
        'Test@email.com'
    );
    I.click({
        css: 'button[data-component = "AffiliateGuestbookSubmitButton"]',
    });

    // Wait for entry to be submitted
    I.waitForElement(
        { css: 'div[data-component="AffiliateGuestbookSuccessBox"]' },
        10
    );
});
