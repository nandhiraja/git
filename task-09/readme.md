#  Working with Remote Repositories and Collaboration


## Objective:
- Simulate a collaborative workflow with remote repositories

## Requirements:
- Create a local repository and push it to a remote service (e.g., GitHub or GitLab).

- Create a feature branch, make commits, and push the branch to the remote.

- Open a Pull Request (or Merge Request) and perform a code review process.

- Merge the feature branch into the main branch on the remote and then pull the changes locally

```powershell
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git add  .\index.js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git commit -m "feat[Task-09]: Add the function to perform addition | Main branch"
            Running pre-commit checks...
            Running unit tests...
            ✅ All tests passed
            ✅ Tests passed
            [main fe6e539] feat[Task-09]: Add the function to perform addition | Main branch
             1 file changed, 6 insertions(+)
             create mode 100644 task-09/index.js
            Delta compression using up to 12 threads
            Compressing objects: 100% (3/3), done.
            Writing objects: 100% (4/4), 407 bytes | 101.00 KiB/s, done.
            Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
            remote: Resolving deltas: 100% (1/1), completed with 1 local object.
            To https://github.com/nandhiraja/git.git
               6799e4e..fe6e539  main -> main


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git pull
        From https://github.com/nandhiraja/git
         * [new branch]      feature    -> origin/feature
        Already up to date.

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git switch -c feature origin/feature
        branch 'feature' set up to track 'origin/feature'.
        Switched to a new branch 'feature'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git branch
          Employee-1
          Employee-2
        * feature
          main

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git add .\index.js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git commit  -m "feat[Task-09]: Add function for Subration"
        Running pre-commit checks...
        Running unit tests...
        ✅ All tests passed
        ✅ Tests passed
        [feature c9cfc1c] feat[Task-09]: Add function for Subration
         1 file changed, 4 insertions(+), 1 deletion(-)
        PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git push feature 
        fatal: 'feature' does not appear to be a git repository
        fatal: Could not read from remote repository.

        Please make sure you have the correct access rights
        and the repository exists.


PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> git push
        Enumerating objects: 7, done.
        Counting objects: 100% (7/7), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (3/3), done.
        Writing objects: 100% (4/4), 404 bytes | 202.00 KiB/s, done.
        Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
        remote: Resolving deltas: 100% (1/1), completed with 1 local object.
        To https://github.com/nandhiraja/git.git
           fe6e539..c9cfc1c  feature -> feature



PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-09> 

```
## preview

## main branch

<img width="1342" height="942" alt="Image" src="https://github.com/user-attachments/assets/e6473fe0-079b-42ae-88fd-9b4a17eebbe5" />

<img width="1046" height="356" alt="Image" src="https://github.com/user-attachments/assets/bfd73bf1-2364-4e07-a4ae-3f64d2ccefd2" />

## Feature branch

<img width="1160" height="177" alt="Image" src="https://github.com/user-attachments/assets/47ed4e26-f679-4dce-85ba-20dfadd2e42a" />

<img width="1384" height="343" alt="Image" src="https://github.com/user-attachments/assets/fef6078c-db34-4cfe-8ffe-589a08577d4b" />

<img width="1372" height="646" alt="Image" src="https://github.com/user-attachments/assets/f4fbb68c-b6aa-46a9-9971-4d03822bae0c" />

## Git-hub

<img width="1318" height="946" alt="Image" src="https://github.com/user-attachments/assets/9d77a605-772d-4bb1-8804-31f7ca4c6ed3" />

<img width="1907" height="413" alt="Image" src="https://github.com/user-attachments/assets/6d811c87-e6e9-4f6f-8de5-d87405a8cc47" />

<img width="1912" height="837" alt="Image" src="https://github.com/user-attachments/assets/b5271aec-531a-4f64-9f9d-a3bbad5591de" />

<img width="1891" height="773" alt="Image" src="https://github.com/user-attachments/assets/87afe8bd-40b2-4e68-a187-7c4beda2b162" />