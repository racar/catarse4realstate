class CreateFinancialInformations < ActiveRecord::Migration
  def change
    create_table :financial_informations do |t|
      t.references :user, index: true, foreign_key: true
      t.string :salary
      t.string :investment

      t.timestamps
    end
  end
end
