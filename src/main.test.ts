import { Employees } from "./main";

describe('employees', () => {
    it('employees array exists', () => {
        const employees = new Employees();

        expect(employees.list).toEqual([]);
    });
})