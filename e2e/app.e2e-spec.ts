import { MovieRaterWebPage } from './app.po';

describe('movie-rater-web App', function() {
  let page: MovieRaterWebPage;

  beforeEach(() => {
    page = new MovieRaterWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
