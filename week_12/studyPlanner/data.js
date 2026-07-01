const students = [
    {
        id: 1,
        name: "John Doe",
        hasReminderContact: true,
        contactInfo: {
            email: "johndoe@example.com",
            phone: "555-0199"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        hasReminderContact: false,
        contactInfo: null
    }
];

const studyTasks = [
    {
        id: 101,
        title: "Read article on Asynchronous JavaScript",
        estimatedTimeInMinutes: 45
    },
    {
        id: 102,
        title: "Practice Arrow Functions exercises",
        estimatedTimeInMinutes: 30
    },
    {
        id: 103,
        title: "Build a small JavaScript mini-project",
        estimatedTimeInMinutes: 120
    }
];

export { students, studyTasks };