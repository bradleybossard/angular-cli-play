import { AngularCliPlayPage } from './app.po';

describe('angular-cli-play App', function() {
  let page: AngularCliPlayPage;

  beforeEach(() => {
    page = new AngularCliPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
