# Required Features:

1. Login and logout.
1.1 Upon page load, a prompt should appear to ask for the users name and save it as a logged in user
1.2 Users should be able to log out.  A prompt would then pop up again for the user to be able to log back in.
2. Display of all of the Doctor's appointments (Date, Time, Patient Name, Complain) with Search feature (patient name and complaint).<br>
2.1 The appointments are arranged from oldest to newest.<br>
2.2 Only the appointments for the current and future will be displayed.  (Maybe for Search let them show past?  switch the filter?  Or add?)<br>
2.3 The logged in user can see all the appointments, but he/she can only delete his/her own appointment.
3. Users can add future-dated appointments, but the doctor is limited to accept only 3 appointments per day. <br>
3.1 A specific user can only have 1 appointment scheduled per day (validation should appear when creating/setting up an appointment).<br>
3.2 Complaint should be at least 10 characters (validation)<br>
3.3 Schedules should only be between 8:00am-5:00pm {pop-up options}<br>
3.4 if there are already 3 appointments for a particular date, no one can add an appointment for that data.  (validation)
4. User is automatically redirected to the Dashboard after successfully adding a new appointment. The new record should be appended on the table.
5. The user can only cancel at least 1 day before the appointment schedule.
6. Updating of added/deleted appointments on the dashboard after refreshing the page.
7. You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.

# Note:

The wireframe is available for download here.
Create a 2-3 video showing what you have built. On the video, show the functionality of the page you have built. You may download a trial version of Jing or Snag-it or Quicktime for video creation. You may save it on Dropbox public folder and  copy the public link.
To prevent other students from copying your work, please make sure your video demo is set to unlisted or with a password, and code is not saved on GitHub.
To minimize score deduction, please make sure you upload the complete requirements (database file, video demo).
If you are having trouble uploading files on the Exam App, please DO NOT unlock another exam. Please email the file to remote-instructors@codingdojo.com and CC your instructor.

# Design

## Partials
* Login prompt  DRAFT
* Dashboard   Need to strip out the time and date
* New appointment<br>
    calendar picker?<br>
    need area for error messages

## Client controllers
* users_controller ALL DONE<br>
** login<br>
** logout<br>
** getUser<br>

* dashboard_controller DRAFT<br>
** index DONE<br>
** cancel/remove  DONE<br>

* appointment_controller DRAFT<br>
** new_appointment  DRAFT<br>
    Merge date and time fields


## Client factories
* user_factory  DONE<br>
** new_user <br>
* appointment_factory  STARTED<br>
** index   DONE <br>
** new_appointment DONE<br>
** cancel_appointment DONE<br>

## Server routes & controllers
* POST users login  DONE
* GET appointments index  DONE
* POST new appointment  (lots of validations)
* GET remove appointment  

## Models
* User  DONE<br>
** unique<br>
** required<br>
** create date<br>

* Appointment  STARTED, NEEDS Date work <br>
** Date/Time must be unique (would be nice to only show available times)<br>
** Patient Name DONE<br>
** Complaint DONE<br>
