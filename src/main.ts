interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    skills: number[];
}
interface Skill {
    id: number;
    name: string;
}
export class Employees {
    list: Employee[] = [];

    constructor() {}

    public add(employee: Employee): void {
        this.list.push(employee);
    }

    public remove(id: number): void {
        this.list = this.list.filter((employee: Employee) => employee.id !== id);
    }

    public edit(id: number, data: Omit<Employee, 'id'>): void {
        const index = this.list.findIndex((employee: Employee) => employee.id === id);
        if (index !== -1) {
            this.list[index] = {
                ...this.list[index],
                ...data
            };
        }
    }

    public addSkill({ employeeId, skillId }: { employeeId: number; skillId: number }): void {
        const employee = this.list.find((employee: Employee) => employee.id === employeeId);
        if (employee) {
            employee.skills.push(skillId);
        }
    }

    public removeSkill({ employeeId, skillId }: { employeeId: number; skillId: number }): void {
        const employee = this.list.find((employee: Employee) => employee.id === employeeId);
        if (employee) {
            employee.skills = employee.skills.filter((skill: number) => skill !== skillId);
        }
    }
}

export class Skills {
    private list: Skill[] = [];

    constructor() {}

    get getSkillList(): Skill[] {
        return this.list;
    }

    add(skill: Skill): void {
        if (!this.list.find((item: Skill) => item.name === skill.name)) {
            this.list.push(skill);
        }
    }

    remove(id: number): void {
        this.list = this.list.filter((skill: Skill) => skill.id !== id);
    }
}