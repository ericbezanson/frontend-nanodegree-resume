//header
var bio = {

    'name': 'Eric Bezanson',
    'role': 'Web Devloper',
    'contacts': {
        'email': 'mailto:eric.bezanson@outlook.com',
        'linkedin': 'https://www.linkedin.com/pub/eric-bezanson/3/678/62',
        'github': 'https://github.com/ericbezanson',
        'mobile': '902-403-6595'
    },
    'bioPic': 'images/ericpic.jpg',
    'welcomeMessage': 'I have over 1000 years experience in the food service industry, 99% of that was being frozen in a cryo chamber but experience is experience!',
    'skills': ['nunchuck skills', 'bow hunting skills', 'computer hacking skills']

};
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
var projects = {
	'projects': [
	{
		'title': '<a href="http://www.ericbezanson.com/tahoe.html" target="_blank">Lake Tahoe</a>',
		'dates': '2015',
		'description': 'Use a working knowlege of CSS to create a landing page for the beautiful Lake Tahoe, California',
		'image': 'images/lakeTahoeThumb.png'
	}
	]
};
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedpic = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedID = formattedName + formattedRole;
var formattedHeader = formattedpic + formattedWelcomeMsg;
$('#header').prepend(formattedID);
$('#header').append(formattedHeader);

//rewriting this to allow the addition of img-links	
var HTMLcontactGeneric = '<li class="contact-item"><a class="%contact%" href="%data%" target="_blank">%data%</a></li>';
var formattedContacts = [];
for (var key in bio.contacts) {
	var html = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', bio.contacts[key]);
  	formattedContacts.push(html);

}
$('#topContacts').append(formattedContacts.join(' '));

if (bio.skills.length > 0) {
	$('.skillsContent').prepend(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		$('#skills').append(HTMLskills.replace("%data", skill));
	});
}


work.display = function() {
	for(job in work.jobs) {
		$('.workContent').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
		
	}
}
work.display();

edu.display = function() {
	for (school in edu.schools) {
		$('.educationContent').append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', edu.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace('%data%', edu.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace('%data%', edu.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace('%data%', edu.schools[school].major);
		var formattedDates = HTMLschoolDates.replace('%data%', edu.schools[school].dates);
		$('.education-entry:last').append(formattedName + formattedLocation + formattedDegree + formattedMajor + formattedDates);
	}
}
edu.display();

projects.display = function() {
	for (project in projects.projects){
		$('.projectContent').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
		$('.project-entry').append(HTMLprojectStart + formattedTitle + formattedDates + formattedDescription + formattedImage);
	}
};
projects.display();



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
  });

function locationizer(work_obj) {
    var LocationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        newLocation.push(LocationArray);
    }
    return LocationArray;

}

$('#main').append(internationalizeButton);

var inName = function(bio_obj) {
    var finalName = bio.name.split(' ');
    finalName[1] = finalName[1].toUpperCase();
    finalName[0] = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
    finalName = finalName.join(' ');
    

}

inName(bio);


//$('#mapDiv').append(googleMap);


$(document).ready(function(){
	$("#dropdownContainer").hide();
	$("#topNav").click(function(){
		$("#dropdownContainer").slideToggle();
	})
$(document).ready(fuction(){
	$("dropdownContainer").hover(

		)
})








})
