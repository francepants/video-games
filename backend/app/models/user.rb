class User < ApplicationRecord
    has_secure_password
    has_many :comments
    has_many :video_games, through: :comments

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
