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

or if you want to specify version:

```
npm install --save altumanalytics@version      (i.e. npm install --save altumanalytics@2.0.2)
```

### Include the library via script or manually and initialize it

The library is exported as a Universal Module (UMD), so there are couple ways of using it.

Ideally you would use module loader or compilation step to import using ES6 modules as:

```javascript
import { Altum } from 'altumanalytics';

Altum.init({productId: 'PRODUCT ID', groupId: 'GROUP_ID', userId: 'USER ID'/*, options:{}*/});
```

In CommonJS modules then the library can be used as

```javascript
const Altum = require('altumanalytics').Altum;

Altum.init({productId: 'PRODUCT ID', groupId: 'GROUP_ID', userId: 'USER ID'/*, options:{}*/});
```

or even using AMD script loading

```javascript
define(['altumanalytics'] , function (module) {
  const Altum = module.Altum;

  Altum.init({productId: 'PRODUCT ID', groupId: 'GROUP_ID', userId: 'USER ID'/*, options:{}*/});
  // do whatever you want
});
```

And if you don't have any js environment setup, you can just include the library
in the ```<head> ``` tag using script below.

```html
<script type="text/javascript">
      (function(t,e,r,o,u,a,m,n){t[a]=t[a]||{s:!1};
      t[a].s||(t[a].s=!0,t[a]['init']=function(c){t[a].c=c},r('load',function(){
        m=e.createElement(o);m.type="text/javascript";m.async=!0;m.src=u;
        n=e.getElementsByTagName(o)[0];n.parentNode.insertBefore(m,n)},!1));
      })(window,document,addEventListener,'script','https://cdn.jsdelivr.net/npm/altumanalytics@latest/lib/altumanalytics.min.js','Altum');

      Altum.init({
        productId:"PRODUCT ID",
        userId:"USER ID",
        groupId: "GROUP_ID",
        options:{ bufferSize: 20 }
      });
</script>

```

Instead of using npm you can also get library script from public CDNs:
https://unpkg.com/, (i.e. https://unpkg.com/altumanalytics@latest/lib/altumanalytics.min.js)
or
https://cdn.jsdelivr.net/ (i.e. https://cdn.jsdelivr.net/npm/altumanalytics@latest/lib/altumanalytics.min.js)


After installation two global variables will be extractred:
<b>Altum</b> - instance of the library and <b>AltumAnalytics</b> - module definition.

### Initialization

Altum is exported as the Singleton, so you don't need to create a new instance.

Call ```Altum.init``` to initialize library.

```javascript
  Altum.init(configurationObject);
```

<b>configurationObject</b> contains next properties:

| Property Name | Type  |  Required | Description
|-------------------|-----------------|--------------|--------------|
| productId  | String | Required | Your unique product Id. Exception will be thrown if not provided.|
| groupId  | String | Required | Unique identifier per license.|
| userId  | String | Required | Currently signed in userId. (Usually Db Key).|
| options  | Object | Optional | Optional object with additional settings (see notice below).|


<b>options</b> is the optional object with next properties:

| Property Name | Type  |  Description | Default Value
|-------------------|-----------------|--------------|--------------|
| bufferSize  | Number | Specify the size of buffer to store events before sending them to server. | 20 |


<b>Note:</b> ```Altum.init``` method can be called several times to change current product or current user.

### Examples:

Init library after user sign in and specify the product:

```javascript
Altum.init({productId: 'test', groupId: '1234', userId: '12345'});
```

Init library with custom buffer size:

```javascript
Altum.init({productId: 'test', groupId: '1234', userId: '12345', options: {bufferSize: 5}});
```
