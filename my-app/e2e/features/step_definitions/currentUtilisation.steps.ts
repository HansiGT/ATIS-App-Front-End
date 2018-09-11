import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from '../../app';
import { element } from 'protractor';

defineSupportCode(({ Given, When, Then, Before }) => {
    let app: AppPage;

    Before(() => {
        app = new AppPage();
    });

    Given('I am on the current utilisation page', () => {
        (text: "current-utilization") => app.matchUrl(text);
    });

    Given('the workspace is open', () => {
        () => app.matchOpeningHours();
    });

    Then('the current utilisation is displayed', () => {
        () => expect(app.readUtilisation()).to.be.equals("Aktuelle Auslastung: 50%");
        //return 'pending';
    })
});