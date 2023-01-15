---
id: quick
title: 🪄 Quick Guide
sidebar_position: 7
---

## Introduction

This package is the basic library for Countries, States(or province) and Cities that is providing JSON of data.

<br/>

## Installation

### Npm

```
npm i coutry-cities --save
```

Uninstall
```
npm uninstall coutry-cities
```

### Yarn

```
yarn add country-cities
```

Uninstall
```
yarn remove coutry-cities
```

<br/>

## Import

### ES6
```js
import { countries, states, cities } from "country-cities";
```

### Amd
```js
let countries = require('country-state-city').countries;
let states = require('country-state-city').countries;
let cities = require('country-state-city').countries;
```

or

```js
let { countries, states, cities } = require('country-state-city');
```
<br/>

## Countries

### Get all countries

```js
const allCountries = countries.all();

console.log(allCountries)
```

The result will be:

```
[
  {
    "isoCode": "US",
    "name": "United State",
    "phonecode": "1",
    "flag": "🇺🇸",
    "currency": "USD",
    "latitude": "38.00000000",
    "longitude": "-97.00000000",
    "timezones": [
      {
        "zoneName": "America/Adak",
        "gmtOffset": -36000,
        "gmtOffsetName": "UTC-10:00",
        "abbreviation": "HST",
        "tzName": "Hawaii–Aleutian Standard Time"
      },
	  {
        "zoneName": "America/Kentucky/Louisville",
        "gmtOffset": -18000,
        "gmtOffsetName": "UTC-05:00",
        "abbreviation": "EST",
        "tzName": "Eastern Standard Time (North America)"
      },
	  ...
    ]
  },
  {
    "isoCode": "FR",
    "name": "France",
    "phonecode": "33",
    "flag": "🇫🇷",
    "currency": "EUR",
    "latitude": "46.00000000",
    "longitude": "2.00000000",
    "timezones": [
      {
        "zoneName": "Europe/Paris",
        "gmtOffset": 3600,
        "gmtOffsetName": "UTC+01:00",
        "abbreviation": "CET",
        "tzName": "Central European Time"
      }
    ]
  }
  ...
]
```

### Get country by its code

```js
const us = countries.getByCode("US");

console.log(us)
```

The result will be:

```
{
  "isoCode": "US",
  "name": "United State",
  "phonecode": "1",
  "flag": "🇺🇸",
  "currency": "USD",
  "latitude": "38.00000000",
  "longitude": "-97.00000000",
  "timezones": [
    {
      "zoneName": "America/Adak",
      "gmtOffset": -36000,
      "gmtOffsetName": "UTC-10:00",
      "abbreviation": "HST",
      "tzName": "Hawaii–Aleutian Standard Time"
    },
    {
      "zoneName": "America/Kentucky/Louisville",
      "gmtOffset": -18000,
      "gmtOffsetName": "UTC-05:00",
      "abbreviation": "EST",
      "tzName": "Eastern Standard Time (North America)"
    }, 
    ...
  ]
}
```

<br/>


## States

### Get all states

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

### Get States by Country

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

### Get States by Code

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

<br/>

## Cities

### Get all cities

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

### Get Cities by Country

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

### Get Cities by State and Country

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