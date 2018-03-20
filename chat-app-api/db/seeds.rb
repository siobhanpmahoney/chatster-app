# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do
  name = Faker::TwinPeaks.character.split(" ").join("_").downcase
  user = User.find_or_create_by(username: name)
  user.update(password: user.username)
end

5.times do
  name = Faker::HarryPotter.character.split(" ").join("_").downcase
  User.find_or_create_by(username: name)
end

5.times do
  name = Faker::SiliconValley.character.scan(/\w+/).join('_').downcase
  User.find_or_create_by(username: name)
end

5.times do
  name = Faker::Seinfeld.character.scan(/\w+/).join('_').downcase
  User.find_or_create_by(username: name)
end


2.times do
  User.all.each do |user|
    friend = User.all.sample
    if friend.id != user.id
      Friendship.find_or_create_by(user_id: user.id, friend_id: friend.id)
      Friendship.find_or_create_by(user_id: friend.id, friend_id: user.id)
    end
  end
end


User.all.each do |user|
  user.friends.each do |friend|
    chat_title = Faker::Address.unique.city.capitalize + " " + Faker::Hipster.word.capitalize
    if !Chat.find_by(title: chat_title)
      chat = Chat.create(title: chat_title)
      UserChat.create(user_id: user.id, chat_id: chat.id)
      UserChat.create(user_id: friend.id, chat_id: chat.id)
    end
  end
end


3.times do
  Chat.all.each do |chat|
    chat.users.each do |user|
      Message.create(content: Faker::HarryPotter.quote, chat_id: chat.id, user_id: user.id)
    end
  end
end


3.times do
  Chat.all.each do |chat|
    chat.users.each do |user|
      Message.create(content: Faker::TwinPeaks.quote, chat_id: chat.id, user_id: user.id)
    end
  end
end



3.times do
  Chat.all.each do |chat|
    chat.users.each do |user|
      Message.create(content: Faker::SiliconValley.quote, chat_id: chat.id, user_id: user.id)
    end
  end
end












# 10.times do
#   User.find_or_create_by(username: Faker::Overwatch.hero)
# end
#
# User.all.each do |user|
#   friend = User.all.sample
#   if friend.id != user.id
#     Friendship.create(user_id: user.id, friend_id: friend.id)
#     Friendship.create(user_id: friend.id, friend_id: user.id)
#   end
# end
#
# 3.times do
#   Chat.create(title: Faker::Overwatch.location)
# end
#
# Chat.all.each do |c|
#   person = User.all.sample
#   UserChat.create(user_id: person.id, chat_id: c.id)
#   UserChat.create(user_id: person.friends.sample.id, chat_id: c.id)
# end
#
# 20.times do
#   chat = Chat.all.sample.id
#   user = User.all.sample.id
#   Message.create(content: Faker::Overwatch.quote, chat_id: chat, user_id: user)
# end
