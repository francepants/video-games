# Video Games


## User attributes
- username
- email
- password
### relationship options:
    - has many video games
    - has many comments

## Video game attributes
- name
- genre
- rating 
- platform
- description
- year released
### relationship options:
    - belongs_to :user
    - has_many :comments, through users

## Comment
- content
### relationship options:
    belongs_to :user
    belongs_to :video_game 


## Other notes: 
rails g scaffold video-games game_name game_genre game_rating game_platform description:text year_released:integer