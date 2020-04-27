interface Params {
    [key: string]: string
}

export const queryParamsParser = (queryString: string): Params => {
    const arrayOfKeyValue: string[] = queryString.slice(1).split('&');
    const arrayOfKeyValueArray: string[][] = arrayOfKeyValue.map(s => s.split('='));
    return arrayOfKeyValueArray.reduce((res, [key, value]) => ({
        ...res,
        [key]: value
    }), {});
};