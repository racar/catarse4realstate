class AddInversionInfoToProject < ActiveRecord::Migration
  def change
    add_column :projects, :periodo_tenencia, :string
    add_column :projects, :tir_proyectada, :string
  end
end
