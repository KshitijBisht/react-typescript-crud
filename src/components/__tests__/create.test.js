import {Selector} from 'testcafe';

fixture `Testing Create functionality`.page`http://localhost:3006/`

test('My first test', async t =>{
    await t.navigateTo(`http://localhost:3006/create`)
    await t.typeText('#name', 'Kshitij Bisht').
    typeText('#description', 'Front End Engineer').
    typeText("#updated_by","Carl Pie").
    click("#last_updated")
    .typeText('#last_updated','2017-05-05')
    .click('#create-entry')
    .expect(Selector('.description').innerText).eql('Front End Engineer')
    .expect(Selector('.updatedBy').innerText).eql('Carl Pie')
    .expect(Selector('.lastUpdated').innerText).eql('2017-05-05')
});