class CreateWorkInformations < ActiveRecord::Migration
  def change
    create_table :work_informations do |t|
      t.references :user, index: true, foreign_key: true
      t.string :company
      t.string :profession
      t.string :origin_resource
      t.string :address_work
      t.string :phone_number_work
      t.string :city_work    

      t.timestamps
    end
  end
end
