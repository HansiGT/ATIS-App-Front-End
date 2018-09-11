import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  public matchUrl(url) {
    return function () {
      return browser.getCurrentUrl().then(function(actualUrl) {
        return actualUrl.endsWith(url);
      });
    };
  }
}
