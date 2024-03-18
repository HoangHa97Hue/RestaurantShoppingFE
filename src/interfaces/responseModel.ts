export default interface responseModel{
    data?:{
        isSuccess?: boolean,
        statusCode?: number,
        errorMessage?: Array<string> 
        result?: {
            [key: string] : string
        }
    },
    error?: any
}