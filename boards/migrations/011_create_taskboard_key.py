steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD FOREIGN KEY (assignee) REFERENCES users(id);

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
