var bio = {

	"name": "Eric Bezanson",
	"role": "Web Developer",
	"contactInfo": {
		"email": "eric.bezanson@outlook.com",
		"mobile": "902-403-6595",
		"github": "https://github.com/ericbezanson",
		"location": "Halifax, NS"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "Now this is the law of the jungle, as old and as true as the sky, And the wolf that shall keep it may prosper, but the wolf that shall break it must die. As the creeper that girdles the tree trunk, the law runneth forward and back; For the strength of the pack is the wolf, and the strength of the wolf is the pack.",
	"skills": ["nunchuck skills", "bow hunting skills", "computer hacking skills"]

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContacts = [];
for (var key in bio.contactInfo) {
	var html = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', bio.contactInfo[key]);
  	formattedContacts.push(html);
}

var formattedSkills = [];
for (var key in bio.skills) {
	var html = HTMLskills.replace("%data%",bio.skills[key]);
	formattedSkills.push(html);
}


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
$("#topContacts").append(formattedContacts.join(' '));

console.log("the cake was a lie");



