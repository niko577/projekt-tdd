interface Employee {
    id: number;
    firstName: string;
    lastName: string;
}
export class Employees {
    list: Employee[] = [];

    constructor() {}

    add(employee: Employee): void {
        this.list.push(employee);
    }

    remove(id: number): void {
        this.list = this.list.filter((employee: Employee) => employee.id !== id);
    }

    edit(id, data): void {
        const index = this.list.findIndex((employee) => employee.id === id);
        if (index !== -1) {
            this.list[index] = {
                ...this.list[index],
                ...data
            };
        }
    }
}