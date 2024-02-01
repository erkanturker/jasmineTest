it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 400000,
    rate: 2.8, // convert annual rate to monthly and percentage to decimal
    years: 30,
  };

  expect(calculateMonthlyPayment(values)).toEqual("1643.58");
});

it("should return a result with 2 decimal places", function () {
  // ..
});

/// etc
