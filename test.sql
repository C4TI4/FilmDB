SELECT
    CASE
        WHEN genre IN ('Comedy', 'Sex Comedy','', 'Fantasy Comedy','Comedy Drama', 'Supernatural', 'Comedy Mystery') THEN 'Comedy'
        WHEN genre IN ('War', 'Action Thriller', 'Sci-Fi', 'Action', 'Thriller','fantasy','Superhero', 'Fantasy', 'Action Comedy', 'Crime' ) THEN 'Action'
        WHEN genre IN ('Drama', 'Romantic Drama', 'Crime', 'Historical Drama','Romantic Drama','Romance') THEN 'Romance'
        WHEN genre IN ('Anime', 'Animated Fantasy', 'Animated Family') THEN 'Anime'
        ELSE genre
    END AS unified_genre
FROM your_table_name;
