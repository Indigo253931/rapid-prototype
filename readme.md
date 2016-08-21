/////////////////////////////
// 		 Trello
/////////////////////////////

https://trello.com/b/zOg3ctfH/mystrain


/////////////////////////////
//  	Wireframes
/////////////////////////////


/////////////////////////////
// 		 About
/////////////////////////////

My Strain is a cannabis strain pairing guide. 

	Results provided may be sorted based on best pairing, or randomly shuffled to provide a variety of choices for the user. 

		Categories and their subcategories include but are not limited to the following:
		 Activities: (studying, surfing, meditation, etc.) 
		 Conditions (insomnia, cancer, etc.)
		 Symptoms: (headache, nausea, etc.)
		 Beverages (coffee, beer, wine, etc.)
		 Food (recipies, ingredients, etc.)
		 Music (genres, songs, albums, etc.)
		 Films (genres, movies, episodes)
		 Games


 Additionally, users are enabled to create, read, update and delete a strain pairing reccomendation.


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

