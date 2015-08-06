//Objects

//Bio Object
var bio = {

    'name': 'Eric Bezanson',
    'role': 'Web Developer',
    'contacts': {
        'email': 'eric.bezanson@outlook.com',
        'mobile': '902-403-6595',
        'github': 'https://github.com/ericbezanson',
        'location': 'Halifax, NS'
    },
    'bioPic': 'images/ericpic.jpg',
    'welcomeMessage': 'Hey my name is Eric, Currently I am a Web Developer in training! This is on of my first projects and I hope you enjoy it. My contact info is listed above feel free to contact me by any means!',
    'skills': ['• nunchuck skills •', '• bow hunting skills •', '• computer hacking skills •']

};
//Work Object
var work = {
	'jobs': [
	{
    	'employer': 'Scotiabank',
   		'title': 'Customer Service Officer',
 	    'dates': '2013-Present ',
 	    'location': 'Halifax, NS',
 	    'description': 'working in a professional incoming customer contact center, resolving customer concerns as well as providing financial advice and services'
	},
	{ 
		'employer': 'Wireless Wave',
		'title': 'Assistant Manager',
		'dates': '2012-2013',
		'location': 'Dartmouth, NS',
		'description': 'Helping develop staff within the store, as well as maintaining a high level of sales productivity'
	}
]	
};
//Education Object
var edu = {
    'schools': [
        {
        'name': 'Udacity',
        'location': 'Mountain Veiw, California',
        'degree': 'Nanodegree',
        'major': 'Front-End Web Development',
        'dates': '2015'
        },    

        {
        'name': 'Treehouse',
        'location': 'Orlando, Florida',
        'degree': 'Treehouse Track',
        'major': 'front-end Web Development',
        'dates': '2015'
        }    
    ]
};
// Porjects Object
var projects = {
	'projects': [
	{
		'title': '<a href="http://www.ericbezanson.com/tahoe.html" target="_blank">Lake Tahoe</a>',
		'dates': '2015',
		'description': 'Use a working knowlege of CSS to create a landing page for the beautiful Lake Tahoe, California',
		'image': 'images/lakeTahoeThumb.png'
	}
	]
}
//Display Functions

//Display Bio
bio.display = function() {
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedpic = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedID = formattedName + formattedRole;
var formattedHeader = formattedpic + formattedWelcomeMsg;
$('#header').prepend(formattedID);
$('#header').append(formattedHeader);

var formattedContacts = [];
for (var key in bio.contacts) {
	var html = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', bio.contacts[key]);
  	formattedContacts.push(html);
}
$('#topContacts').append(formattedContacts.join(' '));

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkills);
	var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkills);
	var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkills);
}
};
//Display Work
work.display = function() {
	for(var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
		
	}
}
//Display Education
edu.display = function() {
	for (school in edu.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', edu.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace('%data%', edu.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace('%data%', edu.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace('%data%', edu.schools[school].major);
		var formattedDates = HTMLschoolDates.replace('%data%', edu.schools[school].dates);
		$('.education-entry:last').append(formattedName + formattedLocation + formattedDegree + formattedMajor + formattedDates);
	}
}
//Display Functions
projects.display = function() {
	for (project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
		$('.project-entry').append(HTMLprojectStart + formattedTitle + formattedDates + formattedDescription + formattedImage);
	}
};

bio.display();
work.display();
edu.display();
projects.display();


//Tracking Click Locations in console
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
	});

//Locationizer Button
$('#main').append(internationalizeButton);
var inName = function(bio_obj) {
    var finalName = bio.name.split(' ');
    finalName[1] = finalName[1].toUpperCase();
    finalName[0] = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
    finalName = finalName.join(' ');
}
inName(bio);

//Adding Google Maps
$('#mapDiv').append(googleMap);
console.log("The Cake is a Lie")