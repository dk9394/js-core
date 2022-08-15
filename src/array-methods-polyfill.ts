export const arrayMethodsPolyfill = function () {
    /**
     * array.flat()
     */

    const multiDimension = [3, 5, [6, 10, [20, [[[[[12]]]]]], 1], 7];
    let flatten: any;

    // approach 1
    flatten = function (arr: any[], depth: number = 1): any {
        if (Array.isArray(arr)) {
            if (depth > 0) {
                return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), []);
            } else {
                return arr.slice();
            }
        }
    }

    // console.log(flatten(multiDimension, 10));
    

    // approach 2
    const newArr: any[] = [];
    flatten = function (arr: any[], depth: number = 1) {
        if (depth > 0) {
            arr.forEach(a => {
                if (Array.isArray(a)) {
                    flatten(a, depth - 1);
                } else {
                    newArr.push(a);
                }
            });
        }

        return newArr;
    }

    console.log(flatten(multiDimension, 10));

    
     /**
      * array.reduce()
      * array.reverse()
      * array.sort()
      */
};
