var projectList = document.getElementById('projectList');
var project = document.getElementById('project');

var projectTitles = new Array("Whack a Molar", "Empathy VR", "Indicative Presentations Viewer", "Breakdown!", "Generation Plymouth", "Soundshare", "Consumerism");

var projectDescriptions = new Array("A fun VR project developed on the Oculus Rift for the dentistry school at Plymouth university as a teeth-mapping teaching resource. The player is placed inside a giant mouth, and is given a series of questions about the location of specific teeth. To answer the question, the player must knock the corresponding teeth out of the mouth with a large hammer. <br /> <br />The project was developed in Unity in C# solely by me, except for the models of the                                 teeth which were supplied by the Dentistry school.",
                                    "A VR project developed on the Oculus Go for the Optometry school at Plymouth university during my time as a Digital Learning Developer. The project simulates the effects of brain lesions that affect the optical nerve, as well as simulating the four variants of colour blindness. The project was designed to increase empathy for those afflicted with these conditions. <br /><br />I created custom lens filters that were overlayed on top of the eye cameras in Unity to create the effects of each lesion. <br /> <br />The game is split across 3 levels; <br /><b>Sandbox</b> - Where players can experience the full effects of the conditions on everyday objects such as train maps, posters and a large garden. <br /><b>Diagnosis</b> - A mini game where the player is afflicted with a lesion at random, and must determine where the lesion is located solely based on their vision. <br /><b>3D Brain</b> - A large transparent brain shows the location of each of the lesions in full 3D space, and the player can interact with each lesion and toggle its effects on and off.",
                                    "A website housing 185 presentations on medical conditions that include a variety of information, resources and podcasts. The information is hosted on an Azure database and ultilises infinite scrolling and pagination to reduce the amount of content displayed at one time. Users can filter the presentations using a search bar as well as save specific presentations to a favourites list. The site is developed solely by me from the ground up, using Bootstrap, JQuery, PHP and SQL.",
                                    "My final project for University, A 3D first person puzzle game about fixing equipment in a robot manufacturing facility. The player is given a variety of equipment to interact with the environment (a screwdriver, crowbar, wires, USB stick and robot controller) and each piece of equipment has a unique gameplay mechanic required to use it. The game is played across a tutorial level and 3 main levels, each with their own unique style and puzzle. The difficulty increases with each level, and requires the player to think differently to solve each situation. <br /> <br />This project was developed solely by me, including all coding, modelling, level design, sound design and animation in under 4 months.",
                                    "A local news website built with the aim of encouraging young people living in Plymouth to engage with news stories happening in their local communities. All the contributors were aged between 16 and 25 with an active interest in journalism, and Generation Plymouth helped them get valuable journalism experience and develop their writing portfolio. I was asked by the founder to join the team to build and maintain the website using Wordpress and to design the logo. The project was a success and ran for over 2 years before the founder moved on to other projects.",
                                    "A social media prototype focusing on music, where users can share their favourite albums and artists. Users create a profile and then add albums, artists and tracks to lists linked to their profile. Users can search for other users and their lists and follow them for inspiration. The catalogue of music is supplied by Discogs - a crowdsourced database containing over 11.5 million music releases from 6 million artists, and brought into Soundshare using their API. Soundshare was developed using NodeJS and ReactJS along with MongoDB for user profile storage.<br /> <br />Soundshare is not hosted anywhere as it was a university project, but the source code can be found below.",
                                    "Consumerism is a resource management game designed to teach players about the manufacture prcess of cotton. The player runs a cotton manufacturing and distribution company and must try to balance costs, sustainability and ethical stance to keep their company going. The game was designed for a client who lectures at the business school at Plymouth University and wanted to update an old card game into a simple computer game for her students to use. The game was showcased at a sustainable earth conference in 2017 and is now being used as a teaching tool for Masters level business students. <br /> <br />The project was developed by a team of 3 in Unity, with my role being visual lead (UI design, graphics, animation, sound etc). ");

var wamContent = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XoaK9OZGMuI" allowfullscreen></iframe></div>`;
var empathyContent = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WfuPeMZp8ag" allowfullscreen></iframe></div>`;
var ipContent = `<p>Unfortunately this site is not available to the public as it is a University resource and still under development. Images and videos showcasing the project will be uploaded once the site goes live.</p>`;
var breakdownContent = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tPSTOdd0fR4" allowfullscreen></iframe></div>`;
var gpContent = `<a href="https://generationplymouth.com/">Generation Plymouth</a>`
var soundshareContent = `<a href="https://github.com/IsaacGillard/SOFT352Project">GitHub repo</a>`;
var consumerismContent = `A link to the sustainable earth conference webpage can be found <a href="https:www.plymouth.ac.uk/research/institutes/sustainable-earth/conferences/session2">here</a> <br /> <br /><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YrTm2hX7xw8" allowfullscreen></iframe></div>`;


var additionalContent = new Array(wamContent,empathyContent,ipContent,breakdownContent,gpContent,soundshareContent,consumerismContent);

$(document).ready(function() {

  $('.viewButton').click(function(){
      projectList.classList.add('d-none');
      project.classList.remove('d-none');
      PopulateProject(this.id);
  });

  $('.closeButton').click(function(){
      projectList.classList.remove('d-none');
      project.classList.add('d-none');
  });

});

function PopulateProject($id) {
  document.getElementById("projectTitle").innerHTML = projectTitles[($id - 1)];
  document.getElementById("projectDescription").innerHTML = projectDescriptions[($id - 1)];
  document.getElementById("extraContent").innerHTML = additionalContent[($id - 1)];
}
