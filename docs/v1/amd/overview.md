---
id: overview
title: Overview AMD
sidebar_position: 1
---

## What is AMD?

<b>Asynchronous module definition (AMD)</b> is a specification for the programming language JavaScript.
<br/>
It defines an application programming interface (API) that defines code modules and their dependencies, and loads them asynchronously if desired.
<br/><br/>

Learn more [here](https://en.wikipedia.org/wiki/Asynchronous_module_definition)

## Using the [country-cities](https://www.npmjs.com/package/country-cities) in AMD Module usage

### Import

```js
const { countries, states, cities } = require('country-cities');
```
Learn more [here](./import)

### Countries
```js
const countries = coutries.all();
```

### States
```js
const states = states.all();
```

### Cities
```js
const cities = cities.all();
```