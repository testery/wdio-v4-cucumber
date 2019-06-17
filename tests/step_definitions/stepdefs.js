const assert = require('assert');
const { Given, Then, When } = require('cucumber');
const HiltonHomePage = require('../page/hiltonHomePage');
const hiltonHomePage = new HiltonHomePage();
const OffersPage = require('../page/offersPage');
const offersPage = new OffersPage();

// Given('I use a web browser to navigate to the Hilton home page', async function test() {
// 	hiltonHomePage.open();
// });

// When('I navigate to Offers', async function test() {
// 	hiltonHomePage.goToOffers();
// });

// Then('the Offers page loads successfully', async function test() {
// 	assert(offersPage.isLoaded());
// });

module.exports = function() {
	this.Given('I use a web browser to navigate to the Hilton home page', async function test() {
		hiltonHomePage.open();
	});
  
	// Note that this is a shorthand for regular expression
	// as /^I fill in login as "([^"]*)" and password as "([^"]*)"$/.
	// So don't worry, you don't have to rewrite your step matchers to strings ;-)
	this.When('I navigate to Offers', function(login, password, done) {
	  browser
		.waitForExist('#login')
		.setValue('#login', login)
		.setValue('#password', password)
		.click('#login-button')
		.call(done)
	});
  
	this.Then('the Offers page loads successfully', function(login, done) {
	  browser
		.waitForExist('#logged-in-user')
		.getText('#logged-in-user').then(function(text) {
		  expect(login).to.eql(text);
		})
		.call(done);
	});
  };