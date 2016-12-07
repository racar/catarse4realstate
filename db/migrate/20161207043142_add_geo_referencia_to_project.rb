class AddGeoReferenciaToProject < ActiveRecord::Migration
  def change
    add_column :projects, :latitud, :string
    add_column :projects, :longitud, :string
  end
end
