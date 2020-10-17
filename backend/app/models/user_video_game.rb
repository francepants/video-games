class UserVideoGame < ApplicationRecord
  belongs_to :user
  belongs_to :video_games
end
