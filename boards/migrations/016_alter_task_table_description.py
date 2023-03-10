steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ALTER COLUMN description TYPE VARCHAR(1000);
        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """,
    ]
]
