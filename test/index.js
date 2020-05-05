const { expect } = require("chai");
const copyPlugin = require("../dist/hacss-plugin-copy.umd.js");

describe("copy plugin", () => {
  const input = {
    "margin-x": "20px",
    "margin-y": "30px",
  };

  const spec = {
    "margin-x": ["margin-left", "margin-right"],
    "margin-y": ["margin-top", "margin-bottom"],
  };

  const [ copy, properties ] = copyPlugin(spec);

  it("copies values to specified properties", () => {
    expect(copy(input)).to.deep.equal({
      ...input,
      "margin-left": "20px",
      "margin-right": "20px",
      "margin-top": "30px",
      "margin-bottom": "30px",
    });
  });

  it("adds the keys from the spec to the list of recognized properties", () => {
    expect(properties).to.deep.equal(Object.keys(spec));
  });
});
