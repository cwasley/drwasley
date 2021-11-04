# MyRadiologist
This repo contains the main functionality for MyRadiologist, found at drwasley.com.

# Getting started
Instructions here are for macOS with a standard `zsh` shell.

## Prerequisites (some of these you may have already completed)

1. Configure git if you haven't already
```zsh
    git config --global user.name "[First name] [Last name]"
    git config --global user.email "[email@domain.com]"
  ```

2. Install [Homebrew](http://brew.sh)
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Install [Yarn](https://yarnpkg.com/en/docs/install#mac-tab).
```zsh
brew install yarn
```

5. Install [Postgres](https://www.postgresql.org)
```zsh
brew install postgresql
brew link --force postgresql
brew services start postgresql
createuser -s postgres
createdb
```

4. Copy database url from [Vercel](https://vercel.com/) and add to .env.local

5. Restart terminal

6. Start server
```zsh
yarn dev
```
