class VideoGamesController < ApplicationController
  before_action :set_video_game, only: [:show, :update, :destroy]

  # GET /video_games
  def index
    if logged_in? 
      @video_games = current_user.video_games
      
      render json: VideoGameSerializer.new(@video_games)
      # render json: @video_games
    else
      render json: {
        error: "You must be logged in to see video games"
      }
    end
    # @video_games = VideoGame.all

    # render json: @video_games
  end

  # GET /video_games/1
  def show
    render json: @video_game
  end

  # POST /video_games
  def create
    @video_game = current_user.video_games.build(video_game_params)
    if @video_game.save
      render json: VideoGameSerializer.new(@video_game), status: :created
    else
      render json: @video_game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /video_games/1
  def update
    if @video_game.update(video_game_params)
      render json: VideoGameSerializer.new(@video_game), status: :ok
    else
      render json: {
        error: "Field cannot be left blank"
      }
    end
  end

  # DELETE /video_games/1
  def destroy
    if @video_game.destroy
      render json: {message: "Video Game deleted."}, status: :ok
    else
      render json: {
        error: "Something's not right"
      }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video_game
      @video_game = VideoGame.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def video_game_params
      params.require(:video_game).permit(:game_name, :game_genre, :game_rating, :game_platform, :description, :year_released, :user_id)
    end
end
