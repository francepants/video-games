# Video Games


## User attributes
- username
- email
- password
### relationship options:
    - has_many :comments
    - has_many :video_games, through: :comments

## Video game attributes
- name
- genre
- rating 
- platform
- description
- year released
### relationship options:
    - has_many :comments
    - has_many :users, through: :comments

## Comment
- name
- content
### relationship options:
    belongs_to :user
    belongs_to :video_game 


## Other notes: 
rails g scaffold video-games game_name game_genre game_rating game_platform description:text year_released:integer