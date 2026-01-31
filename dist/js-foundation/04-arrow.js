"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(undefined, user) : callback(`User not found with the provided ID ${id}`);
};
exports.getUserById = getUserById;
// module.exports = {
//     getUserById,
// };
//# sourceMappingURL=04-arrow.js.map