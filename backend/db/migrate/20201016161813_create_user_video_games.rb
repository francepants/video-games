class CreateUserVideoGames < ActiveRecord::Migration[6.0]
  def change
    create_table :user_video_games do |t|
      t.references :user, null: false, foreign_key: true
      t.references :video_games, null: false, foreign_key: true

      t.timestamps
    end
  end
end
