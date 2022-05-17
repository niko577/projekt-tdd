describe('employees', () => {
    it('employees array exists', () => {
        const employees = new Employees();

        expect(employees.list).toEqual([]);
    });
})