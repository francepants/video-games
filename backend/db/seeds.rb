# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create([
    {username: "sunshine",
    email: "sunshine@email.com",
    password: "summertime"}
])

sunshine = User.first 

sunshine_game = sunshine.video_games.create(
    game_name: "Pokemon Snap",
    game_genre: "Rail shooter",
    game_rating: "E for Everyone",
    game_platform: "Nintendo 64, Wii, Wii U",
    year_released: 1999,
    description: "Pokémon Snap is a first-person simulation video game with rail shooter style gameplay mechanics co-developed by HAL Laboratory and Pax Softnica and published by Nintendo for the Nintendo 64.")

sunshine_game = sunshine.video_games.create(
    game_name: "Cyberpunk 2077",
    game_genre: "Action role-playing game, First-person shooter, Open world",
    game_rating: "M for Mature",
    game_platform: "PlayStation 5, Xbox Series X and Series S, Google Stadia, Xbox One, Microsoft Windows",
    year_released: 2020,
    description: "Cyberpunk 2077 is an upcoming action role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One in November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X/S in 2021.")

# VideoGame.create([
#     {
#         game_name: "Mario Kart 8",
#         game_genre: "Kart Racing",
#         game_rating: "E for Everyone",
#         game_platform: "Nintendo Switch",
#         year_released: 2017,
#         description: "Mario Kart 8 is a 2014 kart racing game developed and published by Nintendo for its Wii U home video ga me console in May 2014. It retains Mario Kart series game mechanics, where players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race."},
#     {
        # game_name: "Cyberpunk 2077",
        # game_genre: "Action role-playing game, First-person shooter, Open world",
        # game_rating: "M for Mature",
        # game_platform: "PlayStation 5, Xbox Series X and Series S, Google Stadia, Xbox One, Microsoft Windows",
        # year_released: 2020,
        # description: "Cyberpunk 2077 is an upcoming action role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One in November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X/S in 2021."
#     },
#     {
        # game_name: "Pokemon Snap",
        # game_genre: "Rail shooter",
        # game_rating: "E for Everyone",
        # game_platform: "Nintendo 64, Wii, Wii U",
        # year_released: 1999,
        # description: "Pokémon Snap is a first-person simulation video game with rail shooter style gameplay mechanics co-developed by HAL Laboratory and Pax Softnica and published by Nintendo for the Nintendo 64."
#     }
# ])

# pokemon_snap = VideoGame.create(        
#     game_name: "Pokemon Snap",
#     game_genre: "Rail shooter",
#     game_rating: "E for Everyone",
#     game_platform: "Nintendo 64, Wii, Wii U",
#     year_released: 1999,
#     description: "Pokémon Snap is a first-person simulation video game with rail shooter style gameplay mechanics co-developed by HAL Laboratory and Pax Softnica and published by Nintendo for the Nintendo 64.")

# cyberpunk = VideoGame.create(
#     game_name: "Cyberpunk 2077",
#     game_genre: "Action role-playing game, First-person shooter, Open world",
#     game_rating: "M for Mature",
#     game_platform: "PlayStation 5, Xbox Series X and Series S, Google Stadia, Xbox One, Microsoft Windows",
#     year_released: 2020,
#     description: "Cyberpunk 2077 is an upcoming action role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One in November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X/S in 2021."
# )

