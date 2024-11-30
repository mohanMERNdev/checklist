const express = require("express");
const axios = require("axios");
const checklistRules = require("./checklistRules");

const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.get("/evaluate", async (req, res) => {
  try {
    const apiUrl =
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
    const { data } = await axios.get(apiUrl);
    const results = checklistRules.map((rule) => ({
      rule: rule.name,
      description: rule.description,
      status: rule.validate(data) ? "Passed" : "Failed",
    }));

    res.json(results);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to evaluate checklist." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
