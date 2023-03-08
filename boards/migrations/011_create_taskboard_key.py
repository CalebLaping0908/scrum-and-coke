steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD FOREIGN KEY (assignee) REFERENCES users(employee_number);

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """,
    ]
]
