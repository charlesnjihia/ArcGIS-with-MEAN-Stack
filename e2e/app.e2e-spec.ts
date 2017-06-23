import { DonorAppPage } from './app.po';

describe('donor-app App', () => {
  let page: DonorAppPage;

  beforeEach(() => {
    page = new DonorAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
