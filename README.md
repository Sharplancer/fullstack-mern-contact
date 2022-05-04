# FAST FullStack React with TypeScript starter kit.

<img src="https://github.com/Sharplancer/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

## Quick Start

Just clone this repository into your own project folder. and start working

```bash
git clone https://github.com/Sharplancer/fullstack-typescript.git <MyProjectName>
cd <MyProjectName>
npm install
npm run dev
```

Just run this command to automated test.
```bash
npm test
```
## Requirements

- `NodeJs 16.13.+`, `Chrome 79+` or `FireFox 72+`

### Directory Layout

```bash
.
├── /node_modules/                    # 3rd-party libraries and utilities
├── /dist/                            # All the generated files will go here, and will run from this folder
├── /src/                             # The source code of the application
│   ├── /client/                      # React app
│   ├── /server/                      # Express server app
├── /assets/                          # images, css, jsons etc.
├── .eslintrc                         # es-lint configuration
├── .prettierec                       # prettier configuration
├── .gitignore                        # ignored git files and folders
├── .nvmrc                            # Force nodejs version
├── .env                              # (ignored) Can be used to override environment variables
├── index.js                          # The server's entry point
├── package.json                      # The list of 3rd party libraries and utilities
└── tsconfig-for-webpack-config.json  # using TypeScript for the webpack config file
├── README.md                         # This file
```

### What's included

- [React v17]
- [ReactHooks]
- [Redux]
- [Material UI]
- [Nodemailer]
- [Express]
- [MongoDB]
- [Jest]

### Usage

- `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run lint` - Runs es-lint
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm start` - Just runs `node ./dist/server/server.js`
- `npm start:prod` - sets `NODE_ENV` to `production` and then runs `node ./dist/server/server.js`. (Bypassing webpack proxy)

### Config

All applications require a config mechanism, for example, `SLACK_API_TOKEN`. Things that you don't want in your git history, you want a different environment to have different value (dev/staging/production). This repo uses the file `config.ts` to access all your app variables. And a `.env` file to override variable in dev environment. This file is ignored from git.

