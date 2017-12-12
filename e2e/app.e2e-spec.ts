import { ManageTestPage } from './app.po';

describe('manage-test App', () => {
  let page: ManageTestPage;

  beforeEach(() => {
    page = new ManageTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
