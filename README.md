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

Ideally you would use module loader or compilation step to import using ES6 modules as:

```javascript
import { Altum } from 'altumanalytics';
```

However, the library is exported as a Universal Module and the altumanalytics.js script can be included
in the ```html <head> ``` tag. Right after it Altum object will exist in window object.

```html
<script type="text/javascript">
  var altum=window.Altum=window.Altum||{};if(!(altum._initialized||altum.started)){altum.started=true;altum.log=function(){(altum.delayed=altum.delayed||[]).push([arguments,(new Date).getTime()])};
  altum.config={productId:"YOUR PRODUCT ID",userId:"USER ID"}}
</script>
<script async src='./altumanalytics.min.js'></script>
```

(Under development)
