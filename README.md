# AltumAnalytics.js

AltumAnalytics.js is designed to collect customer data and send it to machine learning service for future processing.

We prefere to link our library as a smart advisor called Altum.

Altum helps you measure your users, product, and business. It calculates statistic for your business and generate advises about your customers, provide charts and different integrations.

## Documentation

### Installation

Install from NPM

```
npm install --save altumanalytics
```

### Include the library via script or manually

The library is exported as a Universal Module (UMD), so there are couple ways of how you can start work with it.

Ideally you would use module loader or compilation step to import using ES6 modules as:

```javascript
import { Altum } from 'altumanalytics';
```

If you have Node.js environment or you prefer CommonJS modules then the library can be included as

```javascript
const Altum = require('altumanalytics').Altum;
```

or even using AMD script loading

```javascript
define(['altumanalytics'] , function (module) {
  const Altum = module.Altum;
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

### Initializing


<b>Don't forget to provide productId and (optionaly) userId in head script.</b>

(Under development)
