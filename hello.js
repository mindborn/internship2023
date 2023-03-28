console.log('hello typescript');
var Student = /** @class */ (function () {
    function Student(name, roll, active) {
        this.name = name;
        this.roll = roll;
        this.active = active;
    }
    return Student;
}());
var s = new Student('abcd', 10, true);
