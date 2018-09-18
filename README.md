#Electron Resource Monitor

## About
This is a simple Electron app which tracks the performance of each CPU core and memory usage.

## Development

To install the dependencies and building in dev mode

```sh
$ npm install
$ npm run dev
```

Then start the electron app itself

```sh
$ npm run start
```

## Releasing

Releasing has been tested only on Mac OS X so on other platform be prepared to tinker with the `package` npm script in `package.json`.

To build the production version of the app

```sh
$ npm run build
```

And to pacakge it

```sh
$ npm run package
```

The full release version can be built with

```sh
$ npm run relese
```

##License

[MIT](https://github.com/jlonardi/electron-resource-monitor/blob/master/LICENSE)