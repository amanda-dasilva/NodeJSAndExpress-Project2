
##  Building a REST API with NODE and Express!
 
### Tasks:  

1. Follow this tutorial: [Building a REST API with NODE and Express](https://stackabuse.com/building-a-rest-api-with-node-and-express/).

2. Complete all back-end work in the back-end folder of this repository:

	a. Initially it will have full CRUD operations on an in-memory array of data.

	b. Later it will store its information in an SQLite database.

	c. Make sure to add a .gitignore file to exclude all node modules from git so that your Express module and all its dependencies do not get stored in git.

	d. Make sure to have a package.json file listing all required back-end node module requirements.

3. Complete all front-end work in the front-end folder of this repository:

	a. Make sure to have Bootstrap included to style the front-end.

### How to run this project:
To download this Node.js project with Express from GitHub and run it using Visual Studio Code (VSCode), follow these steps:

1. **Install Node.js and npm:**
   If you haven't already, you need to install Node.js and npm (Node Package Manager) on your computer. You can download them from the official website: [Node.js](https://nodejs.org/).

2. **Install Visual Studio Code:**
   If you don't have VSCode installed, you can download it from the official website: [Visual Studio Code](https://code.visualstudio.com/).

3. **Clone the GitHub Repository:**
   Open your terminal (command prompt or PowerShell on Windows, or Terminal on macOS/Linux) and navigate to the directory where you want to store the project. Then, use the `git clone` command to clone the repository:

   ```bash
   git clone git@github.com:amanda-dasilva/NodeJSAndExpress-Project2.git
   ```

4. **Open the Project in VSCode:**
   Navigate to the project folder in your terminal:

   ```bash
   cd <project-folder>
   ```

   Then, open the project in VSCode:

   ```bash
   code .
   ```

   This command will open VSCode with the project folder loaded.

5. **Install Dependencies:**
   In the VSCode terminal, make sure you are inside the project folder. Then, run the following command to install the project's dependencies specified in the `package.json` file:

   ```bash
   npm install
   ```

6. **Start the Express Application:**
   Once the dependencies are installed, you can start the Express application. Typically, the entry point for a Node.js/Express project is an `app.js` or `server.js` file. Look for this file in your project folder. Then, run:

   ```bash
   node app.js
   ```

   or

   ```bash
   node server.js
   ```

   This will start your Express application, and it should be accessible at `http://localhost:3000` by default.

7. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000`.

Now you should have this Node.js/Express project from GitHub running in VSCode.