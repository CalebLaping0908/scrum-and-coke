steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE tasks (
            id SERIAL PRIMARY KEY NOT NULL,
            title VARCHAR(150) NOT NULL,
            description VARCHAR(150) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """,
    ]
]
