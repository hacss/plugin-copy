const assert = require("assert");
const copyPlugin = require("../dist/hacss-plugin-copy.umd.js");

const input = {
  "margin-x": "20px",
  "margin-y": "30px",
};

const spec = {
  "margin-x": ["margin-left", "margin-right"],
  "margin-y": ["margin-top", "margin-bottom"],
  "padding-x": ["padding-left", "padding-right"],
};

const [copy, properties] = copyPlugin(spec);

const test = (actual, expected) => {
  console.log(`${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  assert.deepEqual(actual, expected);
};

test(copy(input), {
  ...input,
  "margin-left": "20px",
  "margin-right": "20px",
  "margin-top": "30px",
  "margin-bottom": "30px",
});

test(properties, Object.keys(spec));

{
  const actual = copy(input);
  console.log(`!"padding-left" in ${actual}`);
  if ("padding-left" in actual) {
    assert.fail(
      "Found padding-left where it was expected not to have been set.",
    );
  }
}

console.log("All tests passed.");
