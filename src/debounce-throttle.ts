export const debounceThrottle = function () {

    /**
     * To optimise the application by limiting the function calls.
     * 
     * Debounce - Invoke a function when time reaches the limit b/w two event occuring.
     * Throttle - Invoke a function on first event and then wait for the time limit and after that make the
     *      function call on next occuring event. 
     */
    
    
    const debounce = function (fn: any, delay: number) {
        let setTime: any;
        return function (...args: any) {
            const context = this;
            clearTimeout(setTime);
            setTime = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        }
    }

    const throttle = function (fn: any, delay: number) {
        let previousCallTime: number = 0;
        return function (...args: any) {
            const context = this;
            if (Date.now() - previousCallTime > delay) {
                fn.apply(context, args);
                previousCallTime = Date.now();
            }
        }
    }

    document.addEventListener('click', throttle((e) => {
        console.log('Clicked', e);
    }, 3000));
};