// CODE here for your Lambda Classes


// Person

// First we need a Person class. This will be our base-class
//     Person receives name age location gender all as props
//     Person receives speak as a method.
//     This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}



// Instructor

//     Now that we have a Person as our base class, we'll build our Instructor class.
//     Instructor uses the same attributes that have been set up by Person
//     Instructor has the following unique props:
//         specialty what the Instructor is good at i.e. 'redux'
//         favLanguage i.e. 'JavaScript, Python, Elm etc.'
//         catchPhrase i.e. Don't forget the homies
//     Instructor has the following methods:
//         demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//         grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        // return `${student.name} receives a perfect score on ${subject}.`; //Original working code before stretch
        student.grade = Math.floor(Math.random() * Math.floor(100));
        return `${student.name} receives a ${student.grade} on ${subject}.`
    }
}

// Student

//     Now we need some students!
//     Student uses the same attributes that have been set up by Person
//     Student has the following unique props:
//         previousBackground i.e. what the Student used to do before Lambda School
//         className i.e. CS132
//         favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//     Student has the following methods:
//         listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
//         PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
//         sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70)
        {
            return `Congratulations ${this.name} you may now graduate from ${this.className}!`;
        }
        return `${this.name} you must keep studying! You only have a ${this.grade}!`;
    }
}

// Project Mananger

//     Now that we have instructors and students, we'd be nowhere without our PM's
//     ProjectManagers are extensions of Instructors
//     ProjectManagers have the following uniqe props:
//         gradClassName: i.e. CS1
//         favInstructor: i.e. Sean
//     ProjectManangers have the following Methods:
//         standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//         debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp() {
        return `${this.name} announces to {channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jeff = new Student({
    name: 'Jeff Winger',
    location: 'Greendale',
    age: 42,
    gender: 'male',
    previousBackground: 'Lawyer',
    className: 'WEB17',
    favSubjects: [`Who Indeed: A Critical Analysis of Television's Who's The Boss?`, `Conspiracy Theories in U.S. History`, `History of Ice Cream`],
    grade: 71
});

const craig = new ProjectManager({
    name: 'Craig Pelton',
    location: 'Denver',
    age: 44,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Administrative',
    catchPhrase: `Dean dean dean dean`,
    gradClassName: 'WEB17',
    favInstructor: 'Josh'
});


//Testing Instructor Class
console.log("Testing Instructor Class");
console.log(fred.speak());
console.log(fred.demo("CSS"));
console.log(fred.grade(jeff, "HTML"));

//Testing Student Class
console.log("Testing Student Class");
console.log(jeff.speak());
console.log(jeff.listsSubjects());
console.log(jeff.PRAssignment("Theoretical Phys Ed"));
console.log(jeff.sprintChallenge("Theoretical Phys Ed"));

//Testing Project Manager Class
console.log("Testing Project Manager Class");
console.log(craig.speak());
console.log(craig.demo("Political Science"));
console.log(craig.grade(jeff, "Sailing"));
console.log(craig.standUp(jeff, "Sailing"));
console.log(craig.debugsCode(jeff, "Time Travel"));

// Stretch Problem
console.log("Stretch Problems");
jeff.grade = 14;
console.log(jeff.graduate());

while (jeff.grade < 70) {
    console.log(craig.grade(jeff, "HTML"));
}

console.log(jeff.graduate());