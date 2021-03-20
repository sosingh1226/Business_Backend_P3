# HuddleRoom

Welcome to HuddleRoom, a vertically-integrated application for self-service employee management. Administrators and employees alike can use this app to assign and view shifts, share messages, contact managers, and post announcements.

### Features:

- Secure user authentication for any login.
- Managerial and employee accounts have different permissions.
- Employee account sign-up with customizable validation.
- Managerial creation and deletion of employee accounts.
- Managerial creation of schedules and shifts.
- Non-volatile messaging system and announcements board.
- Desktop and Mobile-friendly layout.

### Future Features:

- Employees may assign their own availability through the app.
- Employee accounts may securely contain more information about their job position.
- Vacation/Time-off requests may be automated.
- Schedule generation may be automated.
- Updated UI as more functions and features are introduced.
- Color Themes

### Technologies

- React
- MongoDB
- Node.js

Developed by Alexis Arando, Jacky Tong, James Gilley, Soumya Singh, Victor Tran

# Team Expertise

- Jacky - Scrum master, organization
- Soumya - Back End / Any
- Alexis - Front/Back end
- Victor - Front End emphasis (server.js)
- James - Any, Backend emphasis

- TBD. May change this to timeoff request or something else (Employees)

ANNOUNCEMENTS

- Post annoucements(Manager only)
- Delete annoucements(Manager only)
- View annoucements (Manager + Employee)

# Starting The Project Locally

- `git clone` or `git pull` according to if you're starting your local from scratch or updating.
- In the base directory, run `npm install` (It is helpful to temporarily disable antivirus since some team members have encountered it blocking crucial package files from downloading.)
- `cd client/` and run `npm install` again in that sub-directory. There may be depreciation warnings but all dependencies are currently intact as of March 11, 2021.
- Run `npm run dev` to start the development client.
- Open `http://localhost:3000` in browser with console. Port 8080 is the "live" version and will not reflect changes yet.
