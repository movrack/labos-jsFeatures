import { JsFeaturesPage } from './app.po';

describe('js-features App', () => {
  let page: JsFeaturesPage;

  beforeEach(() => {
    page = new JsFeaturesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
