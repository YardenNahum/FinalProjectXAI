const express = require('express');
const router = express.Router();

/**
 * GET XAI REPORT
 * Endpoint: /api/reports/:domain/:id
 */
router.get("/:domain/:id", async (req, res) => {
  try {
    const { domain, id } = req.params;
    const FIREBASE_DB_URL = "https://xai-project-b65cc-default-rtdb.firebaseio.com/"; 
    const url = `${FIREBASE_DB_URL}/Reports/${domain}/${id}.json`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from Firebase" });
    }
    
    const data = await response.json();

    if (!data) {
      return res.status(404).json({ error: "Report not found at this path." });
    }

    res.json(data);
  } catch (error) {
    console.error("Extraction Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * PROXY ROUTE FOR EXTERNAL JSON
 * Endpoint: /api/reports/proxy/translations
 * Solves CORS issues by fetching the file via server-side
 */
router.get("/proxy/translations", async (req, res) => {
  try {
    const externalUrl = 'https://s-install.avcdn.net/aos/assets/prod/translations/Locale-he.json';
    const response = await fetch(externalUrl);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch external resource" });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Internal Server Error during proxy fetch" });
  }
});

module.exports = router;