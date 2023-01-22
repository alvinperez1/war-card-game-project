class Student {
    constructor(name, GPA) {
        this.name = name;
        this.GPA = GPA;
    }

    describe() {
        return `${this.name} has a ${this.GPA}`;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        if(student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You can only add an instance of Student. Argument is not a student: ${student}`);
        }
    }

    describe() {
        return `${this.name} has ${this.student.length} students.`;
    }
}

class Menu {
    constructor() {
       this.schools = [];
       this.selectedSchool = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createSchool();
                    break;
                case '2':
                    this.viewSchool();
                    break;
                case '3':
                    this.deleteSchool();
                    break;
                case '4':
                    this.displaySchools();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit 
            1) create new school 
            2) view school
            3) delete school
            4) display all schools
        `);
    }

    showSchoolMenuOptions(schoolInfo) {
        return prompt(`
        0) back
        1) create student
        2) delete student
        ---------------------
        ${schoolInfo}
        `);
    }

    displaySchools(){
        let schoolString = '';
        for (let i = 0; i < this.schools.length; i++) {
            schoolString += i + ') ' + this.schools[i].name + '\n';
        }
        alert(schoolString);
    }

    createSchool() {
       let name = prompt('Enter name for new school:');
       this.schools.push(new School(name));
    }

    viewSchool() {
        let index = prompt('Enter the index of the school you wish to view:');
        if (index > -1 && index < this.schools.length) {
            this.selectedSchool = this.schools[index];
            let description = 'School Name: ' + this.selectedSchool.name + '\n';

            for (let i = 0; i < this.selectedSchool.students.length; i++) {
                description += i + ') ' + this.selectedSchool.students[i].name + ' - ' + this.selectedSchool.students[i].GPA + '\n';
            }

            let selection = this.showSchoolMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();
            }
        }
    }

    deleteSchool(){
        let index = prompt('Enter the index of the school you wish to delete:');
        if (index > -1 && index < this.schools.length) {
            this.schools.splice(index, 1);
        }
    }

    createStudent() {
        let name = prompt('Enter name for new student:');
        let GPA = prompt('Enter GPA for new student:');
        this.selectedSchool.students.push(new Student(name, GPA));
    }

    deleteStudent() {
        let index = prompt('Enter the index of the student you wish to delete:');
        if (index > -1 && index < this.selectedSchool.students.length) {
            this.selectedSchool.students.splice(index, 1);
        }
    } 
}

let menu = new Menu();
menu.start();