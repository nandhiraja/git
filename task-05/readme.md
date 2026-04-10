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

```powershell
 
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git log --oneline --graph --all
        * a435336 (HEAD -> main) docs[task-05]: Add document for git rebase
        * 7ad3b82 (Employee-1) feat[task-05]: update console output
        * 4fbb301 feat[task-05]: Add console output
        * fcaba57 feat[task-05]: Fourth commit final content modified form employee-1
        * d9eb13f feat[task-05]: Third commit content modified form employee-1
        * 27569cb feat[task-05]: Second commit for modified content
        * 550ce1a feat[task-05]:Initial commit for git rebash

```

```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-05> git rebase -i HEAD~3
    [detached HEAD 81eecd3] docs[task-05]: Add document for git rebase
     Date: Fri Apr 10 10:42:01 2026 +0530
     2 files changed, 153 insertions(+)
     create mode 100644 task-05/console-output.txt
     create mode 100644 task-05/readme.md
    Successfully rebased and updated refs/heads/main.

```

## preview


<img width="1510" height="314" alt="Image" src="https://github.com/user-attachments/assets/6fd5c7cb-052d-4069-a7e4-67616e1b34ca" />

<img width="1612" height="424" alt="Image" src="https://github.com/user-attachments/assets/5f30850b-610e-407a-91c9-f3f2caa147f5" />

<img width="1562" height="204" alt="Image" src="https://github.com/user-attachments/assets/d76e1c09-432d-470d-8807-41cb4f7cfae6" />

---
## squash
---

<img width="1151" height="672" alt="Image" src="https://github.com/user-attachments/assets/608d7b9d-c7bb-4591-ad50-dcdedc5a28a8" />

<img width="1164" height="667" alt="Image" src="https://github.com/user-attachments/assets/cffb4a9b-e04e-4d03-a75e-f209d02831a8" />

<img width="1054" height="321" alt="Image" src="https://github.com/user-attachments/assets/1601c39e-6770-4f9e-9db8-be39f1252613" />