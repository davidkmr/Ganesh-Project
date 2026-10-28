import { test } from '../hooks/globalHooks';
import user from '../testdata/userData.json'

test('SauceDemo', async ({ loginPage}) => {

  await loginPage.login(
    user.user9.name,
    user.password
  );

})


/* To install Allure 
npm install allure-playwright 

To install Allure-commandline
npm install -D allure-commandline  --save-dev 

changes to be done in playwright.config.js
reporter: [['html'],['list'], ['allure-playwright']],

To generate allure Report :
allure serve allure-results   */