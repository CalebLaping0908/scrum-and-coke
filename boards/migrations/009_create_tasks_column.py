steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD assignee int NULL,
        ADD board int NOT NULL,
        ADD status VARCHAR;

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """,
    ]
]
