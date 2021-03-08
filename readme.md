

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 12.0 or higher is required.

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

    $ npm install multicone -g

##  Quick Start
Initiate the application running following command:

    $ multicone init <package-name>
Then go to your package directory and run:

    $ cd <package-name> && multicone serve
It will start the server and also will run in browser


Or manually you can start by Running:

    cd <package-name> && npm start
 View the website at: [http://localhost:3000](http://localhost:3000)

## Commands

To make an express model run:

    $ multicone make:model <model-name>
To make an express controller run:

    $ multicone make:controller <controller-name>

To make an express route run:

    $ multicone make:route <route-name>
To integrate authentication system run:

    $ multicone make:auth
To make an express MRC model run:

    $ multicone make:MRC <name>

     

    

## [](https://www.npmjs.com/package/express#license)License

MIT

