#  Comprehensive Workflow with Forced Pushes and Recovery

## Objective:

- Simulate an advanced Git scenario that includes forced pushes, recovering lost commits, and a multi-branch workflow.

## Requirements:

- Create a repository with multiple branches representing features, bug fixes, and releases.

- Simulate a scenario where a forced push ( git push --force ) is required (for example, after rewriting history with an interactive rebase).

- Use `git reflog` to locate and recover lost commits after a mistaken force push.

- Document each step, explaining how and why forced pushes should be handled with care, and how `git reflog`  can be a lifesaver.

- Discuss best practices for collaborating with teams when rewriting history and using force pushes 

```powershell

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git add .\index.js
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git commit  -m "feat[task-10]: Add calculator functionality"
         [feature 2824b33] feat[task-10]: Add calculator functionality
         1 file changed, 8 insertions(+)
         create mode 100644 task-10/index.js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git branch features
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git checkout features 
        Switched to branch 'features'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git add .\index.js
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git commit  -m "feat[task-10]: feature-1 |  create  subraction function"
        [features eb3a219] feat[task-10]: feature-1 |  create  subraction function
         1 file changed, 4 insertions(+)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git add .\index.js
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git commit  -m "feat[task-10]: feature-2 |  create division function"   
        [features 33e267a] feat[task-10]: feature-2 |  create division function
         1 file changed, 4 insertions(+)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git  branch bug-fix
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git  checkout  bug-fix
        Switched to branch 'bug-fix'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git add .\index.js
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git commit  -m "fix[task-10]: fix feature-2 | change the operator '*' to '/' " 
        [bug-fix c356492] fix[task-10]: fix feature-2 | change the operator '*' to '/'
         1 file changed, 1 insertion(+), 1 deletion(-)

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git add .\index.js                                                          
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git commit  -m "fix[task-10]: fix 'add' function | add return value for add function  "
        [bug-fix a1cec9e] fix[task-10]: fix 'add' function | add return value for add function
         1 file changed, 1 insertion(+), 1 deletion(-)



PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git checkout main
        Switched to branch 'main'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git merge features
        Updating fe6e539..33e267a
        Updating fe6e539..33e267a
        Fast-forward
         task-09/console-output.txt |  65 +++++++++++++++++++++++++++
         task-09/index.js           |   5 ++-
         task-09/readme.md          | 108 +++++++++++++++++++++++++++++++++++++++++++++
         task-10/index.js           |  16 +++++++
         4 files changed, 193 insertions(+), 1 deletion(-)
         create mode 100644 task-09/console-output.txt
         task-10/index.js           |  16 +++++++
         4 files changed, 193 insertions(+), 1 deletion(-)
         create mode 100644 task-09/console-output.txt
         4 files changed, 193 insertions(+), 1 deletion(-)
         create mode 100644 task-09/console-output.txt
         create mode 100644 task-09/console-output.txt
         create mode 100644 task-09/readme.md
         create mode 100644 task-10/index.js

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git branch release
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git checkout release
        Switched to branch 'release'
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git push
                To https://github.com/nandhiraja/git.git
                 ! [rejected]        main -> main (fetch first)
                error: failed to push some refs to 'https://github.com/nandhiraja/git.git'
                hint: Updates were rejected because the remote contains work that you do not
                hint: have locally. This is usually caused by another repository pushing to
                hint: the same ref. If you want to integrate the remote changes, use
                hint: 'git pull' before pushing again.
                hint: See the 'Note about fast-forwards' in 'git push --help' for details.

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git log --oneline --graph --all
                *   e3cf63a (HEAD -> main, origin/main) Merge branch 'release'
                |\
                | * ec29723 (release) chore[task-10]: Add the document for application V1
                * | a1cec9e (bug-fix) fix[task-10]: fix 'add' function | add return value for add function
                * | c356492 fix[task-10]: fix feature-2 | change the operator '*' to '/'
                |/
                * 33e267a feat[task-10]: feature-2 |  create division function
                * eb3a219 feat[task-10]: feature-1 |  create  subraction function
                | * 065f619 (origin/features, features) feat[task-10]: Complete features| subration and division added
                |/
                * 2824b33 (feature) feat[task-10]: Add calculator functionality

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git stash
                Saved working directory and index state WIP on main: e3cf63a Merge branch 'release'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git checkout -b recovery 33e267a
                Switched to a new branch 'recovery'

PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git checkout main
                Switched to branch 'main'
                Your branch is up to date with 'origin/main'.
                PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10> git stash pop
                On branch main
                Your branch is up to date with 'origin/main'.

                Changes not staged for commit:
                  (use "git add <file>..." to update what will be committed)
                  (use "git restore <file>..." to discard changes in working directory)
                        modified:   console-output.txt
                        modified:   readme.md

                no changes added to commit (use "git add" and/or "git commit -a")
                Dropped refs/stash@{0} (729718672870c498daa1d436ca724c146a2484b5)
PS C:\Users\nandh\OneDrive\Desktop\Presidio-space\Self-learning\Git-hub\git\task-10>
```
## preview

<img width="1505" height="862" alt="Image" src="https://github.com/user-attachments/assets/bd7d6955-34a4-4486-aa67-dd0a93324123" />

<img width="1481" height="598" alt="Image" src="https://github.com/user-attachments/assets/a9e238ba-6a97-4363-8578-612262df7c90" />

<img width="1404" height="177" alt="Image" src="https://github.com/user-attachments/assets/4015dc29-8bdd-41e8-9dd1-cd614ea592b1" />

<img width="1280" height="108" alt="Image" src="https://github.com/user-attachments/assets/aba4706e-7214-4f5b-b82f-a4cb4ff08b75" />

<img width="1411" height="552" alt="Image" src="https://github.com/user-attachments/assets/4e6dbe5f-7e4b-4a8a-bcaa-ecf38f11a67c" />

<img width="1485" height="220" alt="Image" src="https://github.com/user-attachments/assets/9c2247d4-10ba-40ca-8e0f-75d6cc30d587" />

<img width="1472" height="547" alt="Image" src="https://github.com/user-attachments/assets/196b697b-123d-49a4-a99f-1eda10f44fc1" />

<img width="1477" height="268" alt="Image" src="https://github.com/user-attachments/assets/1a6677f5-643a-4f9d-91de-d852571107d7" />


<img width="1462" height="430" alt="Image" src="https://github.com/user-attachments/assets/65c755bf-16bf-49fc-8089-7b65e71b8c03" />