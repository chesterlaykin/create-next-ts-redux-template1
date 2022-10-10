Create-next-ts-redux-template1
- [Create-next-ts-redux-template1](#create-next-ts-redux-template1)
    - [Redux](#redux)
- [Current status](#current-status)
- [Current goal](#current-goal)
- [Comments (continuous)](#comments-continuous)
      - [sep 2022](#sep-2022)
- [Installed dependencies + configurations](#installed-dependencies--configurations)
  - [**Create next-app with typescript**](#create-next-app-with-typescript)
  - [**Redux ("modern redux" with toolkit)**](#redux-modern-redux-with-toolkit)
    - [Compileroptions configurations](#compileroptions-configurations)
  - [**Typescript**](#typescript)
    - [Vscode recommended settings](#vscode-recommended-settings)
  - [Bootstrap 5](#bootstrap-5)
  - [**SASS**](#sass)
    - [**Sass**](#sass-1)

# Create-next-ts-redux-template1

Template with Next (by Create next app), and typescript, and redux (modern redux with toolkit).
Based on example : [https://github.com/learnwithjason/lets-learn-redux-toolkit](github.com/learnwithjason/lets-learn-redux-toolkit)
[youtube tutorial](https://www.youtube.com/watch?v=9zySeP5vH9c)
### Redux

Modern redux with redux toolkit (that uses Immer)

# Current status
Working
# Current goal

# Comments (continuous)

#### sep 2022

maybe add @types/express
# Installed dependencies + configurations

## **Create next-app with typescript**

Command used:
`yarn create next-app --typescript`

Next.js version: 12.3.1

## **Redux ("modern redux" with toolkit)**

- @reduxjs/toolkit
- react-redux
- react-dom
- express

Command:

`yarn add @reduxjs/toolkit react-redux react-dom express`
### Compileroptions configurations

To not have to import React in every component:

`"jsx": "react-jsx"`

## **Typescript**

The `--typescript` option installs:

- @types/node": "18.8.3"
- @types/react": "18.0.21",
- @types/react-dom

### Vscode recommended settings

## Bootstrap 5

Css grid enabled  ( bootstrap5.2\_variables.scss )
## **SASS**

### **Sass**

Sass
