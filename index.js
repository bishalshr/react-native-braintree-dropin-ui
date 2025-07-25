import { NativeModules } from "react-native";

const { RNBraintreeDropIn } = NativeModules;

if (Platform.OS !== "android") {
    throw new Error("Module is only available on Android.");
}

export default RNBraintreeDropIn;
