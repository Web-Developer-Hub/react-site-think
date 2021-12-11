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

const m = ['hello', 'programmer'];
const n = [45, 54]
console.log(addArray(m))
