steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD assignee int,
        ADD board int NOT NULL;

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
