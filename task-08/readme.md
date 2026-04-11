#  Using Git Hooks for Automated Checks

## Objective:
- Set up a Git hook to run scripts (like linters or tests) before commits
are finalized.

## Requirements:
- Create a `pre-commit`  hook in the `.git/hooks`  directory

- Write a simple script (e.g., a shell script or Node script) that runs a linter or a unit test. 

- Ensure that if the tests or linting fail, the commit is aborted

- Document how Git hooks can improve code quality in collaborative projects.

```js
// main.js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

```js
// test.js

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

```
```sh

echo "Running pre-commit checks..."

# Run unit tests
node test.js

# Capture exit status
if [ $? -ne 0 ]; then
  echo "❌ Commit aborted due to failing tests"
  exit 1
fi

echo "✅ Tests passed. Proceeding with commit"
exit 0

```

```powershell


```


## preview

