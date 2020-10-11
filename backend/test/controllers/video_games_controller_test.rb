require 'test_helper'

class VideoGamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @video_game = video_games(:one)
  end

  test "should get index" do
    get video_games_url, as: :json
    assert_response :success
  end

  test "should create video_game" do
    assert_difference('VideoGame.count') do
      post video_games_url, params: { video_game: { description: @video_game.description, game_genre: @video_game.game_genre, game_name: @video_game.game_name, game_platform: @video_game.game_platform, game_rating: @video_game.game_rating, year_released: @video_game.year_released } }, as: :json
    end

    assert_response 201
  end

  test "should show video_game" do
    get video_game_url(@video_game), as: :json
    assert_response :success
  end

  test "should update video_game" do
    patch video_game_url(@video_game), params: { video_game: { description: @video_game.description, game_genre: @video_game.game_genre, game_name: @video_game.game_name, game_platform: @video_game.game_platform, game_rating: @video_game.game_rating, year_released: @video_game.year_released } }, as: :json
    assert_response 200
  end

  test "should destroy video_game" do
    assert_difference('VideoGame.count', -1) do
      delete video_game_url(@video_game), as: :json
    end

    assert_response 204
  end
end
