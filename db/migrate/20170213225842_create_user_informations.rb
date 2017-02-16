class CreateUserInformations < ActiveRecord::Migration
  def change
    create_table :user_informations do |t|
      t.references :user, index: true, foreign_key: true
      t.string :document_type
      t.string :document_number
      t.datetime :expedition_date
      t.string :expedition_place
      t.string :gender
      t.string :country
      t.string :city
      t.string :address
      t.string :country_of_birth
      t.string :city_of_birth

      t.timestamps
    end
    add_index :user_informations, :document_number, unique: true
  end
end
