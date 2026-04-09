# Initialize, Commit, and Branch Basics

## Objective:
 - Initialize a new Git repository.
 - Create a few files and commit them
 - Create a new branch, make changes, and merge it back to the main
branch. 

## Requirements:

- Use  `git init` , `git add `, and  `git commit`  to start our repository.

 - Create a branch using  `git branch `  or  `git checkout -b` and switch between branches.

 - Merge the branch back to the main branch and verify the commit history.

 ## console output

```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git commit -m "feat: Initial commit from Main branch" 
        [main (root-commit) 215239c] feat: Initial commit from Main branch
         1 file changed, 13 insertions(+)
         create mode 100644 task-01/file-01.txt


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git branch
        * main


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git branch Employee-1

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git checkout Employee-1 
        Switched to branch 'Employee-1'


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git add .\file-01.txt

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git commit -m "feat: Add content from Employee-1 branch"
        [Employee-1 d672f2f] feat: Add content from Employee-1 branch
         1 file changed, 9 insertions(+)


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git checkout main
        Switched to branch 'main'


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01> git merge Employee-1
        Updating 215239c..d672f2f
        Fast-forward
         task-01/file-01.txt | 9 +++++++++
         1 file changed, 9 insertions(+)


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-01>
```


 ## samples

 


<img width="1485" height="662" alt="Image" src="https://github.com/user-attachments/assets/38aff3e2-f1e9-40cb-93c5-54813207652d" />