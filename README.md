# Event Page Creator - Frontend / Client

This is the frontend for a simple proof-of-concept event page creator. It is designed to let you build events with:

- Hosts
- Honorees
- Panels & Panelists
- Sponsors of different levels

For the server / backend of this application, see [joedietrich-dev/event-pages-server](https://github.com/joedietrich-dev/event-pages-server).

## Inspiration

I was inspired to build this when I was tasked with repeatedly hand-coding landing pages in simple html. This was inefficient in terms of time spent and meant I was the only person around able to maintain the pages or make any changes. I set out to create a proof-of-concept / MVP event page builder. It has nearly all the entities I need to build those hand-coded pages.

Since this was a proof-of-concept, the design of the app itself could be improved. It also lacks much validation on the front or back end, and has no authentication. All of these would need to be implemented before using this in any sort of production application.

## Libraries/Tools Used (Frontend)

- [React](https://reactjs.org/) / [Create React App](https://create-react-app.dev/)
- [React Router v6](https://reactrouter.com/) - For client-side routing
- [MUI](https://mui.com/) - A UI component library
- [MUI Icons](https://mui.com/components/material-icons/) - For iconography

## Getting Started

1. Clone and set up the [backend](https://github.com/joedietrich-dev/event-pages-server) of the application
2. Clone this repository and install its dependencies
3. Create a .env file in the root directory of this repository
4. Add `REACT_APP_API_ROOT=http://localhost:9292` to the newly created file  
   _`localhost:9292` is the default host and port for the server when running locally - you may need to adjust based on your environment_
5. Run the application in the development configuration by running the `npm start` command
