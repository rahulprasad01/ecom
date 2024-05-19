<frontmatter>
  title: Topic 1
  pageNav: 4
  pageNavTitle: "Topics"
</frontmatter>

<br>

# Setting Up the Existing Project

## Prerequisite Knowledge

Before setting up the project, ensure you have knowledge of Node.js and React.

### Installing Node.js

1. **Download and Install Node.js**:
   - Visit [nodejs.org](https://nodejs.org) to download and install Node.js.
2. **Verify Installation**:
   - Open your terminal and check the installed versions of Node.js and npm:
     ```
     node -v
     npm -v
     ```

### Using Visual Studio Code (VSCode)

- **Preferred Editor**: Visual Studio Code (VSCode)
- **Recommended Extensions**:
  1. ES7+ for modern JavaScript syntax support.
  2. Auto Close Tag for automatically closing HTML tags.
  3. ESLint for linting JavaScript code.
  4. HTML to JSX for converting HTML to JSX syntax.

## MongoDB Setup

Follow these steps to set up MongoDB for your project:

1. **Download MongoDB Compass**:

   - Download MongoDB Compass for your operating system from the official MongoDB website.
   - Sign up or log in to MongoDB Atlas.

2. **Create a New Shared Cluster**:

   - After logging in, create a new shared cluster and name it accordingly.

3. **Create a New Database**:

   - Within the cluster, create a new database for your project.

4. **Configure Database Access**:

   - Navigate to "Database Access" under "Security" and create a new user with appropriate permissions.

5. **Whitelist IP Address**:

   - Go to "Network Access" and whitelist your IP address (e.g., 0.0.0.0) to allow access from your machine.

6. **Connect to the Database**:

   - Click on "Connect" and choose "Connect with MongoDB Compass".
   - Copy the connection string and add it to your project's .env file, replacing username and password placeholders.

7. **Establish Connection with MongoDB Compass**:

   - Open MongoDB Compass, paste the connection string, and establish a connection to your cluster.

# Downloading and Using a MERN App from GitHub

To download and use the MERN (MongoDB, Express.js, React.js, Node.js) app from GitHub, follow these general steps:

## 1. Clone the Repository

- Go to the GitHub repository of the MERN app.
- Click on the "Code" button and copy the URL of the repository.
- Open your terminal or command prompt.
- Use the \`git clone\` command followed by the repository URL to clone the repository to your local machine.
  \`\`\`
  git clone <repository_url>
  \`\`\`
- Navigate into the cloned directory.

## 2. Install Dependencies

- Navigate into the backend directory (where \`package.json\` file for the backend is located).
- Run \`npm install\` to install backend dependencies.
- Navigate into the frontend directory (where \`package.json\` file for the frontend is located).
- Run \`npm install\` to install frontend dependencies.

## 3. Set Up Environment Variables

- Check if there are any environment variables required for the app (e.g., database connection URI).
- Create a \`.env\` file in the backend directory and set the required environment variables.

## 4. Running the Application

- Open your web browser.
- Navigate to \`http://localhost:3000\` to access the application.
- Use \`npm run dev\` to run the app, which starts the development server.

<box type="tip" class="bg-info text-dark">
    
**Enhance Your Knowledge: Explore React and Node.js!**
Are you eager to expand your skills in React? Delve into the official [React documentation](https://react.dev/learn) for comprehensive learning resources.

Looking to deepen your understanding of Node.js? Begin your journey with the insightful [Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) guide.

</box>
