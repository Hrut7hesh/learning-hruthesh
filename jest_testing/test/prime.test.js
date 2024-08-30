const {prime} = require("../prime");

describe("testing prime", ()=>{
  test("should get prime or not", ()=>{
    expect(prime(1)).toEqual(false);
    expect(prime(9)).toEqual(false);
  });
  test("should get prime or not", ()=>{
    expect(prime(23)).toEqual(true);
    expect(prime(2)).toEqual(true);
  });
})