import { IAxiosErrors } from "types/axios-types"

export const AXIOS_ERRORS: IAxiosErrors = {
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    408: "Request Timeout",
    409: "Conflict",
    415: "Unsupported Media Type",
    429: "Too Many Requests",
    502: "Bad Gateway",
    500: "Internal Server Error",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
}