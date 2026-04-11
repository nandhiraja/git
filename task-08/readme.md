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
// index.js
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
node task-08/test.js

# Capture exit status
if [ $? -ne 0 ]; then
  echo "❌ Commit aborted due to failing tests"
  exit 1
fi

echo "✅ Tests passed. Proceeding with commit"
exit 0

```
## console 

```powershell

\PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-08> git add .

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-08> git commit  -m "feat(JS): Add function to perfrom Addition"
            Running pre-commit checks...
            Running unit tests...
            ✅ All tests passed
            ✅ Tests passed
            [main 4566774] feat(JS): Add function to perfrom Addition
             3 files changed, 100 insertions(+)
             create mode 100644 task-08/index.js
             create mode 100644 task-08/readme.md
             create mode 100644 task-08/test.js

 PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-08> git add .\index.js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-08> git commit  -m "refactor(JS): Change the + to / in funtion to check hooks test"
            Running pre-commit checks...
            Running unit tests...
            ❌ Test failed: 2 + 2 should be 4
            ❌ Commit blocked due to failing tests

```


## preview

<img width="1677" height="381" alt="Image" src="https://github.com/user-attachments/assets/eaca0708-3092-409e-bf8f-608ecdc49e21" />
