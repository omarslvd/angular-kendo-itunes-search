import { AngularKendoItunesSearchPage } from './app.po';

describe('angular-kendo-itunes-search App', () => {
  let page: AngularKendoItunesSearchPage;

  beforeEach(() => {
    page = new AngularKendoItunesSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
