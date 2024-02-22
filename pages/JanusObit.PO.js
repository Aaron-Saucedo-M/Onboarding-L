const { I } = inject();

module.exports = {
    // Locators
    headerPersonName: { css: 'h2[data-component = "NameHeadingText"]' },
    guestbook: {
        txtMessage: { css: 'textarea[name="_GuestbookForm_Message"]' },
        txtFrom: { css: 'input[name="_GuestbookForm_From"]' },
        txtEmail: { css: 'input[name="_GuestbookForm_Email"]' },
        btnSubmit: {
            css: 'button[data-component = "AffiliateGuestbookSubmitButton"]',
        },
        compSuccessBox: {
            css: 'div[data-component="AffiliateGuestbookSuccessBox"]',
        },
    },

    /**
     * Function to submit a guest book entry - All parameters default to 'Test'
     * @param {Object} information
     * @param {string} information.message - String for message field, default is 'Test'
     * @param {string} information.from - String for from field, default is 'Test'
     * @param {string} information.email - String for email field, default is 'Test@email.com'
     * @example
     * PO.createGuestBookEntry();
     * PO.createGuestBookEntry({message = 'A Message', email = 'ajsm@gmail.com', from = 'Aaron'});
     */
    createGuestBookEntry({
        message = 'Test',
        from = 'Test',
        email = 'Test@email.com',
    } = {}) {
        I.scrollIntoView(this.guestbook.txtFrom);
        I.fillField(this.guestbook.txtMessage, message);
        I.fillField(this.guestbook.txtFrom, from);
        I.fillField(this.guestbook.txtEmail, email);
        I.scrollIntoView(this.guestbook.txtEmail);
        I.click(this.guestbook.btnSubmit);
        I.waitForElement(this.guestbook.compSuccessBox, 10);
    },
};
