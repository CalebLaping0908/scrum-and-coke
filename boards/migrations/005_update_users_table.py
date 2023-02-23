steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE users RENAME COLUMN password TO hashed_password;

        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ]
]
