export const FormatList = (arr) => {
    return new Intl.ListFormat('en-GB', { 
        style: 'narrow',
        type: 'conjunction'
    }).format(arr);
};
