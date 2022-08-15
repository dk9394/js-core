interface IUser {
    name: string;
    age: number;
    city: string;
}

export function arrayMethods() {

    let users: IUser[] = [
        {
            name: 'User 1',
            age: 25,
            city: 'Delhi'
        },
        {
            name: 'User 2',
            age: 22,
            city: 'Delhi'
        },
        {
            name: 'User 3',
            age: 20,
            city: 'Sonipat'
        },
        {
            name: 'User 4',
            age: 35,
            city: 'Mumbai'
        },
        {
            name: 'User 5',
            age: 30,
            city: 'Banglore'
        },
        {
            name: 'User 6',
            age: 41,
            city: 'Delhi'
        }
    ];

    // every
    const above18 = users.every(user => user.age > 18);
    console.log('All users are above 18: ', above18 ? 'Yes' : 'No');

    // filter, map, join
    const above25Users = users.filter(user => user.age > 25).map(user => user.name);
    console.log('Above 25 users: ', above25Users.join(', '));

    // some, find
    const anyOldUser = users.some(user => user.age > 35);
    console.log('Any old user: ', anyOldUser ? users.find(user => user.age > 35)?.name : 'No');

    // includes, find
    const bangloreUser = users.map(user => user.city).includes('Banglore');
    console.log('Any Banglore user: ', bangloreUser ? users.find(user => user.city === 'Banglore')?.name : 'No');

    // sort (reurn value "a - b" means assending, "b - a" means desending), reverse
    const sortUsersByAge = users.sort((a, b) => a.age - b.age).reverse();
    console.log(sortUsersByAge);

    // reduce
    

    /**
     * pop, push, shift, unshift, splice
     */
    users.push({name: 'User 7', age: 40, city: 'Gurgaon'});
    // users = [...users, {name: 'User 7', age: 40, city: 'Gurgaon'}];

    console.log('Last added user: ', users.pop());
    // users = users.slice(0, users.length - 1);

    users.unshift({name: 'User 0', age: 15, city: 'Panipat'});
    // users = [{name: 'User 0', age: 15, city: 'Panipat'}, ...users];

    console.log('First added user: ', users.shift());
    // users = users.slice(1);

    console.log('Remove 2nd user: ', users.splice(1, 1)[0]);
    // users = [...users.slice(0, 1), ...users.slice(2)];
};
