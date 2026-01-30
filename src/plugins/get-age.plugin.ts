//import getAgePlugin from 'get-age'
import { differenceInYears } from 'date-fns';

export const getAge = (birthdate: string) => {
    if (!birthdate) return new Error('Birthdate is required');

    //return getAgePlugin(birthdate);
    return differenceInYears(new Date(), new Date(birthdate));
}

