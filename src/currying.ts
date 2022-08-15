export function currying () {
    
    /**
     * Currying is when a function can be invoked more than once.
     * It can be achieved by return a function out of function. 
     *     - This is because functions are first class citizens in JavaScript, 
     *          that means they can be returned, set to a variable or can be passed as arguments.
     * It uses the closure concept in javaScript.
     */

    const sum = (x: number) => (y: number) => x + y;
    console.log(sum(1)(2));


    /**
     * Function invocation chain.
     *      - Ex: sumN(1)(2)(3)(10)....(n)()
     */

    const sumN = function (x: any) {
        return function (y: any) {
            if (y) {
                return sumN(x + y);
            } else {
                return x;
            }
        }
    }
    // const sumN = (x: any) => (y: any) => y ? sumN(x + y) : x;
    console.log(sumN(1)(2)(3)(4)(10)());


    /**
     * Function invocation chain, without empty paranthesis in last.
     *      - Ex: sumN(1)(2)(3)(10)....(n)
     */

    

}
