interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

export function getUserById(id: number, callback: (error: string | null, user?: User) => void) {
    const user = users.find(function (user: User) {
        return user.id === id;
    });

    if (!user) {
        return callback(`User not found with the provided ID ${id}`);
    }

    return callback(null, user);
};


// module.exports = {
//     getUserById,
// };