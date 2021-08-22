# Getting Started

This project was created for an exam for a company. It's a basic full stack app
which shows movies. You can filter records and import a csv file. You can also
delete all records from the database.

I chose Node and Express since I wanted to use the same language in the frontend
and the backend. I also used MongoDB because it is a rather simple project with
only one table. Of course, if I had to store genres, actors and directors in
separate tables, I would have chosen PostgreSQL.

I'm comfortable with Node and Express: it's a minimalist combo that takes care
of essentials aspects of any backend like creating endpoints easily. The
features of the backend are simplistic and the most complicated feature is
probably enabling CORS.

# Limitations

There are no limitations for a basic backend like this one. Express communicates
with MongoDB and the frontend gets access to the endpoints.

# Available Scripts

You will need the companion frontend to make this project work. In the project
directory, you can run:

## `yarn dev`

Runs the app in the development mode using Nodemon for hot reloading.
Open [http://localhost:3100](http://localhost:3100) to view it in the browser.

## `yarn start`

Runs the app for production using Node.
