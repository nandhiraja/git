## Simulating and Resolving Merge Conflicts

## Objective:
- Create a scenario that produces a merge conflict and resolve it

## Requirements:
-  Create two branches from the same commit.
 -Modify the same line(s) of code in a common file in both branches.
 -Attempt to merge the branches, observe the conflict, and resolve it
manually.       
- Use `git status`  and `git diff`  to identify and resolve the conflicting changes

```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git commit -m "feat[task-04]: Initial commint from 'main' branch"
         [main 320d57c] feat[task-04]: Initial commint from 'main' branch
          1 file changed, 6 insertions(+)
          create mode 100644 task-04/file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git branch
          Employee-1
        * main

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git checkout Employee-1
        Switched to branch 'Employee-1'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git add .\file-01.txt   

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git commit -m "feat[task-04]: Updated the content and commit from 'Employee-1' branch"
        [Employee-1 5303614] feat[task-04]: Updated the content and commit from 'Employee-1' branch
         1 file changed, 9 insertions(+)
         create mode 100644 task-04/file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git status
        On branch Employee-1
        Untracked files:
          (use "git add <file>..." to include in what will be committed)
                ../task-02/
                console-output.txt
                readme.md

        nothing added to commit but untracked files present (use "git add" to track)


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git log --oneline   
        5303614 (HEAD -> Employee-1) feat[task-04]: Updated the content and commit from 'Employee-1' branch
        d672f2f feat: Add content from Employee-1 branch
        215239c feat: Initial commit from Main branch

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git checkout main
        Switched to branch 'main'
        Your branch is ahead of 'origin/main' by 1 commit.
          (use "git push" to publish your local commits)



PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-04> git diff 320d57c ab3319f
        diff --git a/task-04/file-01.txt b/task-04/file-01.txt
        deleted file mode 100644
        index 59d0766..0000000
        --- a/task-04/file-01.txt
        +++ /dev/null
        @@ -1,6 +0,0 @@
        -This content is written in 'main' branch
        -
        -Title: Simulating and Resolving Merge Conflicts
        -
        -Use `git status` and `git diff` to identify and resolve the conflicting
        -changes         


```

 ## preview

 



<img width="1640" height="567" alt="Image" src="https://github.com/user-attachments/assets/720a5ee1-a271-4803-bfc3-2a2190ae5823" />

<img width="1530" height="310" alt="Image" src="https://github.com/user-attachments/assets/a96a35a9-1e5d-4530-9cce-ea808a38ea74" />

### conflict

<img width="1644" height="565" alt="Image" src="https://github.com/user-attachments/assets/f059f200-5dde-49a1-8e06-697c87be5dd5" />