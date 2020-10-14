class VideoGameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :game_name, :game_genre, :game_rating, :game_platform, :year_released, :description
  # has_many :comments
end
