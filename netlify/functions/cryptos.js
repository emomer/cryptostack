export const handler = async () => {
  try {
    const rawKey = process.env.COINCAP_KEY;
    const apiKey = rawKey ? rawKey.trim() : "";

    if (!apiKey) {
      console.error("COINCAP_KEY missing or empty in function environment");
      return {
        statusCode: 500,
        body: "Missing COINCAP_KEY environment variable",
      };
    }

    console.log("CoinCap request using key length", apiKey.length);

    const response = await fetch("https://rest.coincap.io/v3/assets?limit=10", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("CoinCap responded with", response.status, errorText);
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
    console.error("CoinCap fetch failed", error);
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
