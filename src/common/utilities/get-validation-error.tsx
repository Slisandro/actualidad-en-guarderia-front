import { TypeWithKey } from "../models"

export const getValidationError = (errorCode: string) => {
    const codeMatcher : TypeWithKey <string> = {
        ERR_NETWORK: "Error de conexión"
    }

    return codeMatcher[errorCode];
}