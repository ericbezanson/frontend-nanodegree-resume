var bio = {

	"name": "Eric Bezanson",
	"role": "Web Developer",
	"contactInfo": {
		"email": "eric.bezanson@outlook.com",
		"mobile": "902-403-6595",
		"github": "https://github.com/ericbezanson",
		"twitter": "https://twitter.com/EricBezanson",
		"location": "Halifax, NS"
	},
	"picture-URL": "images/fry.jpg",
	"welcomeMessage": "im new, its my first day",
	"skills": "nunchuck skills, bow hunting skills, computer hacking skills"

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contactInfo);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedContacts);
$("#header").append(formattedmobile);
$("#header").append(formattedWelcome);



