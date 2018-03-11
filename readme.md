<h1 align="center">
  <img src="misc/chaos-monkey.png" alt="Chaos Monkey" />
</h1>

## Random & crazy pranks to check your app resiliency

**Installation**

npm install chaos-monkey

**Usage**

Require this package at the very beginning of your app, before registering other routes

```javascript
const ChaosMonkey = require('chaos-monkey');
new ChaosMonkey(app, require('./chaos.config') ).start();
```

**Configuration**
Example:
```javascript
module.exports = {
  sideMonkeyPort: 3000,
  pranks: [
    {
      name: "500-error-on-route",
      file: "500-error-on-route",
      active: true,
      properties: {
        urls: ["/api/products", "/anyurl"]

      },
      schedule: {
        type: "immediate-schedule",
        delay: 0
      }
    },
    {
      name: "process-exit",
      file: "process-exit",
      active: false,
      properties: {
        exitCode: 1
      },
      schedule: {
        type: "one-time-schedule",
        delay: 60000
      }
    },
    {
      name: "uncaught-exception",
      file: "uncaught-exception",
      active: true,
      properties: {
        message: "Uncaught exception was thrown by the chaos monkey"
      },
      schedule: {
        type: "one-time-schedule",
        delay: 9000
      }
    },
    {
      name: "memory-load",
      file: "memory-load",
      active: true,
      properties: {
        maxMemorySizeInMB: 300
      },
      schedule: {
        type: "one-time-schedule",
        delay: 1000
      }
    },
    {
      name: "cpu-load",
      file: "cpu-load",
      active: true,
      properties: {
      },
      schedule: {
        type: "peaks",
        sleepTimeBetweenPeaksInMS: 3000,
        pickLengthInMS: 10000
      }
    }
  ]
};

```
