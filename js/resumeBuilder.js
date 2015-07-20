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
    "welcomeMessage": "I have over 1000 years experience in the food service industry, 99% of that was being frozen in a cryo chamber but experience is experience!",
    "skills": ["nunchuck skills", "bow hunting skills", "computer hacking skills"]

};

var work = {
	"Scotiabank": {
    	"title": "Customer Service Officer",
   		"employer": "Scotiabank",
 	    "dates": "2013-Present ",
 	    "location": "Halifax, NS",
 	    "description": "working in a professional incoming customer contact center, resolving customer concerns as well as providing financial advice and services"
	},
	"Wirelesswave": {
		"title": "Assistant Manager",
		"employer": "Wireless Wave",
		"dates": "2012-2013",
		"location": "Dartmouth, NS",
		"description": "Helping developstaff within the store, as well as maintaining a high level of sales productivity"
	}
};

var edu = {
    "schools": [
        {
        "school": "Udacity",
        "city": "Mountain Veiw, California",
        "degree": "Web Development"
        },    

        {
        "school": "Saint Mary's University",
        "city": "Halifax",
        "major": "Commerce"
        }    
    ]
};
//Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedHeader = HTMLheaderName + HTMLheaderRole + formattedpic + formattedWelcomeMsg;

$("#header").append(formattedHeader);

var formattedContacts = [];
for (var key in bio.contactInfo) {
	var html = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', bio.contactInfo[key]);
  	formattedContacts.push(html);
}
$("#topContacts").append(formattedContacts.join(' '));

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
}
//work 
var displayWork = function() {
for (key in work) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[key].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[key].title);
	var formattedDates = HTMLworkDates.replace("%data%", work[key].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work[key].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work[key].description);
	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);
}
};
displayWork();

