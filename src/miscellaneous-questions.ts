export const miscellaneous = function () {

    /**
     * Seperator 0's and 1's from an array list
     */

    const arr = [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0];
    let seperator;

    // approach 1
    seperator = [...arr.filter(a => a === 0), ...arr.filter(a => a === 1)];


    console.log(seperator);


    /**
     * Unique array items
     */

    const duplicate = [1, 2, 5, 10, 1, 5, 2, 7, 3];
    let unique;

    // approach 1
    unique = duplicate.filter((a, i) => duplicate.indexOf(a) !== i);

    // approach 2 - using Set
    unique = Array.from(new Set(duplicate));

};
