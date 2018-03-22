class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :username
      t.string :password_digest
      t.string :avatar


      t.timestamps
    end
  end
end
