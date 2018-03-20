class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :friends
  has_many :chats
  has_many :messages
  
end
