---
id: states
title: States
sidebar_position: 4
---

## Import

```js
const states = require("country-cities").states;
```

<br/>

## Get all states

```js
const allStates = states.all();

console.log(allStates)
```

The result will be:

```
[
  {
    countryCode: "US",
    isoCode: "VA",
    latitude: "37.43157340",
    longitude: "-78.65689420",
    name: "Virginia"
  },
  {
    countryCode: "US",
    isoCode: "IL",
    latitude: "40.63312490",
    longitude: "-89.39852830",
    name: "Illinois"
  },
  ...
]
```

<br/>

## Get States by Country

```js
const usStates = states.getByCountry("US");

console.log(usStates)
```

The result will be:

```
[
  {
    countryCode: "US",
    isoCode: "VA",
    latitude: "37.43157340",
    longitude: "-78.65689420",
    name: "Virginia"
  },
  {
    countryCode: "US",
    isoCode: "IL",
    latitude: "40.63312490",
    longitude: "-89.39852830",
    name: "Illinois"
  },
  ...
]
```
<br/>

## Get States by Code

```js
const vaState = states.getByCode("VA", "US");

console.log(vaState)
```

><b>Important</b>: The country code should be entered second parameter


The result will be:

```
{
  countryCode: "US",
  isoCode: "VA",
  latitude: "37.43157340",
  longitude: "-78.65689420",
  name: "Virginia"
}
```