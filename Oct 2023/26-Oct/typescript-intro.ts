class Student {
    name: string;
    rollNo: number;
    yearOfBirth: number;
    isIndian: boolean;

    constructor(
        name: string,
        rollNo: number,
        yearOfBirth: number,
        isIndian: boolean
    ) {
        this.name = name;
        this.rollNo = rollNo;
        this.yearOfBirth = yearOfBirth;
        this.isIndian = isIndian;
    }

    age() {

    }
}

const stu = new Student("John", 23, 1999, true);

stu.age();
