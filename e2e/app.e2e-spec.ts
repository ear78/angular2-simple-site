import { Angular2SimpleSitePage } from './app.po';

describe('angular2-simple-site App', () => {
  let page: Angular2SimpleSitePage;

  beforeEach(() => {
    page = new Angular2SimpleSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
