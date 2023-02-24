steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD assignee int NULL,
        ADD board int NOT NULL;

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
