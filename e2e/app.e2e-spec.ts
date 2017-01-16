import { Angular2ReduxSamplePage } from './app.po';

describe('angular2-redux-sample App', function() {
  let page: Angular2ReduxSamplePage;

  beforeEach(() => {
    page = new Angular2ReduxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
