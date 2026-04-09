

### A `.gitignore` file is a plain text configuration file that tells Git which files or folders to intentionally ignore and not track in a repository. 

## Key Functions
 - *Prevents Tracking:* Files listed in .gitignore will not appear as "untracked" in git status and will be skipped when you run git add ..
 - *Security:* It is used to keep sensitive information like API keys, passwords, and environment variables (e.g., .env files) out of public repositories.
 - *Cleanliness:*It keeps the project's history clean by excluding temporary files, build artifacts (like /dist or /build), and system-specific files (like macOS .DS_Store or Windows Thumbs.db).
 - *Team Consistency:* When committed to the repository, it ensures all collaborators ignore the same unnecessary files.