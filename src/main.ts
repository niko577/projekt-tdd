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
}