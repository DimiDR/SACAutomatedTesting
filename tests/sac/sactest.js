import { Selector, t } from "testcafe";
fixture`Test SAC`.page(
  "https://atos-information.eu10.hanacloudservices.cloud.sap/sap/fpa/ui/tenants/45a5b/app.html#/story2&/s2/73C9A8872316A29B4C3582ECA8F6C831/?url_api=true&preview=true&mode=view&view_id=story2"
);

test("Click the button and check the text", async (t) => {
  await t
    .typeText(Selector(".fn-input"), "dimitri.rybak@atos.net")
    .typeText(Selector(".fn-input.js-input-reveal-hide"), "****")
    .click(Selector(".ids-button"))
    .wait(40000)
    .click(Selector("#__widget0"))
    .wait(2000)
    .expect(Selector("#__widget0").withExactText("After Unit Test").exists)
    .ok();
});

// test("Open SAP Application & check if the button is available", async (t) => {
//   await t
//     .typeText(Selector(".fn-input"), "dimitri.rybak@atos.net")
//     .typeText(Selector(".fn-input.js-input-reveal-hide"), "****")
//     .click(Selector(".ids-button"))
//     .wait(40000)
//     .expect(Selector("#__widget1").exists)
//     //.expect(Selector("#__text5").withExactText("Home").exists) //checks if the home button exists
//     .ok();
// });
