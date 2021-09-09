const extractInputArgs = /^(--(?<argument>path|row|name))=(?<data>.+)/;

interface ValidArgs {
    path?:string;
    row?:number;
    name?:string;
}

export const extractArgs = ():ValidArgs => {
    return process.argv.reduce((filtered, arg)=>{
        const extractedData = extractInputArgs.exec(arg);
        const input = extractedData?.groups?.argument;
        const inputData = extractedData?.groups?.data;
        if(input){
            return {
                ...filtered,
                [input]: inputData
            }
        }
        return filtered;
    }, {});
}