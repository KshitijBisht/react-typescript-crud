import {Selector} from 'testcafe';

fixture `Testing Update functionality`.page`http://localhost:3006/`

test('My first test', async t =>{
    await t.navigateTo(`http://localhost:3006/create`)
    await t.typeText('#name', 'Kshitij Bisht').
    typeText('#description', 'Front End Engineer').
    typeText("#updated_by","Carl Pie").
    click("#last_updated")
    .typeText('#last_updated','2017-05-05')
    .click('#create-entry')
    .click('#edit-btn')
    .typeText('#name', 'Max verstappen',{replace:true}).
    typeText('#description', 'Red Bull',{replace:true}).
    typeText("#updated_by","Christian Honor",{replace:true}).
    click("#last_updated")
    .typeText('#last_updated','2017-05-05',{replace:true})
    .click('#edit-submit')
    .expect(Selector('.description').innerText).eql('Red Bull')
    .expect(Selector('.updatedBy').innerText).eql('Christian Honor')
    .expect(Selector('.lastUpdated').innerText).eql('2017-05-05')
});