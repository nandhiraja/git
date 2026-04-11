#  Cherry-Picking Commits Between Branches

## Objective:
- Selectively apply a commit from one branch to another using cherry
pick..

## Requirements:
-Create two branches with distinct commits

- Identify a commit on one branch that you want to apply to the other.

- Use `git cherry-pick <commit-hash>`  to apply the commit and handle any conflicts if they arise.

- Verify the commit history to ensure the cherry-picked commit is present. 


```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git add .\file-01.txt    

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git commit -m "feat[task-07]: Initial commit for Cherry Pick task"
                [main 34df412] feat[task-07]: Initial commit for Cherry Pick task
                 1 file changed, 2 insertions(+)
                 create mode 100644 task-07/file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git checkout Employee-2
                Switched to branch 'Employee-2'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git commit -m "feat[task-07]: second commit by Employee-2"        
                [Employee-2 a538bb6] feat[task-07]: second commit by Employee-2
                 1 file changed, 1 insertion(+)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git commit -m "feat[task-07]: Third commit by Employee-2" 
                [Employee-2 ea3de55] feat[task-07]: Third commit by Employee-2
                 1 file changed, 3 insertions(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git commit -m "feat[task-07]: fourth commit by Employee-2"
                [Employee-2 d816ae0] feat[task-07]: fourth commit by Employee-2
                 1 file changed, 3 insertions(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git checkout main
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git log --oneline --graph --all
                * d816ae0 (HEAD -> Employee-2) feat[task-07]: fourth commit by Employee-2
                * ea3de55 feat[task-07]: Third commit by Employee-2
                * a538bb6 feat[task-07]: second commit by Employee-2
                * 34df412 (main) feat[task-07]: Initial commit for Cherry Pick task


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-07> git cherry-pick ea3de55
                Auto-merging task-07/file-01.txt
                CONFLICT (content): Merge conflict in task-07/file-01.txt
                error: could not apply ea3de55... feat[task-07]: Third commit by Employee-2
                hint: After resolving the conflicts, mark them with
                hint: "git add/rm <pathspec>", then run
                hint: "git cherry-pick --continue".
```
 ## preview

 
# Before
## Employee-1 branch

<img width="1000" height="383" alt="Image" src="https://github.com/user-attachments/assets/4b6d364b-78ec-4741-b236-d6733d243835" />

## main branch 

<img width="1104" height="265" alt="Image" src="https://github.com/user-attachments/assets/83c40255-9c6c-46a0-bf58-dc53d10f148c" />
 
## Commit log 

<img width="1007" height="116" alt="Image" src="https://github.com/user-attachments/assets/5bdb5dac-ed6e-4932-ad1a-b15133fe66c6" />

# After 

## Cherry Pick

<img width="1007" height="206" alt="Image" src="https://github.com/user-attachments/assets/5f29acff-c01e-480f-b66f-ca5a2a3b193c" />

<img width="1007" height="313" alt="Image" src="https://github.com/user-attachments/assets/e8e6ec55-a855-4aed-83e3-9a093d51d153" />

