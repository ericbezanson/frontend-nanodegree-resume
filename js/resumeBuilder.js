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

var work = {

	"title": "Customer Service Officer",
	"employer": "Scotiabank",
	"dates": "2013-Present ",
	"location": "Halifax, NS",
	"description": "working in a professional incoming customer contact center, resolving customer concerns as well as providing financial advice and services"

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



if (bio.skills.length < 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = [];
for (var key in bio.skills) {
	var html = HTMLskills.replace("%data%",bio.skills[key]);
	formattedSkills.push(html);
	$("#header").append(formattedSkills.join(''));
}
};