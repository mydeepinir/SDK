# Deepin SDK

[![MIT License][license-image]][license-url]
[![NPM version][npm-version-image]][npm-url]
[![Package Quality][packagequality-image]][packagequality-url]
![ts](typescript-url)

## How to

- [Use Deepin SDK](#how-to-use-deepin-sdk)
  - [With Package Managers(npm, yarn)](#with-package-managers)
  - [Without Package Managers](#without-package-managers)
  - [In Node.js](#in-nodejs)
- [Use API](#api)

# How to use Deepin SDK

Its able to be used in react, vue, svelte, react-native, nodeJs, flutter, cordova and whereever you can run javascript code as the following ways.

### With Package Managers

You can use one of the following commands to install the sdk.

```shell
  npm i deepin-js-sdk
  yarn add deepin-js-sdk
```

The following code shows you how could it be imported in es6 or 7 or typescript.

```js
  import deepIn from 'deepin-js-sdk'
  ...
```

[Code Example In Vue](https://github.com/mydeepinir/SDK/blob/main/demos/es-demo/src/App.vue)

### Without Package Managers

Copy the following line in an html file

```html
<script src="https://stage-web.mydeepin.ir/download/standalone.js"></script>
<script>
  const deepIn = window.Deepin
  ...
</script>
```

[Code Example In VanillaJS](https://github.com/mydeepinir/SDK/blob/main/demos/umd-demo/index.html)

#### In Nodejs

```shell
  yarn add deepin-js-sdk
  npm i deepin-js-sdk
```

```js
  const deepIn = require('deepin-js-sdk')
  ...
```

[Code Example In NodeJs](https://github.com/mydeepinir/SDK/blob/main/demos/cjs-demo/index.ts)

# Api

## Init

Use the init method to initialize the deepIn SDK.

```js
deepIn.init(writeKey);
```

#### writeKey

The given writekey for the source you have created in deepin panel.

## Identify

Use the identify method to link your users and their actions, to a recognizable userId and traits.

```js
deepIn.identify(userId, [traits]);
```

#### userId

The database ID for the user. If you don’t know who the user is yet, you can set the userId an empty string and just record traits.

#### traits (optional)

A dictionary of traits you know about the user, you can read more about traits in the [identify traits type](/src/types/identify.ts)

```js
deepIn.identify("12091906-01011992", {
  traits_firstName: "Grace",
  traits_lastName: "Hopper",
});
```

## Track

The Track method lets you record actions your users perform.

```js
deepIn.track(event, [properties]);
```

#### event

The name of the event you’re tracking.

#### properties (optional)

A dictionary of properties for the event. If the event was 'Added to Cart', it might have properties like price and productType. you can read more about properties in the [track properties type](/src/types/track.ts)

## Page

The Page method lets you record page views on your website, along with optional extra information about the page viewed by the user.

```js
deepIn.page([category], [properties]);
```

#### category (optional)

The category of the page. Useful for cases like ecommerce where many pages might live under a single category.

#### properties (optional)

A dictionary of properties of the page. you can read more about properties in the [page properties type](/src/types/page.ts)

```js
deepIn.page("Pricing");
```

```js
deepIn.page("Pricing", {
  page_title: "Segment Pricing",
  page_url: "https://segment.com/pricing",
  page_referrer: "https://segment.com/warehouses",
});
```

## Group

The Group method associates an identified user with a company, organization, project, workspace, team, tribe, platoon, assemblage, cluster, troop, gang, party, society or any other collective noun you come up with for the same concept.

```js
deepIn.group(groupId, [traits]);
```

#### groupId

The Group ID to associate with the current user.

#### traits (optional)

A dictionary of traits for the group. Example traits for a group include address, website, and employees. you can read more about traits in the [track traits type](/src/types/group.ts)

```js
deepIn.group("UNIVAC Working Group", {
  traits_employees: "Eckert–Mauchly",
  traits_industry: "IT",
});
```

## Alias

The Alias method combines two unassociated user identities. Segment usually handles aliasing automatically when you call identify on a user, however some tools require an explicit alias call.

```js
deepIn.alias(userId, [previousId]);
```

#### userId

The new user ID you want to associate with the user.

#### previousId (optional)

The previous ID that the user was recognized by. This defaults to the currently identified user’s ID.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.com/package/deepin-js-sdk
[typescript-url]: https://flat.badgen.net/badge/-/TypeScript/blue?icon=typescript&label
[npm-version-image]: http://img.shields.io/npm/v/deepin-js-sdk.svg?style=flat
[packagequality-image]: http://npm.packagequality.com/shield/deepin-js-sdk.svg
[packagequality-url]: http://packagequality.com/#?package=deepin-js-sdk
