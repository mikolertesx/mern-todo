# TODO App
## Technologies
This project will be using the MERN stack, as it is one of the most common stacks for building Apps.
I'll be using a local database for testing, and using a real one after that.

As part of the learning experience I decided to add the most popular way to add CSS in React, that is, styled-components.

To manage the state of the App I'm using React-Redux as I really like the way it works with the project, although it could be easily replaced with the context api in React.

## How to use
- Set up a free MongoDB account, as this specific project relies on it.


- Deploy the backend to a server like Heroku, and there, set the the variables MongoDB and Database to the specific ones you're using in your build, format is MongoDB="mongodb://urlWithoutDBName" and the Database name like this Database="ToDo", at the end add a SECRET, that will be the key that we will use to build the JWT Tokens.


- Next, you deploy the React app to a service that can handle that, and you add an environment variable to it like this: REACT_APP_SERVER="https://www.myserver.com", don't add a slash to the end, as the URL Composer does that for you.


- Since, we are using GitHub Pages I had to switch to a hashRouter, however, you can configure this to get cleaner URLS, or to get GitHub Pages compliant urls with: REACT_APP_ASFILE, set it to 1 if you want to use a HashRouter or to anything else if you want to use BrowserRouter.


## Issues
I took long to realize, but there's no way to set up *safely* environment variables inside of GitHub Pages, due to the scope of this project, I'm using an env file at build time and hoping for the best.

If you were to deploy something like this in a bigger scale, I suggest you might as well use a different service that can handle stuff like this, or maybe use next to serve it directly from the server.

Another issue that was annoying is that since GitHub serves only a static file, BrowserRouter doesn't work properly, to avoid that, I'll be using HashRouter.
