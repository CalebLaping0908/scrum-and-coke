## March 7th, 2023

- Today I worked on adding a couple more features and playing around with a drag and drop library.

I changed the react-bootstrap column properties to only be as long as the contents inside of them. Before, when one column grew longer, they all grew longer. I was able to find a flex-column property that allowed for the desired change. Although, implementing this new property made the card components inside of the columns inconsitent in width. I was able to make them all the same width by setting a style property that sets the width to 100% directly onto the div tag that is wrapped around each card component. I also added a button on the task detail page that lets you delete a task. The functionality is working just as intended. I hid the sign up and log in buttons on the home page for users who are already logged in. I also got started on writing the documentation for our app.

The library that my teammate and I pulled in is called React Beautiful DND. We got a start on refactoring our code to make the task cards draggable components, and the status columns droppable components. It was a bit of a challenge to bring in a new library that has a syntax we haven't seen before, into our already complex code. I believe we made some progress and our instructor gave us confirmation that we're on the right track. Currently, we have our elements wrapped in droppable and draggable components, but are not able to see the draggable element inside of the droppable component yet. Tomorrow we are going to continue working on implementing drag and drop by debugging to see where things are going wrong.

## March 6th, 2023

- Today I worked on more beautification of our app as well as displaying the assignee's name on a task instead of the id value.

In our database, the assignee column on the tasks table holds the id value, since we needed a unique value for the foreign key. So when we were pulling the information from the tasks table to display each task, the id value was showing instead of the name. We solved this by pulling in and mapping over the users prop which contains all of the users, and filtering which user to show based on checking if the task assignee's id value matches the user's employee number value, since this is the field we used for our foreign key.

## March 4th, 2023

You know you chose the right field of work when you spend your whole Saturday working on a project simply because you’re excited and passionate about it.

I had **so** much fun with CSS today. I learned so many things you can do with CSS and watched it bring my application to life. I’ve been on my computer for 9 hours making our app more beautiful and I’m literally having to force myself to walk away, because I just want to keep going.

Today I added a gradient mesh background, made the background take up the whole screen no matter the size of the screen or how zoomed out you are, added the ability to click on the title of a task and it redirects you to the task detail page (which I created today as well), and I took away the ugly default link underline, and used css to add a hover effect where the text changes color so you know it’s a link. I also figured out how to override something with CSS using ‘!important’. I finally got rid of the unsightly box surrounding the board dropdown form. Yayyy! In addition, I spaced most elements apart in a way that looks really nice and made the font consistent. I’m so happy with the way our app currently looks.

## March 3rd, 2023

Today, Caleb and I worked through a frontend auth issue that was only happening on my branch, which I brought react-bootstrap into. For some reason, we weren’t able to put our logic to check if a user has a token inside the useeffect hook on my branch. It worked perfectly fine on the branches with no react-bootstrap components implemented. I will be doing some research to try and find a possible answer about why this situation could occur.

## March 2nd, 2023

- Today I worked on making each task on the board into a card component, adding some css styling, and finally getting finished functionality on our board detail page.

We accomplished this by returning a card component after mapping over and filtering through tasks, so that for each task that meets the criteria of the column, one card is rendered. On top of that, when selecting a new status from the dropdown on a task, it successfully sends a patch request to the database, and we call our getTasks function which is a request to get all the tasks, and the task moves over to the column that relates to its new status. It’s beaaaautiful. HUGE win! Todd and I spent hours and hours trying to get this feature implemented and it was a big challenge since it was unlike anything we’ve ever done before. It was great to attempt a new complex feature and actually get it working. I’m so excited.

I decided to use react-bootstrap for the first time to accomplish some of the styling I had in mind. We originally had an html table for the board detail view, which we refactored into columns and rows using react-bootstrap components. I refactored some of the other components as well to incorporate R-BS. We also added a bunch of styling with CSS- added a gradient background, shadows, custom font, etc. I’m really happy with the synergy within my team and all of us making progress in different areas of the project at the same time.

## March 1st, 2023

- Today Todd and I worked on trying to send a patch request to the database when choosing a new option in a select tag

Today was a rollercoaster of emotions. Todd and I had to get really creative to make progress on this unique feature. We were getting closer and closer but ended the day with the feature not fully functioning, which was such a bummer! We truly have put so much thought into this feature so far and my brain feels fried. Knowing how close we are to getting it functioning, I think it’s possible that we’ll have this feature fully functioning within the next few days.. I hope!

## February 28, 2023

- Today, Todd and I worked on creating the scrum board detail view

This is the most complex page of our whole app, and we've been faced with a few challenges. We want to have 5 columns which are the 5 statuses that a task can be. We want the task to show up in the same column as that tasks' status. We also want to be able to change the status of a task, and have it move to the column relating to the new selected status. We are able to get the information onto the page, but are still trying to figure out how to be able to move tasks from column to column. Tomorrow, we're going to try and use the useEffect react hook to help us accomplish this.

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
