steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE status (
            id SERIAL PRIMARY KEY NOT NULL,
            status VARCHAR(150) NOT NULL UNIQUE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
