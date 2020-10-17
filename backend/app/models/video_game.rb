class VideoGame < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :users, through: :user_video_game
    belongs_to :user
    # , optional: true

    validates :game_name, presence: true
    validates :game_genre, presence: true
    validates :game_rating, presence: true
    validates :game_platform, presence: true
    validates :description, presence: true
    validates :year_released, presence: true

end


