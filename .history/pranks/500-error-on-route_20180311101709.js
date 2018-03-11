const PrankBase = require("./prank-base");
class Route500ErrorSin extends SinBase {
  constructor() {
    super(...arguments);
    
  }

  start() {
    this.context.configuration.properties.urls.forEach(url => {
      console.log(`500 error route is about to register the url ${url}`);
      this.context.expressApp.use("/api/products", (req, res, next) => {
        console.log(`Prank: About to answer with 500 status`)
        res.status(500).end();
        this.emit("sinOccured", this.context.configuration);
      });
    });
  }

  stop() {
    //hmm how to remove middleware?
  }
}

module.exports = Route500ErrorSin;
