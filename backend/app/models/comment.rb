class Comment < ApplicationRecord
  belongs_to :video_game
  belongs_to :user
end
