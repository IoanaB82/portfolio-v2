---
title: Eat smart webapp
stack: Nextjs, React, Typescript, Material UI
img: (/eat-smart.jpg)
---

This is part of a project done during my 12 weeks React course at IT-Högskolan. Is a desktop-first webapp that allows user to search through recipes from an API, bookmark recipes as favorites or add them to the weekly menu. The user can also add it's own recipes in a separate list. The application stores user's data in local storage.

I made use of **getStaticProps** from **Nextjs**, **Typescript**, **React Hooks** (reducer and context for handling state) and **Material UI** for theming and elements like icons and buttons. It is partially tested with **react testing library**.  
This version is deployed with **Vercel**.

[Deployed version](http://eat-smart-v2-git-main.ioanab82.vercel.app/)

For GitHub code: [Eat smart v2](https://github.com/IoanaB82/eat-smart-v2)

Version 1 of the app is shorter and generates pages dynamically using **getStaticProps** and **getStaticPaths**, as well as it includes some unit testing with react-testing-library.

For GitHub code [Eat smart v1](https://github.com/IoanaB82/eat-smart-nextjs-app)
