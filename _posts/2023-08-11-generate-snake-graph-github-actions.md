---
layout: post
title: "How To Generate a Snake-eating Graph using Github Actions (step by step)"
date: 2023-08-11 20:00:00 +0300
image:
  path: https://raw.githubusercontent.com/cristian-encalada/cristian-encalada/output/github-contribution-grid-snake.svg
  alt: Snake-eating Graph generated dynamically from Github contributions
categories: [GitHub, Github-Actions]
tags: [github, github-actions]
pin: true
---

Instead of having the default github profile view, it's possible to generate a snake-eating image like above using the [snk tool](https://github.com/marketplace/actions/generate-snake-game-from-github-contribution-grid) in __Github actions__.

In this tutorial there are many screenshots and step by step instructions during all the process. The objective is that `everyone`, even with a basic technical knowledge was able to try and update Github's personal profile and at the same time __learn__ have an introduction to the basics of __GitHub Actions__ tools. 

The only __prerequisite__ is to have a __Github account__.

### 0. Interactive demo

Before starting, If you'd like to try by yourself an interactive demo, you can do it here using your __github username__:

[https://platane.github.io/snk/](https://platane.github.io/snk/)

![Snk tool - interactive demo](https://user-images.githubusercontent.com/1659820/121798244-7c86d700-cc25-11eb-8c1c-b8e65556ac0d.gif)

Let's start step by step.

### 1. Create a 'special' Github Repo for your profile:

First, we need to create a new Github repo to display the snake generated later.

Create a new public repository, and name it as your own github username, the name is very important. 

On your github's user page, click on the __Repositories__ tab on the top and then click on the __New__ button on the right.


Fill in all the required fields as follow and click on th button __Create repository__.

![Create a new repo](/assets/img/2023-08-11-snake-github/2023-08-11_new_gh_repo.png)

You should have some message similar to this (in this case, _dev-404-not-found_ is the github username):

> __dev-404-not-found/dev-404-not-found__ is a ✨special ✨ repository that you can use to add a README.md to your GitHub profile. Make sure it’s public and initialize it with a README to get started.

The new repo should be ready and have the __main__ branch by default.

### 2. Set up SNK Github Actions tool

* In the new repository created, click on the __Actions__ button on the top.

![Gh actions 1](/assets/img/2023-08-11-snake-github/2023-08-11_gh_actions1.png)

* Click on __set up a workflow by yourself ->__

![Gh actions 2](/assets/img/2023-08-11-snake-github/2023-08-11_gh_actions2.png)

* Change the `.yml` file to `snake.yml` or any other name that you want. This change is if in the future, you want to add more workflows and the default main.yml could cause conflicts.

![Gh actions 3](/assets/img/2023-08-11-snake-github/2023-08-11_gh_actions3.png)

* Then copy the following code in the __Edit__ body:

```yml
name: generate snake animation

on:
  # run automatically every 24 hours
  schedule:
    - cron: "0 */24 * * *" 
  
  # allows to manually run the job at any time
  workflow_dispatch:
  
  # run on every push on the main branch
  push:
    branches:
    - main
    
  

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    
    steps:
      # generates a snake game from a github user (<github_user_name>) contributions graph, output a svg animation at <svg_out_path>
      - name: generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          
          
      # push the content of <build_dir> to a branch
      # the content will be available at https://raw.githubusercontent.com/<github_user>/<repository>/<target_branch>/<file> , or as github page
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

* Click on the __Commit changes__ button, the option __Commit directly to the main branch__ should be selected by default and Click on __Commit changes__ again.

![Gh actions 4](/assets/img/2023-08-11-snake-github/2023-08-11_gh_actions4.png)

That's all, now,the new workflow should be ready for the next step.

* To verify the new Github Action workflow, you can check your repository files, should be a new directory called `.github/workflows` :

![Gh actions 5](/assets/img/2023-08-11-snake-github/2023-08-11_gh_actions5.png)

### 3. Create a Personal Access Token and an Action Secret for the workflow

Last but not less important is the credentials for the workflow, if not, it will fail and not generate the snake image.

#### Generate a Personal Access Token

* Click on your profile icon (top-right corner) and click on `Settings` option in the menu.

![Gh token 1](/assets/img/2023-08-11-snake-github/2023-08-11_access_token1.png)

* Optionally you can use access through this link: [https://github.com/settings/profile](https://github.com/settings/profile)

* Click on the __Developer settings__ button at the bottom of the left menu.

![Gh token 2](/assets/img/2023-08-11-snake-github/2023-08-11_access_token2.png)

* Optionally you can use access through link: [https://github.com/settings/tokens](https://github.com/settings/tokens)

* Click on the Personal access tokens -> Tokens(classic) -> Generate new token -> Generate new token (classic)

![Gh token 3](/assets/img/2023-08-11-snake-github/2023-08-11_access_token3.png)

* Fill in the first fields:
  * Note: `workflow_token`
  * Expiration: `90 days`
  * Check the `workflow` checkbox (it will automatically check all repo scopes)

![Gh token 4](/assets/img/2023-08-11-snake-github/2023-08-11_access_token4.png)

* Click on __Generate token__ button at the bottom


* Your new token should be ready, it will be used adding the new secret.

![Gh token 5](/assets/img/2023-08-11-snake-github/2023-08-11_access_token5.png)

* `Important!` As the message say: __Make sure to copy your personal access token now. You won’t be able to see it again!__ 

#### Generate a Repository Action Secret

Now let's configure the action secret for the new personal repository. This is the "hardest" part because most of the errors happen here, but don't worry, just follow the steps carefully and it will work.


* In the 'special' repo created at the beginning, click on the `Settings`

![Gh secret 1](/assets/img/2023-08-11-snake-github/2023-08-11_action_secret.png)

Make sure that you are in the correct repo, checking the URL, should be something like this (`dev-404-not-found` is my github username)
https://github.com/dev-404-not-found/dev-404-not-found/settings

* On the left menu, click on Secrets and variables -> Actions

![Gh secret 2](/assets/img/2023-08-11-snake-github/2023-08-11_action_secret2.png)

![Gh secret 3](/assets/img/2023-08-11-snake-github/2023-08-11_action_secret3.png)

* Fill in the firs fields:
  * Name: `GH_TOKEN`
  * Secret: `ghp_xxxxxxxxxx`
    * Use the token generated previously [here](#generate-a-personal-access-token)
  * Click on __Add secret__ button at the bottom

![Gh secret 4](/assets/img/2023-08-11-snake-github/2023-08-11_action_secret4.png)

#### Set workflow read and write permissions

Before run the workflow go to Repository -> Settings -> Actions -> Workflow permissions -> Select: __Read and write permissions__

![Gh actions permissions](/assets/img/2023-08-11-snake-github/2023-08-11_actions_permissions.png)

![Gh actions permissions 2](/assets/img/2023-08-11-snake-github/2023-08-11_actions_permissions2.png)

#### Execute manually the workflow

* Finally __execute manually just for the first time__ the workflow

 Still in your repo go to Actions -> All workflows -> generate snake animation -> Run workflow -> Run workflow (by default in main branch)

![Gh run workflow](/assets/img/2023-08-11-snake-github/2023-08-11_generate_snake.png)

If the workflow was executed without errors a green check should be displayed. It will be executed __every 24 hours__ automatically.

![Gh run workflow 2](/assets/img/2023-08-11-snake-github/2023-08-11_generate_snake2.png)

That's all! Your snake .svg image should be properly generated! 🎉

### 4. Add the .svg images to your README.md

#### Get the .svg images URL

In your repo there should be now 2 branch, the main branch, and the output where the .svg images will be pushed

* Go to your repo -> switch branches -> output 

![Gh update README](/assets/img/2023-08-11-snake-github/2023-08-11_update_README.png)

* Click on any of the generated images to obtain the link. The images are:
  * github-contribution-grid-snake-dark.svg
  * github-contribution-grid-snake.svg

![Gh update README 2](/assets/img/2023-08-11-snake-github/2023-08-11_update_README2.png)

* Click on the __Raw__ button at the top right corner.

![Gh update README 3](/assets/img/2023-08-11-snake-github/2023-08-11_update_README3.png)

* Copy the URL of any image:
  * Should be something like: https://raw.githubusercontent.com/dev-404-not-found/dev-404-not-found/output/github-contribution-grid-snake-dark.svg

![Gh update README 4](/assets/img/2023-08-11-snake-github/2023-08-11_update_README4.png)

#### Update your README.md file

* In the __main__ branch of your repo edit the README.md file.

![Gh update README 5](/assets/img/2023-08-11-snake-github/2023-08-11_update_README5.png)

In order to make the image adaptable to normal or dark mode, you can add the images with media queries, as follow (updating the links with your corresponding username):

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/dev-404-not-found/dev-404-not-found/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/dev-404-not-found/dev-404-not-found/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/dev-404-not-found/dev-404-not-found/output/github-contribution-grid-snake-dark.svg">
</picture>
```

* You can preview the changes, to verify that the image is displayed properly.

![Gh update README 6](/assets/img/2023-08-11-snake-github/2023-08-11_update_README6.png)

* Commit changes -> Commit directly to the main branch -> Commit changes

![Gh update README 7](/assets/img/2023-08-11-snake-github/2023-08-11_update_README7.png)

* Done! Enjoy you eating-snake. :snake:

### Additional information

* Special thanks to [platane](https://github.com/Platane/snk) that is the creator of this awesome tool!

* The github account used in this tutorial [https://github.com/dev-404-not-found](https://github.com/dev-404-not-found) is a new github account created to __test all__ the steps given in this tutorial.

* My main github account is [https://github.com/cristian-encalada](https://github.com/cristian-encalada). The snake workflow is also configured there if you want to take a look.

Thanks for reading! Any questions or improvements, just leave a comment, I'd be glad to help.
