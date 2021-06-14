let { expect } = require("chai");
let rgbToHexColor = require("./06.RGB-to-hex");

describe("Tests for the RGB TO HEX task", () => {
  it("should return #100C0D for (16, 12, 13)", () => {
    expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
  });

  it("test with min values", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("test with max values", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("should be undefined with negative integer", () => {
    expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
  });

  it("should be undefined if 1 of the arguments is out of range (0-255)", () => {
    expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined");
  });

  it("should be undefined if 1 of the arguments is invalid", () => {
    expect(typeof rgbToHexColor("266", 12, 13)).to.equal("undefined");
  });
});
