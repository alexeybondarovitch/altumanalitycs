# AltumAnalytics.js

AltumAnalytics.js is designed to collect customer data and send it to machine learning service for future processing.

We prefer to associate our library with a smart advisor called Altum.

Altum helps you measure your users, product, and business. It calculates statistic for your business and generate advises about your customers, provide charts and different integrations.

## Documentation

### Installation

Install from NPM

```
npm install --save altumanalytics
```

### Include the library via script or manually and initialize it

The library is exported as a Universal Module (UMD), so there are couple ways of using it.

Ideally you would use module loader or compilation step to import using ES6 modules as:

```javascript
import { Altum } from 'altumanalytics';

Altum.init({productId: 'PRODUCT ID', userId: 'USER ID'});
```

If you have Node.js environment or you prefer CommonJS modules then the library can be included as

```javascript
const Altum = require('altumanalytics').Altum;

Altum.init({productId: 'PRODUCT ID', userId: 'USER ID'});
```

or even using AMD script loading

```javascript
define(['altumanalytics'] , function (module) {
  const Altum = module.Altum;

  Altum.init({productId: 'PRODUCT ID', userId: 'USER ID'});
  // do whatever you want
});
```

And if you don't have any js environment setup, you can just include the library
in the ```<head> ``` tag using script below.

```html
<script type="text/javascript">
  var altum=window.Altum=window.Altum||{};if(!(altum._initialized||altum.started)){altum.started=true;altum.log=function(){(altum.delayed=altum.delayed||[]).push([arguments,(new Date).getTime()])};
  altum.config={productId:"YOUR PRODUCT ID",userId:"USER ID"}}
</script>
<script async src='node_modules/altumanalytics/lib/altumanalytics.min.js'></script>
```

Instead of using npm you can also get library script from public CDNs:
```html
<script async src='https://unpkg.com/altumanalytics@latest/lib/altumanalytics.min.js'></script>
```

or

```html
<script async src='https://cdn.jsdelivr.net/npm/altumanalytics@latest/lib/altumanalytics.min.js'></script>
```

After installation two global variables will be extractred:
<b>Altum</b> - instance of the library and <b>AltumAnalytics</b> - module definition.

### Initialization

Altum is exported as the Singleton, so you don't need to create a new instance.

To use it you should provide your <b>Product Id</b> and <b>User Id</b>

<b>Product Id</b> is required parameter, exception will be thrown if it is not provided.

<b>User Id</b> is optional parameter during initialization, BUT if you don't provide it during initialization, you will have to add it in each Altum.log method call (see notice below).

## Usage

Altum provide only one API method which should be used in your application:

<b>Log</b> method definition:

```javascript
Altum.log(event, count, options);
```

The ```Altum.log``` method is how you send any event with it's data to our processing center.

The ```log``` call has the folowing fields:

<hr />

| <b>Field Name</b> | <b>Required</b> | <b>Type</b>  |  <b>Description</b> |
|-------------------|-----------------|--------------|---------------------|
| event  |  Required |  String or Object | Event Type which will be used to identificate.|
| count  |  Required |  Float Number | Positive Number which will be associated with tracked event.<i>Note: If you do not pass a count, pass 1 as default</i>|
|options | Optional | Object | A dictionary of options |
</table>
