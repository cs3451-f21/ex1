# Example 1: Using Typescript, Web, Simple Graphics  

This repository implements a small interactive program in TypeScript.

## Development Environment

The sample has been set up with a complete project for Typescript development.

To work with this sample, you should have Node (and in particular, npm) installed, which you can retrieve from [nodejs.org](http://nodejs.org). (We recommend first installing nvm [[Mac/Linux](https://github.com/nvm-sh/nvm)] [[Windows](https://github.com/coreybutler/nvm-windows)] and using it to install node.)

You do not need to install anything else globally, as typescript and all the tools will be installed inside your project.

This project uses [Vite](https://vitejs.dev/), a fast, lightweight, modern build-and-dev tool that leverages [Rollup](https://rollupjs.org/guide/en/) as its bundler and supports hot-module-replacement. 

## Running and Debugging

The development environment for vite is run using the npm "dev" script in the package.json file, using ```npm run dev```.  This starts the vite server, and should show you something like 
```
  vite v2.4.4 dev server running at:

  > Local: https://localhost:3000/
  > Network: use `--host` to expose

  ready in 384ms.
```
You can then access the server from your web browser at the listed url (```https://localhost:3000``` in this case).

Vite supports hot-module-replacement, so when you edit and save any file in your project, the program will be reloaded in your browser. 

You can use your browser's development tools for debugging.