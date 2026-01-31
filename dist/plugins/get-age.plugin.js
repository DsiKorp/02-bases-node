"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
//import getAgePlugin from 'get-age'
const date_fns_1 = require("date-fns");
const getAge = (birthdate) => {
    if (!birthdate)
        return new Error('Birthdate is required');
    //return getAgePlugin(birthdate);
    return (0, date_fns_1.differenceInYears)(new Date(), new Date(birthdate));
};
exports.getAge = getAge;
//# sourceMappingURL=get-age.plugin.js.map