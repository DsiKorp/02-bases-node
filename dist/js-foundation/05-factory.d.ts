interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number | Error;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}
declare const buildMakePerson: ({ getUUID, getAge }: BuildMakerPersonOptions) => ({ name, birthdate }: PersonOptions) => {
    id: string;
    name: string;
    birthdate: string;
    age: number;
};
export { buildMakePerson };
//# sourceMappingURL=05-factory.d.ts.map