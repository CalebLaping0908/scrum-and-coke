steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(150) NOT NULL,
            full_name VARCHAR(150) NOT NULL,
            password VARCHAR(150) NOT NULL,
            employee_number SMALLINT NOT NULL UNIQUE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ]
]
