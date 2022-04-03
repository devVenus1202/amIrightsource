const express = require("express");
const faker = require("faker");

// Configure PORT here if needed
const PORT = 3000;
const MAX_RESULTS = 20;

// Generate some fake data to search through
const results = [...Array(1000)].map(() => ({
  date_published: faker.date.recent(90),
  id: faker.random.uuid(),
  risk_score: Math.round(Math.random() * 100),
  snippet: faker.lorem.paragraph(),
  title: faker.lorem.sentence(),
  url: faker.internet.url(),
}));

const app = express();

// Enable CORS on any origin for development
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Endpoint for rudimentary search
app.get("/search", (req, res) => {
  // Sends response with simulated lag
  const sendResponseWithLag = (data) => {
    setTimeout(() => res.send(data), Math.random() * 1000);
  };

  const normalizedQuery = req.query.query
    ? req.query.query.trim().toLowerCase()
    : req.query.query;

  if (!normalizedQuery) {
    sendResponseWithLag({ results: results.slice(0, MAX_RESULTS) });
    return;
  }

  const filteredResults = [];

  for (const result of results) {
    if (
      result.title.toLowerCase().includes(normalizedQuery) ||
      result.snippet.toLowerCase().includes(normalizedQuery)
    ) {
      filteredResults.push(result);
      if (filteredResults.length === MAX_RESULTS) break;
    }
  }

  sendResponseWithLag({ results: filteredResults });
});

app.listen(PORT, () =>
  console.log(`Arachnys mock backend listening at http://localhost:${PORT}`)
);
