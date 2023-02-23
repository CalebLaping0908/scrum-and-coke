## February 20, 2023

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
