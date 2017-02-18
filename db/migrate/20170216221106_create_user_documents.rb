class CreateUserDocuments < ActiveRecord::Migration
  def change
    create_table :user_documents do |t|
      t.references :user, index: true, foreign_key: true
      t.string :document
      t.string :salary_certificate
      t.string :chamber_commerce
      t.string :rut

      t.timestamps
    end
  end
end
