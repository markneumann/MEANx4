# Required Features:

1. Login and logout.<br>
1.1 Upon page load, a prompt should appear to ask for the users name and save it as a logged in user  <b>DONE</b><br>
1.2 Users should be able to log out.  A prompt would then pop up again for the user to be able to log back in. <b>DONE</b>
2. Display of all of the Doctor's appointments (Date, Time, Patient Name, Complain) with Search feature (patient name and complaint).<b>DONE</b><br>
2.1 The appointments are arranged from oldest to newest. <b> Added mongo Sort call on the find, which I used before ADDED v4</b><br>
2.2 Only the appointments for the current and future will be displayed.  (Maybe for Search let them show past?  switch the filter?  Or add?)
<b>added $gte Date.now filter to the Find ADDED v4</b><br>
2.3 The logged in user can see all the appointments, but he/she can only delete his/her own appointment. dashboard_controller <b>DONE</b>
3. Users can add future-dated appointments, but the doctor is limited to accept only 3 appointments per day.
<b>Would use the mongo count function to first test that all records for a date are less than 3, then provide error</b><br>
3.1 A specific user can only have 1 appointment scheduled per day (validation should appear when creating/setting up an appointment).
<b>Likewise use the mongo count function when finding for a user and the date <1 </b><br>
3.2 Complaint should be at least 10 characters (validation) <b>DONE</b><br>
3.3 Schedules should only be between 8:00am-5:00pm {pop-up options}
<b>because I used that angular combo tool for date and time, I need to further explore how to limit the options OR find another tool.</b><br>
4. User is automatically redirected to the Dashboard after successfully adding a new appointment. The new record should be appended on the table.  <b>DONE</b>
5. The user can only cancel at least 1 day before the appointment schedule. <b>Would add this additional date test on the client controlling the appearance of the cancel button</b>
6. Updating of added/deleted appointments on the dashboard after refreshing the page. <b>DONE</b>
7. You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored. <b>DONE</b>

# Note:

The wireframe is available for download here.
Create a 2-3 video showing what you have built. On the video, show the functionality of the page you have built. You may download a trial version of Jing or Snag-it or Quicktime for video creation. You may save it on Dropbox public folder and  copy the public link.
To prevent other students from copying your work, please make sure your video demo is set to unlisted or with a password, and code is not saved on GitHub.
To minimize score deduction, please make sure you upload the complete requirements (database file, video demo).
If you are having trouble uploading files on the Exam App, please DO NOT unlock another exam. Please email the file to remote-instructors@codingdojo.com and CC your instructor.

# Design

## Partials
* Login prompt  DONE
* Dashboard   Need to strip out the time and date
* New appointment <b>DRAFT</b><br>
    calendar picker?<br>
    need area for error messages

## Client controllers
* users_controller ALL <b>DONE</b><br>
** login<br>
** logout<br>
** getUser<br>

* dashboard_controller DRAFT<br>
** index <b>DONE</b><br>
** cancel/remove  <b>DONE</b><br>

* appointment_controller DRAFT<br>
** new_appointment  DONE<br>
    Merge date and time fields <DONE>


## Client factories
* user_factory  <b>DONE</b><br>
** new_user <br>
* appointment_factory  <b>DONE</b><br>
** index   <b>DONE</b> <br>
** new_appointment <b>DONE</b><br>
** cancel_appointment <b>DONE</b><br>

## Server routes & controllers
* POST users login  <b>DONE</b>
* GET appointments index  <b>DONE</b>
* POST new appointment  (lots of validations) <b>DRAFT, needs validations</b>
* GET remove appointment <b>DONE</b>

## Models
* User  <b>DONE</b><br>
** unique<br>
** required<br>
** create date<br>

* Appointment  STARTED, NEEDS Date work <br>
** Date/Time must be unique (would be nice to only show available times)<br>
** Patient Name <b>DONE</b><br>
** Complaint <b>DONE</b><br>
