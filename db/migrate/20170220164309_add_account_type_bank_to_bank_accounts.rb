class AddAccountTypeBankToBankAccounts < ActiveRecord::Migration
  def change
    add_column :bank_accounts, :account_type_bank, :string
  end
end
