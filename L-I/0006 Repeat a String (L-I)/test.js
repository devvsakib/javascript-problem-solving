const repeatStringNumTimes = require("./challenge");
const assert = require("assert");

describe("Testing the repeate String Num Times function ", () => {
  it('repeatStringNumTimes("A", 5) should return "AAAAA"', () => {
    assert(repeatStringNumTimes("A", 5) === "AAAAA");
  });

  it('repeatStringNumTimes("@@", 0) should return "" ', () => {
    assert(repeatStringNumTimes("@@", 0) === "");
  });

  it('repeatStringNumTimes("$$$", 3) should return "$$$$$$$$$" ', () => {
    assert(repeatStringNumTimes("$$$", 3) === "$$$$$$$$$");
  });

  it('repeatStringNumTimes("*", -2) should return "" ', () => {
    assert(repeatStringNumTimes("*", -2) === "");
  });
});
