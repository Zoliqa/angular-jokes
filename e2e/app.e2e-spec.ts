import { JokeDemoPage } from './app.po';

describe('joke-demo App', function() {
  let page: JokeDemoPage;

  beforeEach(() => {
    page = new JokeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
