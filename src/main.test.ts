import { Employees, Skills } from "./main";

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

    it('it is possible to remove an employee', () => {
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

        employees.remove(1);

        expect(employees.list).toEqual([]);
    });

    it('the ability to edit the employee', () => {
        const employees = new Employees();

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe'
        });

        employees.edit(1, {
            firstName: 'Jane',
            lastName: 'Nowak'
        });

        expect(employees.list).toEqual([{
            id: 1,
            firstName: 'Jane',
            lastName: 'Nowak'
        }]);
    });
})

describe('skills', () => {
    it('skills array exists', () => {
        const skills = new Skills();

        expect(skills.list).toEqual([]);
    });

    
    it('it is possible to add skill', () => {
        const skills = new Skills();

        skills.add({
            id: 1,
            name: 'JavaScript'
        });

        expect(skills.list).toEqual([{
            id: 1,
            name: 'JavaScript'
        }]);
    });

    it('two skills with the same name cannot be added', () => {
        const skills = new Skills();

        skills.add({
            id: 1,
            name: 'JavaScript'
        });
        skills.add({
            id: 2,
            name: 'JavaScript'
        });

        expect(skills.list).toEqual([{
            id: 1,
            name: 'JavaScript'
        }]);
    });
});