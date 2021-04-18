
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 0.1})).toEqual("132.15");
  expect(calculateMonthlyPayment({amount: 100000, years: 30, rate: 0.15})).toEqual("1264.44");
  expect(calculateMonthlyPayment({amount: 1, years: 10, rate: 0.01})).toEqual("0.01");
});


it("should return a result with 2 decimal places", function() {
  let expectedString = calculateMonthlyPayment({amount: 10000, years: 10, rate: 0.1});
  let decimalPointLocation = expectedString.indexOf(".");
  let postdecimalPoint = expectedString.slice(decimalPointLocation + 1);
  expect(postdecimalPoint.length).toEqual(2);
  
  expectedString = calculateMonthlyPayment({amount: 100000, years: 30, rate: 0.15});
  decimalPointLocation = expectedString.indexOf(".");
  postdecimalPoint = expectedString.slice(decimalPointLocation + 1);
  expect(postdecimalPoint.length).toEqual(2);

  expectedString = calculateMonthlyPayment({amount: 1, years: 10, rate: 0.01});
  decimalPointLocation = expectedString.indexOf(".");
  postdecimalPoint = expectedString.slice(decimalPointLocation + 1);
  expect(postdecimalPoint.length).toEqual(2);
});

/// etc
