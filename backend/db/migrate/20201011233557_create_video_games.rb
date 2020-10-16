class CreateVideoGames < ActiveRecord::Migration[6.0]
  def change
    create_table :video_games do |t|
      t.string :game_name
      t.string :game_genre
      t.string :game_rating
      t.string :game_platform
      t.text :description
      t.integer :year_released
      t.integer :user_id
      t.timestamps
    end
  end
end
