---
id: import
title: Import
sidebar_position: 2
---

If you are using it in AMD module usage, you can try to use below to import `country-cities`.

```
let countries = require('country-state-city').countries;
let states = require('country-state-city').countries;
let cities = require('country-state-city').countries;
```

or

```
let { countries, states, cities } = require('country-state-city');
```