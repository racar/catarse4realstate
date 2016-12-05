class AddProyeccionToProject < ActiveRecord::Migration
  def change
    add_column :projects, :proyeccion, :string
  end
end
