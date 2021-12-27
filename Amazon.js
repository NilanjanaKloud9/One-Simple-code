import { Selector } from 'testcafe';

const signin = Selector('#nav-link-accountList-nav-line-1');
const EmailAddress = Selector('#ap_email');
const Continue = Selector('#continue');
const Password = Selector('#ap_password');
const SignIn = Selector('#signInSubmit');
//const searchtextbox = Selector('#twotabsearchtextbox');
//const search = Selector('#nav-search-submit-button');
//const item1 = Selector('span').withAttribute('class','a-size-medium a-color-base a-text-normal').withText ('Apple iPhone 12 Pro Max, 256GB, Graphite - Fully Unlocked (Renewed)')
//const addtocart = Selector('#add-to-cart-button');
const cart = Selector ('#nav-cart-count');
const checkout = Selector('#sc-buy-box-ptc-button');
const selectCountry=Selector('#address-ui-widgets-countryCode');
const CountyList = Selector ('#a-popover-1');
//#address-ui-widgets-countryCode  #\31 _dropdown_combobox > li:nth-child(1) > a
const stateOption=CountyList.find('a');
/*const countrySelect=Selector('#address-ui-widgets-countryCode span');
const countryOption=countrySelect.find('option');
const  selectIndia=Selector('span').withAttribute('class','a-dropdown-prompt').withText ('India')*/
fixture `MyFixture`
    .page `https://www.amazon.com/`;
    test('My test', async t => {
        await t
        .wait(2000)
        .maximizeWindow()
        .wait(2000)
        .click(signin)
        .typeText (EmailAddress , 'nilanjana.d@kloud9.nyc')
        .wait(2000)
        .click(Continue)
        .wait(2000)
        .typeText (Password , '098765')
        .wait(2000)
        .click(SignIn)
        .wait(5000)
        .click(cart)
        .wait(3000)
        .click(checkout)
        //.click(Selector('#address-ui-widgets-countryCode span').withText('India').nth(1))
        .click(selectCountry)
        //const button=Selector('button').withAttribute('data-value','IN')
        //#address-ui-widgets-countryCode > span > span > span
        .click(stateOption.withAttribute('data-value','IN').withText('India'))
        //.click(selectIndia)
        ///.click(Selector('#1_dropdown_combobox a').withText(India))
        /*.typeText('#address-ui-widgets-enterAddressFullName', 'Sandeep acharya')
        .typeText('#address-ui-widgets-enterAddressPhoneNumber', '7338053871')
        .typeText('#address-ui-widgets-enterAddressLine1', 'Acharya Bihar')
        .typeText('#address-ui-widgets-enterAddressLine2', 'HSRLayout')
        .typeText('#address-ui-widgets-enterAddressCity', 'Bangaluru')
        .typeText('#address-ui-widgets-enterAddressPostalCode', '560102')
        .click(selectState)
        .click(stateOption.withText(''))
        .click('#address-ui-widgets-form-submit-button .a-button-input')*/
    });