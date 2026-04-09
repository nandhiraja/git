## Undoing Changes and Reverting Commits

## Objective:
- Experiment with undoing changes in your working directory and
commits.

## Requirements:
- Modify a tracked file and use  `git checkout -- <file>` (or  `git restore` ) to undo changes. 
 - Make a commit, then use `git revert`  or `git reset` to see how you can
undo a commit safely.
 - Explain the differences between these approaches.


```js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git add .\file-01.txt
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git commit -m 'feat[Task-03]: Initial commit (No 1)'
        [main 773683e] feat[Task-03]: Initial commit (No 1)
         1 file changed, 1 insertion(+)
         create mode 100644 task-03/file-01.txt


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git add .\file-01.txt 
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git commit -m 'refactor[Task-03]: Modify file commit (No 2)'
        [main d4ab0e2] refactor[Task-03]: Modify file commit (No 2)
         1 file changed, 1 insertion(+), 1 deletion(-)


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git add .\file-01.txt
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git commit -m 'refactor[Task-03]: Modify file commit (No 3)'
        [main 187fbc7] refactor[Task-03]: Modify file commit (No 3)
         1 file changed, 1 insertion(+), 1 deletion(-)


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git add .\file-01.txt
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git commit -m 'refactor[Task-03]: Modify file commit (No 4)'
        [main ef6739f] refactor[Task-03]: Modify file commit (No 4)
         1 file changed, 1 insertion(+), 1 deletion(-)


```

```js
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git log --oneline
        187fbc7 (HEAD -> main, origin/main) refactor[Task-03]: Modify file commit (No 3)
        d4ab0e2 refactor[Task-03]: Modify file commit (No 2)
        773683e feat[Task-03]: Initial commit (No 1)
        bf99de1 refactor: Align the console outputs

```
```js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git status
        On branch main
        Your branch is ahead of 'origin/main' by 1 commit.
          (use "git push" to publish your local commits)

        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git restore <file>..." to discard changes in working directory)
                modified:   file-01.txt

        no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-03> git restore .\file-01.txt   

```

 ## preview
### Before Reset

<img width="1513" height="551" alt="Image" src="https://github.com/user-attachments/assets/6be80ee8-f21f-4b5e-bee6-e4ef69bd528d" />

---
### After reset 

<img width="1492" height="181" alt="Image" src="https://github.com/user-attachments/assets/a8fe6f99-7152-4ba9-bc5d-961330fa9355" />

<img width="1640" height="496" alt="Image" src="https://github.com/user-attachments/assets/d12011e9-1a32-4957-b32b-45079845b01f" />