const until = protractor.ExpectedConditions;

describe('Load page', function() {

	it('Wait for react', async function() {
		await browser.get('http://localhost:8080/');
		await browser.waitForReact(10000, '#app');
		await browser.wait(until.presenceOf(element(by.react('MyComponent')), 5000, 'Element taking too long to appear in the DOM'));
		expect(element(by.react('MyComponent')).isPresent()).toBeTruthy();
    });
    
});
