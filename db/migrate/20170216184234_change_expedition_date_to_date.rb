class ChangeExpeditionDateToDate < ActiveRecord::Migration
  def change
    change_column :user_informations, :expedition_date, :date
  end
end
