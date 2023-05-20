// fixture`Test structure`.page`https://devexpress.github.io/testcafe/example`;

// test("Test1", async (t) => {
//   // Starts at http://devexpress.github.io/testcafe/example
// });

fixture`firsttest`;

test.page`https://devexpress.github.io/testcafe/example`("Test1", async (t) => {
  console.log("Tescafe Site");
});

//https://demoqa.com/text-box
test.page`https://testcafe.io/documentation/402830/guides/basic-guides/run-tests`(
  "Test1",
  async (t) => {
    console.log("Demo QA Site");
  }
);
