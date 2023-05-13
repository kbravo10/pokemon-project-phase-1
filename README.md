# POKEMON IN THE REAL

This project is to show my skills to the date that i have learned.
Pokemon in the real displays a few pokemon and shows what they are based on.
The user can also add there own pokemon if they have the information.

## Project requirement

- Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

- Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

- Use at least 2 distinct event listenersLinks to an external site. (2 events of different types) that enable interactivity. What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

- Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## Start Server

All of the data(object) is stored in the json file `db.json()`. You can access JSON server by running `json-server --watch db.json`
The resource where you can find the json data is located at `http://localhost:3000/Pokemon`
After running the json server open up `index.html` in another terminal. A new window in your browser will pop up and will display your HTML code. 

