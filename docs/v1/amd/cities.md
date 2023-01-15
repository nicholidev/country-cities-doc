---
id: cities
title: Cities
sidebar_position: 5
---

## Import

```js
const cities = require("country-cities").cities;
```

<br/>

## Get all cities

```js
const allCities = cities.all();

console.log(allCities)
```

The result will be:

```
[
  {
    countryCode: "AU",
    latitude: "-31.12756000",
    longitude: "150.90711000",
    name: "Hillvue",
    stateCode: "NSW",
  },
  {
    countryCode: "AU",
    latitude: "-33.91878000",
    longitude: "150.86314000",
    name: "Hinchinbrook",
    stateCode: "NSW",
  },
  ...
]
```

<br/>

## Get Cities by Country

```js
const auCities = cities.getByCountry("AU");

console.log(auCities)
```

The result will be:

```
[
  {
    countryCode: "AU",
    latitude: "-31.12756000",
    longitude: "150.90711000",
    name: "Hillvue",
    stateCode: "NSW",
  },
  {
    countryCode: "AU",
    latitude: "-33.91878000",
    longitude: "150.86314000",
    name: "Hinchinbrook",
    stateCode: "NSW",
  },
  ...
]
```
<br/>

## Get Cities by State and Country

```js
const nswCities = cities.getByState("NSW", "AU");

console.log(nswCities)
```

><b>Important</b>: The country code should be entered second parameter


The result will be:

```
[
  {
    countryCode: "AU",
    latitude: "-31.12756000",
    longitude: "150.90711000",
    name: "Hillvue",
    stateCode: "NSW",
  },
  {
    countryCode: "AU",
    latitude: "-33.91878000",
    longitude: "150.86314000",
    name: "Hinchinbrook",
    stateCode: "NSW",
  },
  ...
]
```