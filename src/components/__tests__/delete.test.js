import {Selector} from 'testcafe';

fixture `Testing Delete functionality`.page`http://localhost:3006/`

test('Check delete user', async t =>{
    await t.navigateTo(`http://localhost:3006/create`)
    await t.typeText('#name', 'Kshitij Bisht').
    typeText('#description', 'Front End Engineer').
    typeText("#updated_by","Carl Pie").
    click("#last_updated")
    .typeText('#last_updated','2017-05-05')
    .click('#create-entry').click('#delete-icon')
    .expect(Selector('.no-users-found').find('h2').innerText).eql('No Users found at the moment')
});