const assert = require("assert");
const copyPlugin = require("../dist/hacss-plugin-copy.umd.js");

const input = {
  "margin-x": "20px",
  "margin-y": "30px",
};

const spec = {
  "margin-x": ["margin-left", "margin-right"],
  "margin-y": ["margin-top", "margin-bottom"],
};

const [copy, properties] = copyPlugin(spec);

{
  const expected = {
    ...input,
    "margin-left": "20px",
    "margin-right": "20px",
    "margin-top": "30px",
    "margin-bottom": "30px",
  };

  const actual = copy(input);

  console.log(`${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  assert.deepEqual(actual, expected);
}

{
  const expected = Object.keys(spec);
  const actual = properties;

  console.log(`${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  assert.deepEqual(actual, expected);
}

console.log("All tests passed.");
