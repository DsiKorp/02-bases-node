interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

export const getUserById = (id: number, callback: (err?: string, user?: User) => any) => {

    const user = users.find((user) => user.id === id);

    user ? callback(undefined, user) : callback(`User not found with the provided ID ${id}`);
};


// module.exports = {
//     getUserById,
// };