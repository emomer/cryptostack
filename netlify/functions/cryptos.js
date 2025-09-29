exports.handler = async () => {
  try {
    const apiKey = process.env.COINCAP_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: "Missing COINCAP_KEY environment variable",
      };
    }

    const response = await fetch("https://rest.coincap.io/v3/assets?limit=10", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `CoinCap error ${response.status}`,
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
