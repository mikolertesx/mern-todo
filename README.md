# TODO App
## Technologies
This project will be using the MERN stack, as it is one of the most common stacks for building Apps.

I'll be using a local database for testing, and using a real one after that.

As part of the learning experience I decided to add the most popular way to add CSS in React, that is, styled-components.

To manage the state of the App I'm using React-Redux as I really like the way it works with the project, although it could be easily replaced with the context api in React.

**Note**: due to the scope of the project, no Icon was added, but a change of a Icon is pretty simple to do. *wink*

## How to deploy
- Set up a free MongoDB account, as this specific project relies on it.

- Deploy the backend to a server like Heroku, and there, set the the variables MongoDB and Database to the specific ones you're using in your build, format is MongoDB="mongodb://urlWithoutDBName" and the Database name like this Database="ToDo", at the end add a SECRET, like ths SECRET="Your-Auth-Key" that will be the key that we will use to build the JWT Tokens.
```ini
  #.env example inside the backend folder
  SECRET = "JustMonika"
  # local path of mongo database
  MongoDB = "mongodb://127.0.0.1:27017"
  # name of the mongo db.
  Database = "ToDo"
  # port to run the app on (Will be replaced by whichever hosting service you use).
  PORT = 8081
```

- Next, you deploy the React app to a service that can handle that, and you add an environment variable to it like this: REACT_APP_SERVER="https://www.myserver.com", don't add a slash to the end, as the URL Composer does that for you.
```ini
  #.env.development example inside the frontend folder.
  REACT_APP_SERVER="http://localhost:8081"
  REACT_APP_ASFILE=0
```
```ini
  #.env.production example inside the frontend folder.
  REACT_APP_SERVER="your-legit-server.com"
  REACT_APP_ASFILE=1
```

- Since, we are using GitHub Pages I had to switch to a hashRouter, however, you can configure this to get cleaner URLS, or to get GitHub Pages compliant urls with: REACT_APP_ASFILE, set it to 1 if you want to use a HashRouter or to anything else if you want to use BrowserRouter.


## Issues
I took long to realize, but there's no way to set up *safely* environment variables inside of GitHub Pages, due to the scope of this project, I'm using an env file at build time and hoping for the best.

If you were to deploy something like this in a bigger scale, I suggest you might as well use a different service that can handle stuff like this, or maybe use next to serve it directly from the server.

Another issue that was annoying is that since GitHub serves only a static file, BrowserRouter doesn't work properly, to avoid that, I'll be using HashRouter.


## What I learned
- No matter how obvious it is, in React try to split your code as much as possible, I had to start from scratch due to how hard it was to properly mantain.

- HOC are an awesome thing, I used an Auth and a NotAuth HOC to tell the page what to render, or where to redirect.

- React Redux feels like a bit too much in the context where the only state is an Auth-Token.

- I could reuse the Register and Login page with some slight variations instead of taking two different pages for that.

- To avoid having to reduce the reusability of the components, you can use HOCs to provide the values that you are expecting to get.

- If React Redux was implemented differently, I could just add code for deletion inside each of the elements or the elements that maps it on a list.

## Demo
[Client](https://mikolertesx.github.io/mern-todo/#/), [Server](https://mikolertesx-simple-todos.herokuapp.com/)
