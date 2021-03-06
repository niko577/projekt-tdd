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
            lastName: 'Doe',
            skills: []
        });

        expect(employees.list).toEqual([{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        }]);
    });

    it('it is possible to remove an employee', () => {
        const employees = new Employees();

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        });

        expect(employees.list).toEqual([{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        }]);

        employees.remove(1);

        expect(employees.list).toEqual([]);
    });

    it('the ability to edit the employee', () => {
        const employees = new Employees();

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        });

        employees.edit(1, {
            firstName: 'Jane',
            lastName: 'Nowak',
            skills: []
        });

        expect(employees.list).toEqual([{
            id: 1,
            firstName: 'Jane',
            lastName: 'Nowak',
            skills: []
        }]);
    });
})

describe('skills', () => {
    it('skills array exists', () => {
        const skills = new Skills();

        expect(skills.getSkillList).toEqual([]);
    });

    
    it('it is possible to add skill', () => {
        const skills = new Skills();

        skills.add({
            id: 1,
            name: 'JavaScript'
        });

        expect(skills.getSkillList).toEqual([{
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

        expect(skills.getSkillList).toEqual([{
            id: 1,
            name: 'JavaScript'
        }]);
    });

    it('it is possible to remove skill', () => {
        const skills = new Skills();

        skills.add({
            id: 1,
            name: 'PHP',
        });

        skills.remove(1);

        expect(skills.getSkillList).toEqual([]);
    });

    it('it is possible to get skill list', () => {
        const skills = new Skills();

        skills.add({
            id: 1,
            name: 'PHP',
        });
        skills.add({
            id: 2,
            name: 'Node',
        });
        skills.add({
            id: 3,
            name: 'Rust',
        });

        expect(skills.getSkillList).toEqual([
            {
                id: 1,
                name: 'PHP',
            },
            {
                id: 2,
                name: 'Node',
            },
            {
                id: 3,
                name: 'Rust',
            }
        ]);
    });
});

describe('skill to employee', () => {
    it('can add skills to employee', () => {
        const skills = new Skills();
        const employees = new Employees();

        skills.add({
            id: 1,
            name: 'PHP',
        });
        skills.add({
            id: 2,
            name: 'Node',
        });
        skills.add({
            id: 3,
            name: 'Rust',
        });

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        });
        employees.add({
            id: 2,
            firstName: 'Karol',
            lastName: 'Nowak',
            skills: []
        });

        employees.addSkill({
            employeeId: 1,
            skillId: 1
        });
        employees.addSkill({
            employeeId: 1,
            skillId: 2
        });

        employees.addSkill({
            employeeId: 2,
            skillId: 2
        });
        employees.addSkill({
            employeeId: 2,
            skillId: 3
        });

        expect(employees.list).toEqual([
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                skills: [1, 2]
            },
            {
                id: 2,
                firstName: 'Karol',
                lastName: 'Nowak',
                skills: [2, 3]
            }
        ]);
    });

    it('can remove skill from employee', () => {
        const skills = new Skills();
        const employees = new Employees();

        skills.add({
            id: 1,
            name: 'PHP',
        });
        skills.add({
            id: 2,
            name: 'Node',
        });
        skills.add({
            id: 3,
            name: 'Rust',
        });

        employees.add({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            skills: []
        });
        employees.add({
            id: 2,
            firstName: 'Karol',
            lastName: 'Nowak',
            skills: []
        });

        employees.addSkill({
            employeeId: 1,
            skillId: 1
        });
        employees.addSkill({
            employeeId: 1,
            skillId: 2
        });

        employees.addSkill({
            employeeId: 2,
            skillId: 2
        });
        employees.addSkill({
            employeeId: 2,
            skillId: 3
        });

        expect(employees.list).toEqual([
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                skills: [1, 2]
            },
            {
                id: 2,
                firstName: 'Karol',
                lastName: 'Nowak',
                skills: [2, 3]
            }
        ]);

        employees.removeSkill({
            employeeId: 1,
            skillId: 2
        });

        expect(employees.list).toEqual([
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                skills: [1]
            },
            {
                id: 2,
                firstName: 'Karol',
                lastName: 'Nowak',
                skills: [2, 3]
            }
        ]);
    });
});