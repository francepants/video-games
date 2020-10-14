class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :video_games
  has_many :video_games, serializer: VideoGameSerializer
end
