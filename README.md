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

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Computer Graphics CS3451 Fall 2021</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.blairmacintyre.me" property="cc:attributionName" rel="cc:attributionURL">Blair MacIntyre</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

The intent of choosing (CC BY-NC-SA 4.0) is to allow individuals and instructors at non-profit entities to use this content.  This includes not-for-profit schools (K-12 and post-secondary). For-profit entities (or people creating courses for those sites) may not use this content without permission (this includes, but is not limited to, for-profit schools and universities and commercial education sites such as Corsera, Udacity, LinkedIn Learning, and other similar sites).
