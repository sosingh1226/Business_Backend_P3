# Business_Backend_P3

Building a self-contained application that acts as a managerial backend.
WHERE:
There is User authentication for any login
Managerial
Managers may create or delete employee accounts
Managers may create schedules
Schedules consists only of Day of Week and a Shift (Currently only 9am-5pm per day)

WHERE:
Employee tables have NAME, DAYS OF AVAILABILITY, POSITION, and EMPLOYEE ID NUMBER
[FUTURE DEV] Employee accounts are also authenticated
[FUTURE DEV] Employees may change their DAYS OF AVAILABILITY and POSITION

Developed by Alexis Arando, Jacky Tong, James GIlley, Soumya Singh, Vicctor Tran

# Team Expertise

- Jacky - Scrum master, organization
- Soumya - Back End / Any
- Alexis - Front/Back end
- Victor - Front End emphasis (server.js)
- James - Any, Backend emphasis

# Project To-Dos

SCHEDULE PAGE

- Incorporate a weekly planner where user can add notes or add which person will work a specific day (Manager only)
- Incorporate a calendar to see schedule (Manager + Employee)
- Submit schedule request to manager (Employee)

EMPLOYEE PROFILE

- Shows a list of employees with personal information (Manager Only)
- Allow Sorting/Filter Option (Manager only)
- CLOCK IN/OUT
- TBD. May change this to timeoff request or something else (Employees)

ANNOUNCEMENTS

- Post annoucements(Manager only)
- Delete annoucements(Manager only)
- View annoucements (Manager + Employee)

# STARTING PROJECT LOCALLY

- `git clone` or `git pull` according to if you're starting your local from scratch or updating.
- In the base directory, run `npm install` (It is helpful to temporarily disable antivirus since some team members have encountered it blocking crucial package files from downloading.)
- `cd client/` and run `npm install` again in that sub-directory. There may be depreciation warnings but all dependencies are currently intact as of March 11, 2021.
- Run `npm run dev` to start the development client.
- Open `http://localhost:3000` in browser with console. Port 8080 is the "live" version and will not reflect changes yet.

# Technologies

- React
- Node.JS
- MongoDB
