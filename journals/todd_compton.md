## Todd Compton's Journal

## Mar 10, 2023

Today I worked on:
Deploying final changes and presenting our fantastic work to the instructional team.
Today's realization is that I am really going to miss working with this team of talented engineers.

## Mar 09, 2023

Today I worked on:
The entire team focused on deployment until lunch. Alex was a fantastic help today and we are very relieved to have achieved a deployed front and back end. In the afternoon, Liz and I pair programmed some additional functionality so that after creating or editing a task, the user is directed back to the board they were working on. Additionally, we changed the functionality of the board detail page so that the board selection drop down is no longer present on the page and instead created hyperlinks to the board detail pages from the boards list page.
Today's aha is that I am really enjoying React and feel more and more confident that I know how to implement the functionality in at least one way for every change we feel like making.

## Mar 08, 2023

Today I worked on:
Figuring out how to populate the update task form with the current task data whilst allowing user input to overwrite it.
Today's learning opportunity was that if you want the form to populate with the current data before rendering the form, you must await the fetch.

## Mar 07, 2023

Today I worked on:
A brief review of deployment with the team to see if any glaring errors jumped out and implementing delete a task to ensure we have full CRUD on our app. Liz and I also decided to begin tackling Atlassian's react-beautiful-dnd, but have hit a frustrating dead-end where tasks will no longer render on the screen after applying DragDropContext, Draggable and Droppable tags.
Today's aha is that if it were easy, everyone would be doing this.

## Mar 06, 2023

Today I worked on:
With the limited time due to the practice exam in the schedule, additional styling was applied and we changed task assignee on the cards to display the users full name rather than the employee number. This was accomplished by pulling in users, mapping through them and filtering to display where user.employee number = task.assignee and then displaying user.full_name.
Today's aha was that I love using React and find it very intuitive to simply pull in the data needed and display what is desired, but with all of the data now being passed down from App.js, I do wonder when the appropriate time to use Redux would be?

## Mar 05, 2023

Today I worked on:
Watching React Drag and Drop tutorial.

## Mar 03, 2023

Today I worked on:
Writing unit test for users and styling the app.
Today's aha was that a unit test to create a user would be exceedingly difficult with the Authenticator.py and hashed_password returns since predicting what the returned hashed_password would be is nearly impossible, as it should be.

## Mar 02, 2023

Today I worked on:
Pair coding with Liz and sharing some of the CSS tricks I employed on my project Alpha during the stretch goal week. We now have an attractive gradient background and a card component for each task with bootstrap applied.
Today's aha moment was realizing just how much fun styling is once you have struggled through some functionality. This instant gratification of applying some styling changes is a welcome change to the struggle of simply attempting to update the status of a task!

## Mar 01, 2023

Today I worked on:
Woohoo! Fixing the patch request, by passing id and status to the update task function from the on status change function and simply calling the JSON for the patch JSON.stringify({ status: status }) and finally calling getTasks after if the patch response is successful so that tasks immediately update on the DOM. Finally! What a relief to know that we now have a functioning app for our final project.

## Feb 28, 2023

Today I worked on:
The board detail page with the idea of 5 nested tables in a main table with all tasks mapped in each, but filtered by task.status for each of the 5 statuses we have selected for our scrum/Kanban board. It was a long day with a lot of code generated, but unfortunately the patch request simply is not yet working.
To be certain, it is frustrating to conceive an idea (nested tables) and struggle to implement it, but I am confident in the logic and believe Liz and I will fight through the details.

## Feb 27, 2023

Today I worked on:
Further ideation and actual code for the scrum board detail page. Also, participated in mob programming the task creation form due the extra complexity of foreign keys for users, boards and status.
A big aha moment was creating and defining a status table with all values populated directly from the migration where it was created since these should be constants which are only referenced, but never modified.

## Feb 25, 2023

Today I worked on:
Ideation and pseudo code for the scrum board detail page. Filtered nested tables all on the front end with a drop down board selector is currently my best design.

## Feb 24, 2023

Today I worked on:
Merging the Boards functionality with the Users functionality I have been working on. Encountered major GitLab merge issues with a "divergent" branch. Fortunately, due to our team's habit of pushing and merging to main when we have functional code, I was able to simply clone the repository into a new directory with little progress lost. We also met as a team to review concepts for the scrum board detail view page and decided that cards for each of the columns similar to Trello is a visually appealing way to proceed.

## Feb 23, 2023

Today I worked on:
Confirming all functionality of authentication functioning except Update a user and login restricted endpoints. Completed UsersList.js with a built-in Delete User function and tied the front end to the back end. Finally played around with some CSS background animations thanks to Donald's link. Fun day!

## Feb 22, 2023

Today I worked on:
JWTdown for FastAPI continues to be a struggle. While awaiting assistance, created a signup form for new users. Finally, with help from Alex, Liz and I were able to solve our authentication struggles. ...UserToken instead of Token! ...also created Nav.js and UsersList.js

## Feb 21, 2023

Today I worked on:
Group coding the JWTdown for FastAPI from start to finish with the entire team. Still no success in overcoming this blocker, so we reached out to HMU and SEIRs.

## Feb 18, 2023

Today I worked on:
Re-watching the D4:Backend Authentication video describing the use of JWTdown for FastAPI and attempting to implement for "users".

## Feb 17, 2023

Today I worked on:
Implementing the remaining endpoints for Users including Create User, Get Users, Get User and Delete User. The code refactoring in the videos was especially eye-opening, but I am left confused regarding the proper way to implement error codes. Is code manipulation using response.status_code appropriate, or should raiseHTTPException be used? I will either ask in class or post on help-me-understand.

## Feb 16, 2023

Today I worked on:
Skeleton code setup and Users FastAPI as a team coding exercise. We decided that we should all program the FastAPI MVP level services independently to gain traction and cement our understanding of FastAPI before heading into the wild with stretch goals. We will select one individual's code to merge.

## Feb 15, 2023

Today I worked on:
Project organization, DB decision (postgres) and skeleton code creation as a team. We struggled to resolve "port already in use" issues with several team members who installed pgAdmin on their machines.

## Feb 14, 2023

Today I worked on:
Project organization as a team and issue creation in Git.
Milestone creation was a familiar and reassuring option to see. Now if our MVP target needs to slide, we can update the milestone, rather than each individual task's due date.
