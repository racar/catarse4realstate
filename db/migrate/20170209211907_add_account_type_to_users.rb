class AddAccountTypeToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :account_type, index: true
  end
end
