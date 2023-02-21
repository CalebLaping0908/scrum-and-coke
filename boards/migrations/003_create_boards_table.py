steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE boards (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(150) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE boards;
        """
    ]
]
