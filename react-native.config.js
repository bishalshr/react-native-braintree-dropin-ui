const path = require("path");

module.exports = {
    dependency: {
        platforms: {
            android: {
                packageImportPath: "import tech.power.RNBraintreeDropIn.RNBraintreeDropInPackage;",
                packageInstance: "new RNBraintreeDropInPackage()",
            },
        },
    },
};
