const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const getUserById = (id, callback) => {

    const user = users.find((user) => user.id === id);

    user ? callback(null, user) : callback(`User not found with the provided ID ${id}`);
};


module.exports = {
    getUserById,
};