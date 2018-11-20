# CampfireChromeExtension

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Install Angular CLI

```
npm install -g @angular/cli
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-aot` or `-prod` flag for a production build.

It is necessary to compile with the argument '-aot' to generate this extension, under penalty of having these errors:
`Refused to connect to 'http(s)://*' because it violates the following Content Security Policy directive: "default-src 'self' 'unsafe-eval'". Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback.`

So, please use this command for each build :
```
ng build --aot
```

You do not need to add `-aot` when compiling with the `-prod` argument
```
ng build --prod
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy into Chrome browser

1. Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions)
2. Enable Developer mode by ticking the checkbox in the upper-right corner
3. Click on the "Load unpacked extension..." button
4. Select the `dist/` directory, containing your unpacked extension
5. You can use the extension without restarting after each compilation
