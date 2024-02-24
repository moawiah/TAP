# File Management REST API

In this project, you will create a RESTful API using Node.js, Express.js, and various Node modules to manage files. 
The API will allow users to perform basic file operations like listing, creating, reading, updating, and deleting files.

The project aims to refresh/bridge any gaps for the following concepts:
- Node JS
- Express
- Error Handling
- File Modules
- Basic API Structure
- EJS 
- HTTP & Restful APIs

## Description 

The application will allow users to perform the following actions:

- List all files in the "data" directory on the homepage.
- Create a new file with a specified name and content.
- View the content of a specific file by clicking on its name.

## API Structure
You can use any type of an API structure that you may see fit, **BUT**, you always need to have good arguments of why did you choose this structure/pattern. 

Here is a suggested structure:

```markdown
- project-directory/
  - server.js
  - views/
    - index.ejs
    - create.ejs
    - detail.ejs
  - public/
    - styles.css
    - scripts.js
  - data/

```

## Instructions
- Set up your project directory structure as shown above.

- Initialize a Node.js project by running npm init and install the necessary dependencies using `npm install`

- Create the following EJS templates in the "views" directory:
    - `index.ejs` - For listing files.
    - `create.ejs` - For creating a new file.
    - `detail.ejs` - For viewing the content of a specific file.

- Create the following static files in the "public" directory:
    - `styles.css` - For styling the application.
    - `scripts.js` - For client-side scripting (if needed).

- Implement an `Express.js` server in `server.js`. Set up `routes` and `middleware` for the following:
    - Rendering the file listing page at the root URL (`/`).
    - Handling the file creation form at `/create`.
    - Handling requests to view the content of a specific file at `/files/:filename`.

- Use the `fs` module to interact with the "data" directory for file operations.

- Style your application using the `styles.css` file.

## Hints
- Use Express.js to route requests and render EJS templates.
- Use the body-parser middleware to handle form submissions.
- Handle errors for file operations and invalid routes.
- Implement client-side scripting in scripts.js (if necessary) for interactivity.  
- Data folder should contain random files like *file1.txt, file2.txt, and file3.txt*. 
    - They should contain various data like JSON & text
    - Your application will read, create, update, and delete files within this "data" folder based on user interactions.

> Notes:  
> Provide meaningful log messages throughout the application.  
> Make sure you understand the flow End2End


## Bonus Tasks
In case you finished all of the above before schedule, add one or some of the following features to the project
- **File Upload**: Users can upload files to the server.
- **File Retrieval**: Users can retrieve a list of uploaded files and download individual files.
- **File Search**: Implement a search functionality to allow users to search for files by name or metadata.
- **File Compression**: Provide an option for users to compress files before uploading or download compressed files.
- **File Encryption**: Implement file encryption for added security during storage and transmission.