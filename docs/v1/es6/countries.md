---
id: countries
title: Countries
sidebar_position: 3
---

## Import

```js
import { countries } from "country-cities";
```

## Get all countries

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

## Get country by its code

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