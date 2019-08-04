# react-raven

A simple React component for Sentry integration.

### Installing

```
npm install --save react-raven
```

### Usage

```js
  import React from 'react';
  import useRaven from 'react-raven';

  fuction Application(props) {
    const dsn = 'https://<key>@sentry.io/<project>';
    useRaven(dsn)
    return (
      <div>
        {'...your components...'}
      </div>
    );
  }

  export default Application;
```

### Properties

#### dsn

**required**
The dsn url to the sentry instance ([more information](https://docs.sentry.io/quickstart/#configure-the-dsn)).

#### config

**optional**
The optional sentry configuration ([more information](https://docs.sentry.io/clients/javascript/config/)).
