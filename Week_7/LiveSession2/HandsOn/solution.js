const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
});

// Define Task model
const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  dueDate: DataTypes.DATE,
  isCompleted: DataTypes.BOOLEAN,
});

// Define associations
User.hasMany(Task);
Task.belongsTo(User);

// Synchronize the models with the database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database tables created.');

    // Create a user and a task
    User.create({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
    }).then((user) => {
      console.log('User created:', user.toJSON());

      Task.create({
        title: 'Complete project',
        description: 'Finish the coding exercise.',
        dueDate: new Date('2023-12-31'),
        isCompleted: false,
        UserId: user.id, // Associate the task with the user
      }).then((task) => {
        console.log('Task created:', task.toJSON());

        // Retrieve all tasks for the user
        user.getTasks().then((tasks) => {
          console.log('Tasks for user:', tasks.map((t) => t.toJSON()));

          // Update the task
          task.update({
            isCompleted: true,
          }).then((updatedTask) => {
            console.log('Updated task:', updatedTask.toJSON());

            // Find all completed tasks for the user
            user.getTasks({ where: { isCompleted: true } }).then((completedTasks) => {
              console.log('Completed tasks for user:', completedTasks.map((t) => t.toJSON()));

              // Delete the task
              task.destroy().then(() => {
                console.log('Task deleted.');

                // Find tasks due within a date range for the user
                user.getTasks({
                  where: {
                    dueDate: {
                      [Sequelize.Op.between]: [new Date(), new Date('2023-12-31')],
                    },
                  },
                }).then((dueTasks) => {
                  console.log('Tasks due within date range:', dueTasks.map((t) => t.toJSON()));

                  // You can continue implementing and testing other functions and queries here.
                });
              });
            });
          });
        });
      });
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
