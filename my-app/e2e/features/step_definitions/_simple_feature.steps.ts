import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from '../../app';

defineSupportCode(({ Given, When, Then, Before }) => {
    let app: AppPage;

    Before(() => {
        app = new AppPage();
    });

    When('I am on the page', function () {
        () => app.navigateTo()
    });

    Then('I should be redirected to the frontpage', function () {
        () => app.matchUrl("/frontpage");
    });
});