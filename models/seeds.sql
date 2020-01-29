USE DATABASE gamesdb;

INSERT INTO games (game_name, game_type, played, review, game_genre, img_src)
VALUES ("FIFA", "Console", true, "Great", "Sport", "Test");

INSERT INTO users (user_name, password)
VALUES ("myname", "password");

INSERT INTO userlists (user_name, played)
VALUES ("myname", true);

