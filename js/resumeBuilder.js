//object 1_bio
var bio = {
    "name": "Saranya Ruiz-Esparza",
    "role": "Front-end Web developer",
    "contacts": {
        "mobile": "919.885.0000",
        "email": "meow.gis@gmail.com",
        "github": "saranyare",
        "location": "Durham, North Carolina, United Stated",       
    },
    "biopic": "https://lh5.googleusercontent.com/-KgKfFji5avk/AAAAAAAAAAI/AAAAAAAAANU/GnvYjEr708c/photo.jpg",
    "welcomeMessage": "Hi. I'm Saranya.",
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
        
        $("#topContacts,#footerContacts").append(mymobile, myemail, mygithub, mylocation);
        
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);
        
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%",skill);
            $("#skills:last").append(formattedSkill);
        });    
        
    }
        
    
};
bio.display();

//object 2_education
var education = {
    "schools": [
    {
        "name": "Thaksin University",
        "location": "Songkhla, Thailand",
        "degree": "B.Sc.",
        "majors": ["Biology", "Microbiology"],
        "dates": "1999-2003",
        "url": "https://www.tsu.ac.th/eng/contact.php"
    },{
        "name": "Sukhothai University",
        "location": "Bangkok, Thailand",
        "degree": "Teaching",
        "majors": ["Teaching certificate", "Child development"],
        "dates": "2004-2006",
        "url": "https://www.tsu.ac.th/eng/contact.php"
    }
    ],
    
    "onlineCourses": [
    {
        "title": "Udacity",
        "school": "Intro to programming",
        "dates": "2017",
        "url": "https://www.udacity.com",
        
    }],


    "display": function() {
         education.schools.forEach(function(school){
        
            $("#education").append(HTMLschoolStart);
       
            var schools = education.schools;
            
            var schName = HTMLschoolName.replace("%data%",
            school.name);
            schName = schName.replace("#", school.url);
            var schDates = HTMLschoolDates.replace("%data%",
            school.dates);
            var schMajors = HTMLschoolMajor.replace("%data%",
            school.majors);
             $(".education-entry:last").append(schMajors);
            var schLocation = HTMLschoolLocation.replace("%data%",
            school.location);
            var schDegree = HTMLschoolDegree.replace("%data%",
            school.degree);
    
            $(".education-entry:last").prepend(schName, schDegree, schDates, schLocation);
        });
        
        education.onlineCourses.forEach(function(course){
            
            $(".education-entry:last").append(HTMLonlineClasses);
            
            var onlineName = HTMLonlineTitle.replace("%data%", course.title);
            var onlineSchool = HTMLonlineSchool.replace("%data%",course.school);
            //var onlineTitle = onlineName + onlineSchool;
            var onlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var onlineURL = HTMLonlineURL.replace("%data%", course.url);
            
            $(".education-entry:last").append(onlineName, onlineSchool, onlineDates, onlineURL);
        });    
        
    }
    
};
        
education.display();

//object 3_work
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
        
        work.jobs.forEach(function(job){
                   
            var theEmployer = HTMLworkEmployer.replace("%data%",
            job.employer);
            var theTitle = HTMLworkTitle.replace("%data%",
            job.title);
            var theDates = HTMLworkDates.replace("%data%",
            job.dates);
            var theLocation= HTMLworkLocation.replace("%data%",
            job.location);
            var theDescription = HTMLworkDescription.replace("%data%",
            job.description);
    
            $("#workExperience").append(theEmployer + theTitle, theDates, theLocation);
        });
               
    }
    
};
        
work.display();
//object 4_project
var projects ={
    "projects": [{
        "title": "Make a stylish website project",
        "dates": "2017",
        "description": "Use HTML and CSS making a website project for Intro to programming course at Udacity",
        "images": ["https://placehold.it/300x200", "https://placehold.it/300x200"]
       // "url": "https://github.com/saranyare/Make-a-stylish-website-Udacity"
    },{
        "title": "Make your own quiz project",
        "dates": "2017",
        "description": "Use Python making a fill-in-the-blank quiz project for Intro to programming course at Udacity",
        "images": ["https://placehold.it/300x200", "https://placehold.it/300x200"]
       // "url": "https://github.com/saranyare/Make-your-own-quiz-Udacity"
    },{
         "title": "Movie trailer website project",
        "dates": "2017",
        "description": "Use Python making a movie trailer website project for Intro to programming course at Udacity",
        "images": ["https://placehold.it/300x200", "https://placehold.it/300x200"]
       // "url": "https://github.com/saranyare/Movie-trailer-website-Udacity"
    }],
    
    "display": function(){
        
        projects.projects.forEach(function(project){
        
            $("#projects").append(HTMLprojectStart);
        
            var prTitle = HTMLprojectTitle.replace("%data%",
            project.title);
            var prDates = HTMLprojectDates.replace("%data%",
            project.dates);
            var prDescription = HTMLprojectDescription.replace("%data%",
            project.description);
            
            $(".project-entry:last").append(prTitle, prDates, prDescription);
            
            project.images.forEach(function(image){
                
            var prImages = HTMLprojectImage.replace("%data%", project.images);
            
            $(".project-entry:last").append(prImages);
          
          
            });     
            
        });
    }
    
};

projects.display();

//To append the google map to the resume
$("#mapDiv").append(googleMap);


