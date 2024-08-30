const {mul} = require("../multiply");

describe("testing mul", ()=>{
  test("should be multiplying 2 numbers", ()=>{
    expect(mul(4,5)).toEqual(20);
  });
  test("should multiply negative numbers", ()=>{
    expect(mul(-4,-6)).toEqual(24);
  });
})