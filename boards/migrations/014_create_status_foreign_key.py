steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD FOREIGN KEY (status) REFERENCES status(status);

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """
    ]
]
