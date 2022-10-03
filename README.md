# Deepin SDK

[![MIT License][license-image]][license-url]
[![NPM version][npm-version-image]][npm-url]

## How to
- [Install](#install)
- Use Deepin SDK
    - [In Node.js](#in-nodejs)
    - [In Es6(react, vue, ...)](#in-react)
    - [In Es5](#in-es5)
- [Use API](#api)

# How to use Deepin SDK

## In Nodejs
```shell
  yarn add deepin-sdk
```
```js
  const deepIn = require('deepin-sdk')
  ...
```
## In Es6
```shell
  yarn add deepin-sdk
```
```js
  import deepIn from 'deepin-sdk'
  ...
```
## In Es5
Copy the following line in the index.html
```html
  <script src="DEEPIN-CDN/dist/umd/standalone.js"></script>
  <script>
    const deepIn = window.Deepin
    ...
  </script>
```

# Api

## Init
Use the init method to initialize the deepIn SDK.

```js
deepIn.init(writeKey, [configurations]);
```
#### writeKey
the given writekey for the source you have created in deepin panel.


## Identify
Use the identify method to link your users and their actions, to a recognizable userId and traits.

```js
deepIn.identify(userId, [traits]]);
```
#### userId
The database ID for the user. If you don’t know who the user is yet, you can set the userId an empty string and just record traits.

#### traits
A dictionary of traits you know about the user, as the following
traits_age
traits_age
traits_birthday
traits_firstName
traits_gender
traits_lastName
traits_title
traits_username
traits_company_name
traits_company_id
traits_company_industry
traits_company_employeeCount
traits_company_plan

```js
deepIn.identify('12091906-01011992', {
  name: 'Grace Hopper',
  email: 'grace@usnavy.gov'
});
```

## Track
The Track method lets you record actions your users perform.

```js
deepIn.track(event, [properties]);
```

#### event
The name of the event you’re tracking.

#### properties
A dictionary of properties for the event. If the event was 'Added to Cart', it might have properties like price and productType.

## Page
The Page method lets you record page views on your website, along with optional extra information about the page viewed by the user.

```js
deepIn.page([category], [properties]);
```

#### category
The category of the page. Useful for cases like ecommerce where many pages might live under a single category.

#### properties
A dictionary of properties of the page.

```js
deepIn.page('Pricing');
```

```js
deepIn.page('Pricing', {
  title: 'Segment Pricing',
  url: 'https://segment.com/pricing',
  path: '/pricing',
  referrer: 'https://segment.com/warehouses'
});
```


## Group
The Group method associates an identified user with a company, organization, project, workspace, team, tribe, platoon, assemblage, cluster, troop, gang, party, society or any other collective noun you come up with for the same concept.

```js
deepIn.group(groupId, [traits]);
```

#### groupId
The Group ID to associate with the current user.

#### traits
A dictionary of traits for the group. Example traits for a group include address, website, and employees.

```js
deepIn.group('UNIVAC Working Group', {
  principles: ['Eckert', 'Mauchly'],
  site: 'Eckert–Mauchly Computer Corporation',
  statedGoals: 'Develop the first commercial computer',
  industry: 'Technology'
});
```

## Alias
The Alias method combines two unassociated user identities. Segment usually handles aliasing automatically when you call identify on a user, however some tools require an explicit alias call.

```js
deepIn.alias(userId, [previousId]);
```

#### userId
The new user ID you want to associate with the user.

#### previousId
The previous ID that the user was recognized by. This defaults to the currently identified user’s ID.



[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/deepin-sdk
[npm-version-image]: http://img.shields.io/npm/v/deepin-sdk.svg?style=flat