import { Employees } from "./main";

describe('employees', () => {
    it('employees array exists', () => {
        const employees = new Employees();

        expect(employees.list).toEqual([]);
    });

    it('it is possible to add an employee', () => {
        const employees = new Employees();

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe'
        });

        expect(employees.list).toEqual([{
            id: 1,
            firstName: 'John',
            lastName: 'Doe'
        }]);
    });
})