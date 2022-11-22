class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :avatar_url
      t.string :company_name
      t.string :company_title
      t.string :phone_number

      t.timestamps
    end
  end
end
