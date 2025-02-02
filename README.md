## Contributing to the Repository


## Cloning the Repository

1.  Open a terminal window.
2.  Navigate to the directory where you want to clone the repository.
3.  Use the `git clone` command followed by the repository's URL. The URL can be found on the repository's homepage.

```
git clone https://<url-of-repository>.git
```
4. After cloning navigate to the file
```
cd repo-name
```
5. Run `npm install` in the terminal to install all necessary dependencies. 
   
## Pulling Updates (Before Making Changes and Pushing)

1.  Navigate to your cloned repository directory using the terminal.
2.  Run the following command to fetch any recent changes from the remote repository:

```
git pull
```

This is important to ensure you are working on the latest version of the code.

3. You can now run `npm run dev` to start the server

## Creating an Issue

1.  Open the repository homepage on the GitHub.
2.  Click the Issues tab.
3.  Click the New Issue button.
4.  Provide a clear and descriptive title for your issue.
5.  Describe the issue in detail, including steps to reproduce it if applicable.

## Creating a Branch for an Issue 

1.  Navigate to your local repository directory using the terminal.
2.  Use the following command to create a new branch with a descriptive name (e.g., `fix-issue-123`):

```
git checkout -b fix-issue-123
```

## Adding and Committing Changes

1.  Once you've made your changes, use Git to stage them for commit. Use the `git add` command followed by the filename(s) or a wildcard character (`*`) to add all modified files.

```
git add <filename>
```

or

```
git add *
```

2.  Run the `git commit` command with a descriptive commit message that summarizes your changes.

```
git commit -m "Fix issue #123: Improved error handling"
```

## Pulling Updates (Before Pushing)

1.  Before pushing your changes, it's essential to pull again to avoid merge conflicts.

## Pushing Your Changes

1.  Navigate to your local repository directory using the terminal.
2.  Run the following command to push your commits to the remote repository:

```
git push origin fix-issue-123
```

Note: Replace `fix-issue-123` with the actual name of your branch.

Creating a Pull Request

1.  After pushing your changes, navigate to the repository homepage on the hosting platform.
2.  Click the Pull Requests tab.
3.  Click the button to create a new pull request.
4.  Select the branch containing your changes and provide a clear description of your contribution.
5.  Submit the pull request for review.
