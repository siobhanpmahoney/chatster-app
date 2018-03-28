# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

avatars = [
  "https://react.semantic-ui.com/assets/images/avatar/small/steve.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/ade.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/chris.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/helen.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/jenny.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/large/kristy.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/laura.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/lena.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/lindsay.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/matthew.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/mark.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/molly.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/nan.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/large/patrick.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/rachel.png",
  "https://react.semantic-ui.com/assets/images/avatar/small/tom.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/veronika.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/steve.jpg",
  "https://react.semantic-ui.com/assets/images/avatar/small/zoe.jpg"
]



12.times do
  name = Faker::Internet.user_name.scan(/\w+/).join('.').downcase
  if !User.find_by(username: name)
    user = User.create(username: name, password:name, password_confirmation:name)
    user.update(avatar: avatars[user.id])
  end
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
    chat_title = Faker::Book.title
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
      Message.create(content: Faker::Movie.quote, chat_id: chat.id, user_id: user.id)
    end
  end
end




#user_ids: 1, 14


Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun} in #{Faker::ProgrammingLanguage.name}",
  user_id: 1,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.abbreviation}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun} in #{Faker::ProgrammingLanguage.name}",
  user_id: 1,
  chat_id: 100
)

Message.create(
  content:"#{Faker::Hacker.ingverb} #{Faker::Hacker.abbreviation}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun} in #{Faker::ProgrammingLanguage.name}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.abbreviation}",
  user_id: 1,
  chat_id: 100
)



Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun} in #{Faker::ProgrammingLanguage.name}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.abbreviation}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: Faker::Hacker.say_something_smart,
  user_id: 1,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun} in #{Faker::ProgrammingLanguage.name}",
  user_id: 14,
  chat_id: 100
)

Message.create(
  content: "#{Faker::Hacker.ingverb} #{Faker::Hacker.abbreviation}",
  user_id: 1,
  chat_id: 100
)

Message.create(
  content: Faker::Hacker.say_something_smart,
  user_id: 14,
  chat_id: 100
)





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
