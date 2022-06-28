// Use commonJS require below so we can dynamically import during build-time
if (process.env.NODE_ENV === "prodiction") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
