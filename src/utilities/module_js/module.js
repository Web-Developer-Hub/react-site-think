//this funtion work add array element... input as an number of array
const addArray = (arr) => {
    if (typeof (arr[0]) === 'string') {
        const j = (previous, current) => previous + ' ' + current;
        const ans = arr.reduce(j, '');
        return ans;
    }
    else if (typeof (arr[0]) === 'number') {
        const j = (previous, current) => previous + current;
        const ans = arr.reduce(j, 0);
        return ans;
    }
    else {
        return 'Type error'
    }

}

//this is my fore loop
const add = (params) => {
    let m = 0;
    for (const iterator of params) {
        return iterator + m;
    }
}

export { addArray, add }