const { add } = require("./index");

console.log("Running unit tests...");

try {
  if (add(2, 2) !== 4) {
    throw new Error("Test failed: 2 + 2 should be 4");
  }

  if (add(5, 3) !== 8) {
    throw new Error("Test failed: 5 + 3 should be 8");
  }

  console.log("✅ All tests passed");
  process.exit(0);

} catch (error) {
  console.log("❌", error.message);
  process.exit(1);
}