steps = [
    [
        # "Up" SQL statement
        """
        INSERT INTO status (status)
        VALUES
            ('Backlog'),
            ('To Do'),
            ('In Progress'),
            ('In Review / QA'),
            ('Completed');

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
