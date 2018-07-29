console.log("Name: Eugene Mosby".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: I like to code");

console.log("My Interest");
console.log("* Listening to Old Time Radio");
console.log("* Stamp Collecting");
console.log("* Studying Web Development");
console.log("* Handicapping Races");

console.log("My Previous Experiences");
let displayPosition = function (companyName, jobTitle, description) {
    console.log(`${companyName}, ${jobTitle}, ${description}`)
};
displayPosition("University of Alabama Birmingham", "Undergraduate Degree", "Studied Sociology" );
displayPosition("University of Cincinnati", "Master Degree", "Studied Criminal Justice" );
displayPosition("Police Department", "Chief of Detectives", "Executive Position" );

console.log("My Skills");
let displaySkill = function (skill, cool) {
    if (cool === true) {
        console.log(`* BAM: ${skill}`);
    } else {
        console.log(`* ${skill}`);
    }
};
displaySkill("JavaScript Coding", true);
displaySkill("Handicapping Races", false);
displaySkill("Interviewing and Interrogation", true);
displaySkill("HTML", false);
displaySkill("CSS", false);
displaySkill("Piano Playing", false);
displaySkill("Bible Study", true);
displaySkill("Teaching", false);
displaySkill("Spanish", false);
