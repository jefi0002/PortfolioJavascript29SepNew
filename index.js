console.log("script loaded");

//Opgave 1
const grades = [40, 50, 60, 66, 71, 78, 81, 91];

console.log(grades);

grades.forEach(grade => {
    let gradescore;

    if (grade >= 90) {
        gradescore = "A";
    } else if (grade >= 80) {
        gradescore = "B";
    } else if (grade >= 70) {
        gradescore = "C";
    } else if (grade >= 60) {
        gradescore = "D";
    } else {
        gradescore = "F";
    }


    console.log(`${grade}: ${gradescore}`);

});

let sum = 0;
grades.forEach(grade => {
    sum += grade;
});


const avg =(sum/grades.length)

if (avg < 60) {
    console.log("Overall Class Performance: Needs Improvement");
} else if (avg < 70) {
    console.log("Overall Class Performance: Satisfactory");
} else if (avg < 80) {
    console.log("Overall Class Performance: Good");
} else if (avg < 90) {
    console.log("Overall Class Performance: Excellent");
}

let largest = grades[0];

for (let i = 1; i < grades.length; i++) {
    if (grades[i] > largest) {
        largest = grades[i];
    }
}

let gradescore;
if (largest >= 90) {
    gradescore = "A";
} else if (largest >= 80) {
    gradescore = "B";
} else if (largest >= 70) {
    gradescore = "C";
} else if (largest >= 60) {
    gradescore = "D";
} else {
    gradescore = "F";
}

let smallest = grades[0];
for (let i = 1; i < grades.length; i++) {
    if (grades[i] < smallest) {
        smallest = grades[i];
    }
}

let gradescoreSmallest;
if (smallest >= 90) {
    gradescoreSmallest = "A";
} else if (smallest >= 80) {
    gradescoreSmallest = "B";
} else if (smallest >= 70) {
    gradescoreSmallest = "C";
} else if (smallest >= 60) {
    gradescoreSmallest = "D";
} else {
    gradescoreSmallest = "F";
}
console.log(`Highest Grade: ${largest} (${gradescore})`);

console.log(`Smallest Grade: ${smallest} (${gradescoreSmallest})`);

console.log("Average Grade:(",avg,")");


// Opgave 2
console.log('');

const island = ['-', '-', '-', 'T', '-', '-'];

console.log('There are', island.length, 'moves on this island ')

island.forEach((move, index) => {
    if (move === 'T') {
        console.log(`Treasure found at move ${index + 1}`);
    } else {
        console.log(`No treasure found at move ${index + 1}`);
    }
});

let treasureNumber = 0;

island.forEach((move, index) => {
    if (move === 'T') {
        console.log(`Treasure found at move ${index + 1}`);
        treasureNumber++;
    } else {
        console.log(`No treasure found :(`);
    }
});


console.log(`There were ${treasureNumber} treasures in the island`);

// Opgave 3
console.log('');

const firstWords = ["Big", "Life", "Inspire", "Growth", "Tech", "Vision", "Inter", "Smart", "Green", "Up", "Science", "Money", "Experience", "Digital", "Future"];
const secondWords = ["Hub", "Solutions", "Aps", "Leader", "Mind", "Leader", "Develop", "Blue", "Past", "Form", "Synergy", "Love", "User", "Shipping", "Web", "Tax"];

function generateName() {
    const randomFirst = firstWords[Math.floor(Math.random() * firstWords.length)];
    const randomSecond = secondWords[Math.floor(Math.random() * secondWords.length)];
    return `${randomFirst} ${randomSecond}`;
}

console.log(generateName());