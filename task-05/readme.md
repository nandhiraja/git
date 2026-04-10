# Interactive Rebasing for Clean Commit History

## Objective:

- Use interactive rebase to tidy up your commit history

## Requirements:

- Create a series of commits (some with minor changes or typos in commit messages).

- Run git rebase -i HEAD~n (with n  representing the number of commits) to squash, reorder, and edit commit messages.

- Explain how squashing helps in cleaning up commit history before
merging into a main branch.


```powershell

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git commit -m "feat[task-05]:Initial commit for git rebash"
        [main 550ce1a] feat[task-05]:Initial commit for git rebash
         1 file changed, 1 insertion(+)
         create mode 100644 task-05/file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git commit -m "feat[task-05]: Second commit for modified content"           
        [main 27569cb] feat[task-05]: Second commit for modified content
         1 file changed, 1 insertion(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git checkout Employee-1
        Switched to branch 'Employee-1'


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git merge main         
        Updating c52b8c0..27569cb
        Fast-forward
         task-05/file-01.txt | 1 +
         1 file changed, 1 insertion(+)
         create mode 100644 task-05/file-01.txt



=============================================================== Commit from Employee-1 branch =======================================================================================


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git commit -m "feat[task-05]: Third commit content modified form employee-1"
        [Employee-1 d9eb13f] feat[task-05]: Third commit content modified form employee-1
         1 file changed, 1 insertion(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git commit -m "feat[task-05]: Fourth commit final content modified form employee-1"       
        [Employee-1 fcaba57] feat[task-05]: Fourth commit final content modified form employee-1
         1 file changed, 1 insertion(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git add .\console-output.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git commit -m "feat[task-05]: Add console output"                                  
        [Employee-1 4fbb301] feat[task-05]: Add console output
         1 file changed, 41 insertions(+)
         create mode 100644 task-05/console-output.txt


```
```powershell

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git log --oneline --graph --all
        * 4f9e0bc (HEAD -> main) docs[task-05]: Add document for rebash
        | * 7ad3b82 (Employee-1) feat[task-05]: update console output
        | * 4fbb301 feat[task-05]: Add console output
        | * fcaba57 feat[task-05]: Fourth commit final content modified form employee-1
        | * d9eb13f feat[task-05]: Third commit content modified form employee-1
        |/  
        * 27569cb feat[task-05]: Second commit for modified content
        * 550ce1a feat[task-05]:Initial commit for git rebash


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git rebase Employee-1
        Successfully rebased and updated refs/heads/main.

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git log --oneline --graph --all
        * c864e99 (HEAD -> main) docs[task-05]: Add document for rebash
        * 7ad3b82 (Employee-1) feat[task-05]: update console output
        * 4fbb301 feat[task-05]: Add console output
        * fcaba57 feat[task-05]: Fourth commit final content modified form employee-1
        * d9eb13f feat[task-05]: Third commit content modified form employee-1
        * 27569cb feat[task-05]: Second commit for modified content
        * 550ce1a feat[task-05]:Initial commit for git rebash

```

## Git squashing 

```js


```
 
## preview

