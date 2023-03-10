# 3/10/2023

Dear Diary,

Time to write my Unit Test! I was so wrapped up in deployment, that I had totally forgotten. I really learned a lot from this project but only a subset of our project. As a group, we're going to review the entire project
and what everyone worked on so we could learn what parts we didn't directly work on. That way, if it's reference code we use in the future, we have a better idea of what we're doing and we can reference it.
Overall, the last mod went by REALLY fast and I can't believe it's already been 6 weeks!

# 3/9/2023

Dear Diary,

Finally were able to deploy! It ended up being a Uvicorn port issue that no one was able to catch until Alex noticed it. We were pretty exhausted with our options, but we knew that it was an authorization error since we
had a working backend and we were able to see our front-end, but the page wasn't loading and there were just failed to fetch errors. Once we are able to render the information, all of the pieces would fall in place and we'd
be looking good. The amount of time it took deployment to work was extraordinary and there are so many moving pieces. I am sadly interested in Dev Ops now so maybe this is a good career path since I like torturing myself?
My team did a really great job. We just need to fix a few errors and we'll be all set and ready to submit! Tomorrow is the day!

# 3/8/2023

Dear Diary,
Worked all day on deployment with Caleb. Sought help from SEIRs but they weren't able to figure it out. I pinged the instructors and Paul and Rosheen both jumped in to help but it was mostly Part 3 that they helped with.
We were able to successfully setup our database and link it but we're still having trouble with deploying. I'm not sure where we need to go with deployment from here. Probably going to have to list it as a blocker.
Rosheen stayed like almost 2 hours after class with us and that was really helpful. Hopefully they give some time in future cohorts to deployment because everyone seems to be having a load of trouble with that.
I don't think Rosheen has really worked with deployment but she's been a software engineer for years, so it's nice to know that the problems we're having won't really be something we'll have to deal with at the entry-level.

# 3/7/2023

Dear Diary,
Today was the first full day on deployment. I tried to redo Part 1 to see if I messed anything up, but the domain IP that Rosheen supplied was already in use (but us obviously), but it made it difficult to retrace my steps.
I tried to deploy with the Captain-Definition file. I've tried so many combinations, but it can't find my Captain-Definition file anywhere and I'm not sure why.
I've also pushed my deployment to my own deployment branch but I'm not sure if it's trying to deploy my remote feature branch or if it's still going through Main.
Regardless, I can't find out how to get it to read the file and the error that I'm receiving isn't helpful at all. Pretty stumped at the moment.

# 3/6/2023

Dear Diary,

Today was the exam and it was a slower day. The exam took a while and was much more difficult than I had anticipated. And there were no coding problems?!?! Weird.
I spent most of the day reinstalling programs on my computer like Docker, Beekeeper, Slack, Chrome. Taking longer than I had hoped but my computer is running much smoother.
No more crashes so we're looking good!

# 3/3/2023

Dear Diary,

Today, I tried to get my deployment fixed. I am working on the NPM install issue. Unfortunately, there have been quite a few troubles with getting the installation down and deployment has been tricky.
I am working on getting the app to actually launch and this is defintely going to be an issue. I really thought that deployment wouldn't be this bad. But hopefully I can figure out this npm problem.
Update, I have blue screened by computer. I got a really weird error when installing one of the programs and it had frozen my computer a few days ago. It looks like this is causing issues because I am blue screening and I'm not sure why.
Ended up having to reformat my computer and give it a fresh life. Going to be really careful with what I install from now on. Hopefully the reformat fixes the problem.

# 3/2/2023

Dear Diary,

Worked on the board detail view as a group. Closed out a few of the issues. Todd was able to get the board list view working and the ability
to move tasks based on their status from a dropdown! He's the best. Now we just need to push and make some small tweaks.
Liz has a lot of ideas about the CSS and wanting to make this look super cool. I'll let her cook on that because I trust her sense of taste more than my own.

# 3/1/2023

Dear Diary,

Worked on deployment. Had to install a bunch of programs for deployment and I had my 1:1, so that took a few hours.
Also, the deployment took longer because there were a few instructions missing on how to do the actual deployment.
Stayed after class with Liz to talk about some CSS ideas. She's a riot!

# 2/27/2023

Dear Diary,

Spent a MARATHON session of 15 hours today working on the task list view. Todd, Liz, and myself created a table named "status" and linked
that as a foreign key to status so we can pull the status of a task. We hard coded the status table, so we just need to reference that.
Got it all working 3 minutes before zoom shut down for the night. Glorious!

# 2/26/2023

Dear Diary,

Worked a few hours today, Sunday, on creating a Task View. I am having trouble with the React not using the "map" function correctly.
I know what it's asking but I'm not pulling data. It can't map over undefined which means that we have no data.
But I clearly see my data from the endpoint. Not sure. I'll have to ask for help from the group tomorrow.

# 2/24/2023

Dear Diary,

Worked on creating a task list view and detail view.
This is not going as smoothly as I had hoped.
This board detail page is going to require tasks to work. Hopefully, we can query the databases correctly.

# 2/23/2023

Dear Diary,

Created a Users and Boards database.
Used Foreign Keys (assignee and task) to link those databases to Users.
Caleb showed me how to go over migrations manually after class. We have to manually perform our own migrations step by step and I understand how it works now!
I like Sql and I also don't like Sql.
But going forward, using that over Mongo should help us in the future?
Who knows?!

# 2/17/2023

Dear Diary,

Worked on getting our endpoints setup via FastAPI. We added the routes to the routers to make sure they were accessible.

# 2/16/2023

Dear Diary,

Worked on creating our databases and getting our service setup.
We also went over the design with Excalidraw and made sure we all had the same vision for the project.
