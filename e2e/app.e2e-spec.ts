import { TourofheroesCli01Page } from './app.po';

describe('tourofheroes-cli01 App', function() {
  let page: TourofheroesCli01Page;

  beforeEach(() => {
    page = new TourofheroesCli01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
