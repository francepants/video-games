class VideoGame < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    belongs_to :user, optional: true

    validates :game_name, presence: true, uniqueness: true
    validates :game_genre, presence: true
    validates :game_rating, presence: true
    validates :game_platform, presence: true
    validates :description, presence: true
    validates :year_released, presence: true

end


