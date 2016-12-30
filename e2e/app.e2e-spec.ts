import { Angular2PetstoreDemoPage } from './app.po';

describe('angular2-petstore-demo App', function() {
  let page: Angular2PetstoreDemoPage;

  beforeEach(() => {
    page = new Angular2PetstoreDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
