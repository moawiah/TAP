# Deploy your applicatoin

There are several ways you can deploy your applications. Most of them are acceptable as far as you know what you are doing. 

Cloud examples for deployment could be:
- [Github Pages](https://pages.github.com/): You can directly deploy your repo using a github feature.
- [Render](https://dashboard.render.com/): You can upload your repo directly with some click and a quick configuration. You can also wrap your app into a docker and upload it to Render.
- [Clever Cloud](https://console.clever-cloud.com/): Another cloud option for deploying app and database data.
- [Free SQL Database](https://www.freesqldatabase.com/): An option to host sql databases.
- [Heroku](https://www.heroku.com/): A common platform to host, mange, and scale your applications.

There are also many other options, like the famous AWS, Azure, and Google Firebase.

## Suggested Approach

We will discuss here a simple hybrid approach that uses two of the above mentioned paltforms. It uses basic (free of charge) packages for the sake of deploying educational apps. We will deploy our **app** using Render and **data** using Clever Cloud.

### Deploy your app
You can use Render for a relatively quick deployment procedure. It needs some simple configuration and a couple of clicks. We are attaching a video that assists you with the steps.

[Render Deployment Steps](https://www.youtube.com/watch?v=bnCOyGaSe84&list=PLltvzQrCl_iQPgzpYQLbW0B3P0gSXN-o2&index=7)

> Make sure you do not have a browser pop up blocker for render apps.


### Deploy your DB data
You can upload your MySQL data from a local workbench to Clever Cloud and continue using your JavaScript code as usual. Here's a general guide on how you can achieve this:

- **Export MySQL Data**: Use your MySQL workbench to export the data you want to migrate. You can use tools like `mysqldump` or export features from the workbench itself to create a SQL dump file.
- **Prepare the SQL Dump**: Make sure the SQL dump file contains all the necessary data, including table structures and data.
- **Create a Database on Clever Cloud**: Log in to your Clever Cloud account and create a new MySQL database. Take note of the database connection details provided by Clever Cloud.
- **Import Data to Clever Cloud Database**: Use tools like `mysql` command-line client or other MySQL database management tools to import the SQL dump file into your Clever Cloud database.
    ```
    SOURCE <dump_file.sql>
    ```
- **Update Connection Configuration in Your JS Code**: Update the connection configuration in your JavaScript code to use the Clever Cloud database credentials. This typically involves changing the host, username, password, and database name in your connection string or configuration file.
    ```javascript
    const connection = mysql.createConnection({
    host: '<clever_cloud_host>',
    user: '<clever_cloud_username>',
    password: '<clever_cloud_password>',
    database: '<clever_cloud_database>',
    });

    ```
- **Deploy Your Application**: _As we did in the deploy your app part_ or Deploy your JavaScript application to Clever Cloud. This may involve pushing your code to a Git repository linked to Clever Cloud or using their deployment mechanisms.

- **Update DNS and Environment Variables**: If your application relies on a domain name or specific environment variables, make sure to update them accordingly on Clever Cloud.

- **Monitor and Troubleshoot**: Monitor your application on Clever Cloud and address any issues that may arise during or after the migration. Check logs and error messages for potential problems.

Kindly find this video that gives a general overview on Clever Cloud Deployment: [Clever Cloud Data Migration](https://www.youtube.com/watch?v=cjkksEmH9Ig&list=PLltvzQrCl_iQPgzpYQLbW0B3P0gSXN-o2&index=8&t=3s)

> Prerequisite: You need a previous knowledge in git and a clear repo for your project in github.

> Deployment Options: You do not have to use this deployment suggetion - If you are aware of other options, just go ahead!