export const boardData = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Database Setup",
                    description: "Firebase Integration",
                    assignedTo: "John Doe",
                    dueDate: new Date(2024, 7, 20),
                    files: [],
                },
                {
                    id: 2,
                    title: "Data Flow",
                    description: "Setup Diagram with other developers",
                    assignedTo: "Jane Smith",
                    dueDate: new Date(2024, 7, 25),
                    files: [],
                },
            ],
        },
        {
            id: 2,
            title: "TODO",
            cards: [
                {
                    id: 9,
                    title: "Data Table Page",
                    description: "Server side Pagination",
                    assignedTo: "Adam Brown",
                    dueDate: new Date(2024, 7, 30),
                    files: [],
                },
            ],
        },
        {
            id: 3,
            title: "Doing",
            cards: [
                {
                    id: 10,
                    title: "Full Calendar Extension",
                    description: "Make new events and store in global states",
                    assignedTo: "Michael Brown",
                    dueDate: new Date(2024, 7, 15),
                    files: [],
                },
                {
                    id: 11,
                    title: "Custom Kanban Board",
                    description: "Setup react-kanban dep within Dashboard as separate page",
                    assignedTo: "Emily Johnson",
                    dueDate: new Date(2024, 7, 18),
                    files: [],
                },
            ],
        },
        {
            id: 4,
            title: "Completed",
            cards: [
                {
                    id: 12,
                    title: "Vite Server Setup",
                    description: "Configure required modules and starters",
                    assignedTo: "",
                    dueDate: null,
                    files: [],
                },
                {
                    id: 13,
                    title: "Modular structure",
                    description: "Write css in form of modules to reduce the naming conflicts",
                    assignedTo: "",
                    dueDate: null,
                    files: [],
                },
            ],
        },
    ],
};
