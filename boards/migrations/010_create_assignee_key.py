steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE tasks
        ADD FOREIGN KEY (board) REFERENCES boards(id);

        """,
        # "Down" SQL statement
        """
        DROP TABLE tasks;
        """,
    ]
]
