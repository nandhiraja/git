#  Stashing Changes for Context Switching

## Objective:
- Learn how to use Git stash to save uncommitted work temporarily.

## Requirements:
- Make changes in your working directory without committing.

- Use  `git stash`  to save these changes.

- Switch branches, perform some work, then return and reapply your stashed changes with `git stash pop`

- Optionally, demonstrate how to view and manage multiple stashes using  `git stash list`  and `git stash drop` 


```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git commit -m 'feat[task-06]: Initial commit for git stash'
        [main acae346] feat[task-06]: Initial commit for git stash
         1 file changed, 1 insertion(+)
         create mode 100644 task-06/file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git stash
        Saved working directory and index state WIP on main: acae346 feat[task-06]: Initial commit for git stash

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git branch Employee-2 

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git checkout Employee-2
        Switched to branch 'Employee-2'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git stash pop
        Auto-merging task-06/file-01.txt
        CONFLICT (content): Merge conflict in task-06/file-01.txt
        On branch main
        Your branch is ahead of 'origin/main' by 2 commits.
          (use "git push" to publish your local commits)
        
        Unmerged paths:
          (use "git restore --staged <file>..." to unstage)
          (use "git add <file>..." to mark resolution)
                both modified:   file-01.txt
        
        Untracked files:
          (use "git add <file>..." to include in what will be committed)
                readme.md
        
        no changes added to commit (use "git add" and/or "git commit -a")
        The stash entry is kept in case you need it again.
        PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06>

```
### git stash list  and git stash drop
```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git stash list
        stash@{0}: WIP on main: acae346 feat[task-06]: Initial commit for git stash
        stash@{1}: WIP on main: 187fbc7 refactor[Task-03]: Modify file commit (No 3)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git stash drop 'stash@{1}'
        Dropped stash@{1} (e009cbf2c4c7dd04fda35e2b869bc05720130307)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-06> git stash list
        stash@{0}: WIP on main: acae346 feat[task-06]: Initial commit for git stash
```
 ## preview

### Brfore stash
 
<img width="1466" height="613" alt="Image" src="https://github.com/user-attachments/assets/64506b17-7006-454b-a87d-3dd7dd67c661" />

### After stash  

<img width="1461" height="589" alt="Image" src="https://github.com/user-attachments/assets/2dafeb3a-da95-42d3-88b6-1f858b98f98f" />

### Branch switch Employee-2

<img width="1470" height="669" alt="Image" src="https://github.com/user-attachments/assets/9cbbfad0-6cfe-435c-bd93-6d6155ba4e46" />

### merge conflict

<img width="1640" height="704" alt="Image" src="https://github.com/user-attachments/assets/5468c222-bfc2-40bc-bbbc-a570a0135635" />

### git stash list and git stash drop 

<img width="1084" height="233" alt="Image" src="https://github.com/user-attachments/assets/bbbb2ec9-9d8f-4555-b8e0-fa2037a4ecd5" />

 

