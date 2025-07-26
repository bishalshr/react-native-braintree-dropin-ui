import { Platform, NativeModules } from "react-native";

let RNBraintreeDropIn;

if (Platform.OS === "android") {
    RNBraintreeDropIn = NativeModules.RNBraintreeDropIn;
} else {
    RNBraintreeDropIn = new Proxy(
        {},
        {
            get() {
                throw new Error("RNBraintreeDropIn is only available on Android.");
            },
        }
    );
}

export default RNBraintreeDropIn;
