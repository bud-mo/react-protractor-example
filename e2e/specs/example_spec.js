const until = protractor.ExpectedConditions;

describe('Load page', function () {
  it('Wait for react', async function () {
    await browser.get('http://localhost:8080/');
    await browser.wait(
      until.visibilityOf(
        element(by.css('#app')),
        5000,
        'Element taking too long to appear in the DOM'
      )
    );
    await browser.waitForReact(1000, '#app');
    expect(element(by.react('MyComponent')).isPresent()).toBeTruthy();
  });
});
