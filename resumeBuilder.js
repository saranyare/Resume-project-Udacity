var bio = {
    "name": "Saranya Ruiz-Esparza",
    "role": "Front-end Web developer",
    "contacts": {
        "mobile": "919.885.0000",
        "email": "meow.gis@gmail.com",
        "github": "saranyare",
        "location": "Durham, North Carolina, United Stated",       
    },
    "bioPic": "https://lh5.googleusercontent.com/-KgKfFji5avk/AAAAAAAAAAI/AAAAAAAAANU/GnvYjEr708c/photo.jpg",
    "welcomeMsg": "Hi. I'm Saranya.",
    "skills": ["CSS", "HTML","JavaScript", "python", "Word", "Excel"],
    "display": function() {
        
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        
        var mymobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var myemail = HTMLemail.replace("%data%", bio.contacts.email);
        var mygithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        
        $("#topContacts").append(mymobile, myemail, mygithub, mylocation);
        $("#footerContacts").append(mymobile, myemail, mygithub, mylocation);
        
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
        
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedwelcomeMsg);
        
        $("#header").append(HTMLskillsStart);
        for (var index in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
            $("#skills:last").append(formattedSkill);
        }    
        
    }
        
    
};
bio.display();

var education = {
    "schools": [
    {
        "name": "Thaksin University",
        "location": "Songkhla, Thailand",
        "degree": "B.Sc.",
        "major": "Biology",
        "dates": "1999-2003",
        "url": "http://www.tsu.ac.th/eng/contact.php"
    },{
        "name": "Sukhothai University",
        "location": "Bangkok, Thailand",
        "degree": "Teaching",
        "major": "Teaching certificate",
        "dates": "2004-2006",
        "url": "http://www.tsu.ac.th/eng/contact.php"
    }
    ],
    
    "onlineCourses": [
    {
        "title": "Udacity",
        "school": "Intro to programming",
        "dates": "2017",
        "url": "http://www.udacity.com",
        
    }],


    "display": function() {
        
        for (var school in education.schools){
            $("#education").append(HTMLschoolStart);
            var schools = education.schools;
            
            var schName = HTMLschoolName.replace("%data%",
            schools[school].name);
            schName = schName.replace("#", schools[school].url);
            var schDates = HTMLschoolDates.replace("%data%",
            schools[school].dates);
            var schMajor = HTMLschoolMajor.replace("%data%",
            schools[school].major);
            var schLocation = HTMLschoolLocation.replace("%data%",
            schools[school].location);
            var schDegree = HTMLschoolDegree.replace("%data%",
            schools[school].degree);
    
            $(".education-entry:last").prepend(schName, schDegree, schDates, schLocation);
        }
        
        for (var course in education.onlineCourses){
            $(".education-entry:last").append(HTMLonlineClasses);
            
            var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            
            $(".education-entry:last").append(onlineTitle, onlineSchool, onlineDates, onlineURL);
        }
        
        
    }
    
};
        
education.display();

var work = {
    "jobs": [
    {
        "employer": "Connerstone Language Center",
        "title": "Teacher",
        "dates": "2006-2008",
        "location": "Chiang Mai, Thailand",
        "description": "Teaching Thai language to foreigners"
    },{
        "employer": "Grace International School",
        "title": "Teacher",
        "dates": "2008-2013",
        "location": "Chiang Mai, Thailand",
        "description": "Teaching Thai language to students K-12"
    }
    ],
    
    "display": function() {
        
        $("#workExperience").append(HTMLworkStart);
        
        for (var job in work.jobs){
            
            var theEmployer = HTMLworkEmployer.replace("%data%",
            work.jobs[job].employer);
            var theTitle = HTMLworkTitle.replace("%data%",
            work.jobs[job].title);
            var theDates = HTMLworkDates.replace("%data%",
            work.jobs[job].dates);
            var theLocation= HTMLworkLocation.replace("%data%",
            work.jobs[job].location);
            var theDescription = HTMLworkDescription.replace("%data%",
            work.jobs[job].description);
    
            $("#workExperience").append(theEmployer + theTitle, theDates, theLocation);
        }
               
    }
    
};
        
work.display();

var project ={
    "projects": [{
        "title": "Make a stylish website project",
        "dates": "2017",
        "description": "Use HTML and CSS making a website project for Intro to programming course at Udacity",
       // "url": "https://github.com/saranyare/Make-a-stylish-website-Udacity"
    },{
        "title": "Make your own quiz project",
        "dates": "2017",
        "description": "Use Python making a fill-in-the-blank quiz project for Intro to programming course at Udacity",
       // "url": "https://github.com/saranyare/Make-your-own-quiz-Udacity"
    },{
         "title": "Movie trailer website project",
        "dates": "2017",
        "description": "Use Python making a movie trailer website project for Intro to programming course at Udacity",
       // "url": "https://github.com/saranyare/Movie-trailer-website-Udacity"
    }],
    
    "display": function(){
        
        $("#projects").append(HTMLprojectStart);
        
        for (var finalproject in project.projects){
            
            var prTitle = HTMLprojectTitle.replace("%data%",
            project.projects[finalproject].title);
            var prDates = HTMLprojectDates.replace("%data%",
            project.projects[finalproject].dates);
            var prDescription = HTMLprojectDescription.replace("%data%",
            project.projects[finalproject].description);
          
            $(".project-entry:last").append(prTitle, prDates, prDescription);
            
            
        }
    }
    
};

project.display();

$("#mapDiv").append(googleMap);


