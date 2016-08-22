/////////////////////////////
// 		 Trello
/////////////////////////////

https://trello.com/b/zOg3ctfH/mystrain


/////////////////////////////
//  	Wireframes
/////////////////////////////

https://github.com/Indigo253931/rapid-prototype/blob/master/client/public/styles/images/Strain_Pairing_Wireframe_Form.png

/////////////////////////////
// 		 About
/////////////////////////////

My Strain is a cannabis strain pairing guide. 
	A user can create, read, update and delete a strain pairing for personal reference and to share recccomendations with others. 
 
 	A user will also have the ability to enter a strain and/or an activity/symptom/, etc. 
	Results provided may be sorted based on:

		 a.) best match 

		 b). top reviews

		 c.) random shuffle triggered by a button click.
		  		The goal of this is to provide user with an interactive variety of choices. 

		Potential categories may include but are not limited to:
			 Activities: (e.g. dance, study) 
			 Conditions (e.g. insomnia, pain)
			 Symptoms: (e.g. headache, nausea)
			 Beverages (e.g. coffee, wine)
			 Food (e.g. recipies)
			 Music (e.g. genres, songs)
			 Films (e.g. genres, movies)
			 Games 


/////////////////////////////
//  	Workflow
/////////////////////////////

Create directories and files.

	Client directory for front-end

		Scripts directory
			app.js
			Controllers directory
				strainDirective.js
				strainController.js

		Styles directory
			style.css

		Templates directory
			strainIndex.html
			strainShow.html
			strainDirective.html
			
		index.html

	Server directory for back-end

		Controllers directory
			strainsController.js
		Models directory
			index.js
			strain.js
		Routes directory
			routes.js

	server.js


Install Bower for front-end dependencies 
	
	Use 'npm install -g bower'. 
	Bower enables local file installation. 
	
	Initialize with 'bower init' to generate bower.json file. 
	This will provide a way to share code without sending third-party libraries.

	Use'bower install --save angular' to pull down Angular.

	Link index.html to Angular with '<script type="text/javascript" src="bower_components/angular/angular.js"></script>' above app.js's script link

Use NPM to require Express:
	
	Initialize node in directory with 'npm init -y'.
	Install express with 'npm install --save express'.
	Package.json will track project associated dependencies and metadata.
	
	Add 'node_modules' to .gitignore file so it is not tracked by git.

Require Mongoose in server.js


Send two http requests to server
	Use ngResource

Use two client-side routes with associated templates and controllers
	Use ngRoute

Use Anguar's built in directives

Enable user to CRUD a strain reccomendation

Build API with JavaScript to handle requests

