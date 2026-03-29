exports.handler = async function(event, context) {
  const data = [
    { asset: "BTC-PERP", tf: "1h", entry: 29150.00, score: 92, reason: "Bullish RSI + volume" },
    { asset: "ETH-PERP", tf: "4h", entry: 1820.50, score: 88, reason: "RSI reversal + news" },
    { asset: "HYPE-PERP", tf: "1D", entry: 0.1234, score: 86, reason: "RSI confirmation + news" }
  ];
  return { statusCode: 200, body: JSON.stringify(data) };
};
