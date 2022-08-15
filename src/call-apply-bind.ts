export const callBindApply = function () {

    const user = {
        firstName: 'Deepak',
        lastName: 'Kumar',
        
    };

    const printName = function (city = '', state = '', country = ''): any {
        console.log(`${this.firstName} ${this.lastName} from ${city} (${state}), ${country}`)
    }

    /**
     * call is used to invoke a function in different context or this value.
     * It takes first argument as this and optional parameters afterwards.
     * It invokes the function immediately.
     */ 
    printName.call(user, 'Mumbai', 'Maharastra', 'India');


    /**
     * apply is sort of same as call but the only difference is, it takes the parameters in array format.
     */ 
    printName.apply(user, ['Mumbai', 'Maharastra', 'India']);


     /**
     * bind also works as call but the only difference is, 
     * it takes return the copy of the function that can be invoked later.
     */ 
    const printNameRef = printName.bind(user, 'Mumbai', 'Maharastra', 'India');
    printNameRef();



    /**
     * bind method polyfill
     */

    (Function.prototype as any).myBind = function (context: any, ...args: any) {
        const fn = this;
        return function (...args2: any) {
            fn.call(context, ...[...args, ...args2]);
        }
    }

    const myBindUser = (printName as any).myBind(user, 'Mumbai');
    myBindUser('Maharastra', 'India');
};
