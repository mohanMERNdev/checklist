module.exports = [
    {
      name: "Valuation Fee Paid",
      description: "isValuationFeePaid should be true.",
      validate: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "UK Resident",
      description: "isUkResident should be true.",
      validate: (data) => data.isUkResident === true,
    },
    {
      name: "Risk Rating Medium",
      description: "riskRating should be 'Medium'.",
      validate: (data) => data.riskRating === "Medium",
    },
    {
      name: "LTV Below 60%",
      description: "Loan-to-Value should be below 60%.",
      validate: (data) => {
        const loanToValue = (data.loanRequired / data.purchasePrice) * 100;
        return loanToValue < 60;
      },
    },
  ];
  