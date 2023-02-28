## February 27, 2023

- Today I worked on finishing up the form to be able to create a task on the frontend, as well as created a foreign key on the tasks table to access 5 different possible statuses they could be

We created a status table in the database, which is a foreign key to the task table under "status". We figured out how to insert 5 preset values for the status table. We wanted to be able to keep track of the status of each task, which will be one of the 5 following options: Backlog, To Do, In progress, In review, and completed, which correlates with the columns on the page where you can see your board in detail.

To get this feature functioning, we had to create a StatusOut model, a get all method on the status repository, create a router for the statuses, and make a fetch call from our front end to get all of the statuses. Now, in our form to create a new task we have a select option which shows the 5 preset values, and you're able to select one of those for the task. The task is then saved to the database with the status property set to the value selected on the form.

Today was challenging in a great way. We really got to harness our problem solving skills to come up with a solution to get the outcome we wanted. We had to figure out how to have data already be hard-coded into our app, since we didn't want the values of statuses to come from user input. We ran a migration which directly inserted the values into the statuses table in our database. Today was a big success!!!

## February 23, 2023

- Today, Todd and I worked on finishing up backend authentication. After that, I worked on creating the frontend React components for creating a new board, and viewing a list of all boards.

Today was smooth sailing! Our backend authentication is working. A user can sign up, get a token, logout, and the token is deleted, and they can signin with valid credentials and get a token. I finished 2 frontend views today which I stated above.

## February 22, 2023

- Today, Todd and I worked on authentication. I started working on frontend.

We worked for awhile on backend authentication. It was pretty tough since we're using a new library and it was tough to tell what was going on. We were able to troubleshoot and debug and get our backend auth mostly functioning. After that, I started on one frontend React component, as well as made the main page.

## February 21, 2023

Today, my team and I worked on:

- Getting account authorization set up

We modified our existing user endpoints so we could add in authorization
functionality. We created an authenticator file, created a hidden variable for our signing key, and spent most of the day attempting to create a new user with the tokens now implemented. When we try to create a new user on Swagger UI, we get a 401 Unauthorized Error. We worked on debugging the code by using print statements but haven't been able to find an answer about why we're getting an error from this request.

I've heard from many people that implementing authentication with jwtdown is a real pain in the butt, and so far I have to agree! But I don't back down from a challenge, so I'm determined and excited to figure this out. I worked on debugging and researching some more on my own after class but still no luck. I have hope that tomorrow we will figure out a solution... **fingers crossed**. Plus, if we're getting the hardest part out of the way, we're gonna have a blast building the rest of our application!

## February 20, 2023

Today, I worked on:

- Creating the boards endpoint,
  and implementing fully functioning CRUD operations
  for it

I created the boards table in the database. Then I worked on
the post request to be able to create a new board, and tested it
with the Swagger UI that FastAPI provides. I then wrote a function
to get a list of all of the boards in the database, tested that, and so
on with the same process of building and testing.
The other functionality I added was being able to delete a board, to update
a board, and to view a specific board.

I realized today that I really like FastAPI so far and I love how **fast** it is! Haha.
It's been really nice to start getting experience with another framework
and has been rewarding to see the features succeed. I'm excited to keep building
our application.

## February 19, 2023

Today, I worked on:

- Finishing CRUD operations for the users endpoint

I learned a lot about FastAPI today. I also ran into some new errors which was
a good challenge to figure out by myself.

## February 17, 2023

Today, my team and I worked on:

- Getting the users endpoint started

My team and I worked on creating a post request to be able to
add a new user to the database. We created a users table in our database
to send the data from the post request to, and worked on getting
the router set up. We also used the connection pool to connect to
our database, and that was exciting.

To view our database and the tables inside, we got familiar with
Beekeeper, a new technology that seems great so far, and we were
really excited when we were able to visually see the tables that we
created.

## February 16, 2023

Today, my team and I worked on:

- Getting our database created and setting up our service,
  and getting our yaml file all ready to go

We worked on creating our database, which was our first time doing that,
so that was fun. We also discussed the overall design of our application
and how the different data will tie in with each other.
