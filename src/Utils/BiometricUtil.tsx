import ReactNativeBioMatrics, { BiometryTypes } from 'react-native-biometrics'
const rnBiometric = new ReactNativeBioMatrics()

export const checkBioMetric = async () => {
    try {
        const { biometryType, available } = await rnBiometric.isSensorAvailable()
        return biometryType
    } catch (error) {
        return null
    }
}

export const generateBiometricPublicKey = async () => {
    try {
        const { keysExist } = await rnBiometric.biometricKeysExist()
        if (keysExist) {
            throw new Error("Biometric key exist")
        }
        const { publicKey } = await rnBiometric.createKeys();
        console.log(publicKey, "Send this to server");
    } catch (error) {
        console.log(error)
    }
}

export const deleteBioMetricPublicKey = async () => {
    try {
        const { keysDeleted } = await rnBiometric.deleteKeys()
        if (!keysDeleted) {
            throw new Error("Can not remove Biometric")
        }
        console.log(keysDeleted);
    } catch (error) {
        console.log(error);

    }
}

export const loginBioMetrics = async (userID: string) => {
    try {
        const isBioMetricAvailable = await checkBioMetric()
        if (!isBioMetricAvailable) {
            throw new Error("BioMetric not available")
        }
        const { keysExist } = await rnBiometric.biometricKeysExist()
        if (!keysExist) {
            const { publicKey } = await rnBiometric.createKeys()
            console.log("PublicKey " + publicKey);
        }
        const { success, signature } = await rnBiometric.createSignature({
            promptMessage: 'Sign in',
            payload: userID
        });
        if (!success) {
            throw new Error("BioMetric authentication failed");
        }
        if (signature) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log("Error@@ ", JSON.stringify(error));
        return false

    }
}