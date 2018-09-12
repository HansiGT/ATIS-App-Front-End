import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  public matchUrl(expectedUrl) {
    return function () {
      return browser.getCurrentUrl().then(function (actualUrl) {
        return actualUrl.endsWith(expectedUrl);
      });
    };
  }

  public matchOpeningHours() {

    var today = new Date();
    var hour = today.getHours();

    if (today.getDay() == 6) {
      return false;
    } else if (today.getDay() == 5) {
      if (hour >= 7 && hour <= 14) {
        return true;
      } else {
        return false;
      }
    } else {
      if (hour >= 7 && hour <= 21) {
        return true;
      } else {
        return false;
      }
    }
  }

  public readUtilisation() {
    console.log(element(by.className('para')));
    return element(by.className('para'));
   //return element(by.css('para[_ngcontent-c6]'));
  }
}
