class AlterTableBankAccounts < ActiveRecord::Migration
  def change
    change_column :bank_accounts, :account, :string, :null => true
    change_column :bank_accounts, :agency, :string, :null => true
    change_column :bank_accounts, :owner_name, :string, :null => true
    change_column :bank_accounts, :owner_document, :string, :null => true
    change_column :bank_accounts, :account_digit, :string, :null => false
    change_column :bank_accounts, :agency_digit, :string, :null => true    
  end
end
