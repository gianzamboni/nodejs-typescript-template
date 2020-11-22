# Basic nodejs + typescript project template

## Content
Basic configuration for nodejs + typescript development. It includes:

* A `package.json` file with basic project configuration and basic development dependencies:
    
    * You should change the following attributes to match your new project configuration:
        
        * `name`
        * `version`
        * `description`
        * `repository`
        * `bugs`
        * `homepage`
        
     * The development dependencies are only installed in development environment to ease the programming task. The packages included in this file allow you to:
     
        * write typescript code and compile it to executable js code (`typescript`, `ts-loader`, `@types/node`),
        * bundle all your compiled clases and functions into a single minified file in order to simplify the delivery to the production environment (`webpack`, `webpack-cli`),
        * tell the bundler that you are developing an nodejs app and hence it should let you use native functions (such as filesystem operations and child processes) (`webpack-node-externals`),
        * scpecify environment variables in order to change your app behaviour depending where you are running it (i.e, load a logger/debugger package on your local machine that shouldn't be on the final app) (`cross-env-file`). Depending where you are going to deploy your app, you may have to tweak this commads.
        * hotreload the application on an delelopment environment (`nodemon-webpack-plugin`). This means that the app will recompile and restart each time you modify a file.
    
    * It also declares some scripts in order to make the application running and compiling a bit easier:
        
        * `build`: Compile de source code into a production ready file
        * `dev`: Inits the hotreloading server, you should run it only on your machine when you are modifying your app.
        * `start`: In runs the compiled production ready application
        * `test`: Does nothing, if you want to use a testing framework you should put here the command you need to execute the tests.

* A `tsconfig.json` file that configure the compilation options for typescript

* A `.env.json.example` file which gives you an example on how to configure environment variables.

* A `webpack` folder that contains three files (`common.js`, `config.dev.js` and `config.prod.js`). They tell the bundler how to bunlde your app depending on the environment you are running it. The first one (`common.js`) sets all the configuration that is shared by all the environments, the others ones are where the environment specifics settings are declared.

* A `src` folder whith a single empty file (`index.ts`) where you can start coding your app. In this folder, you can setup the project folder tree however you want given that you use `index.ts` as your entry point for the app.
## Usage

Just download/fork or click on the *Use as template* button on the main page of this repo, and then run `npm install` to intall the basic dev dependencies. 

After that you should take care to install each package you wnat to add with its corresponding typescript definition package (if necessary), i.e, for installing `express` you should run:

  ```shell
    $ npm install --save-prod express && npm install --save-dev @types/express
  ```
  
Remember that typescript typing is only necessary when you are coding. Once compiled to common js all typing notation is deleted, so you don't need to add typing packages to production environment.

### Environment variables
You should create your own `.env.dev.json` and `.env.prod.json` with an empty json object before running your application for the first time. You will put here variables which contain sensitive information that you need to use on your code but that you do not want to share with the world. **(YOU MUST NOT PUSH THIS FILES TO ANY REPOSITORY)**

All variables declared here will be avalaible through the `process.env` variable in your app. i.e if you declared the variable `SECRET_API_KEY` in `.env.json`, then you will be able to use it in this way:

  ```javascript
    let apiKey = process.env.SECRET_API_KEY;
  ```
How to add this variables to your production environment will depend on the platform you want to host your app and you will have to tweak the `build` script or add new scripts in order to correctly deploy your app.

Besides the variables you declare in this file, the variable  `process.env.NODE_ENV` is automatically set to `production` or `development`  by webpack depending which script you execute to compile the app.


