<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="Frontend/src/assets/coffee_cup.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">MERN Basic Authentication</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

There are many approaches to manage authentication on web apps. However, the purpose of this is to implement a 'Basic Authentication' based on MERN (Mongo, Express, React, Node).
This contains some good practices like:
* Fully Typescript based application (no babel required so far)
* Use Eslint with custom rules like:
  * Avoid Console.log statements
  * Sort imports
  * Avoid non-used parameters or variables
  * Avoid any (However, there could be some specific scenarios where we've flexible)
* Use Prettier with custom rules to have a n standard
* Fully ES6 and 'import' based (no 'commonjs' required so far)
* Webpack based with some important rules
  * Allowing Hot module replacement
  * Configure MiniCss logic
  * Analyze and improve bundles and chunks
  * Applying optimization
* Using configuration files to manage environment variables 
* Use Context API and Custom Hook to manage authentication state

### Built With

* [![Typescript][Typescript]][Typescript-url]
* [![Pnpm][Pnpm]][Pnpm-url]
* [![WebPack][WebPack]][WebPack-url]
* [![Mongo][Mongo]][Mongo-url]
* [![Express][Express]][Express-url]
* [![React][React]][React-url]
* [![Node][Node]][Node-url]
* [![React-Router][React-Router]][React-Router-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]
* [![React-Bootstrap][React-Bootstrap]][React-Bootstrap-url]
* [![Sass][Sass]][Sass-url]
* [![Eslint][Eslint]][Eslint-url]
* [![Prettier][Prettier]][Prettier-url]

## Getting Started

* Install both projects with 'pnpm i' (Backend and Frontend)
* Run the backend with 'pnpm dev' or debug with your favorite IDE
  * Will be running on port: 4001 (this is not running with webpack yet)
* Run the frontend with 'pnpm start'
  * Will be running on port: 3000
  * Analyzer webpack port: 3500

### Prerequisites

Have installed:
  * Node, npm, pnpm @latest
  * Have configured your own MongoDb and change the connection string on:
    * Backend -> .env

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-Router]: https://img.shields.io/badge/React_Router-20232A?style=for-the-badge&logo=reactrouter&logoColor=#CA4245
[React-Router-url]: https://reactjs.org/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-20232A?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[React-Bootstrap]: https://img.shields.io/badge/React_Bootstrap-20232A?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093
[React-Bootstrap-url]: https://react-bootstrap.netlify.app/
[Mongo]: https://img.shields.io/badge/Mongo-20232A?style=for-the-badge&logo=mongodb&logoColor=#47A248
[Mongo-url]:https://www.mongodb.com/
[Express]:https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=#000000
[Express-url]: https://expressjs.com/
[Node]:https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo=nodedotjs&logoColor=#339933
[Node-url]: https://nodejs.org/
[WebPack]: https://img.shields.io/badge/WEBPACK-20232A?style=for-the-badge&logo=webpack&logoColor=#8DD6F9
[WebPack-url]: https://webpack.js.org/
[Sass]:https://img.shields.io/badge/SASS-20232A?style=for-the-badge&logo=sass&logoColor=#CC6699
[Sass-url]: https://sass-lang.com/
[Eslint]:https://img.shields.io/badge/Eslint-20232A?style=for-the-badge&logo=eslint&logoColor=#4B32C3
[Eslint-url]: https://eslint.org/
[Prettier]:https://img.shields.io/badge/Prettier-20232A?style=for-the-badge&logo=prettier&logoColor=#F7B93E
[Prettier-url]:https://prettier.io/
[Typescript]:https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=tsnode&logoColor=#3178C6
[Typescript-url]: https://www.typescriptlang.org/
[Pnpm]:https://img.shields.io/badge/PNPM-20232A?style=for-the-badge&logo=pnpm&logoColor=#F69220
[Pnpm-url]: https://pnpm.io/