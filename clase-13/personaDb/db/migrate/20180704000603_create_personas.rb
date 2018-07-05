class CreatePersonas < ActiveRecord::Migration[5.2]
  def change
    create_table :personas do |t|
      t.integer :id_persona
      t.string :nombre
      t.string :apellidos

      t.timestamps
    end
    add_index :personas, :id_persona, unique: true
  end
end
