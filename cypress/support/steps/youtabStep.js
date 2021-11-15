const po = require('../../support/page-objects/youtapObject');

Given('access url youtap', () => {
  po.youtap.accessSite();
});

When('can click menu solusi usaha', () => {
  po.youtap.content();
});

When('user click menu contact', () => {
    po.youtap.menuContact();
});

When('user input contact form', () => {
    po.youtap.inputContact();
});

Then('user can see content on form', () => {
    po.youtap.contactForm();
});

Then('user see pesan Thank you', () => {
    po.youtap.formThankYou();
});