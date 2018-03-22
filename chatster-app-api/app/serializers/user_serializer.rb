class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar

  has_many :friends
  has_many :chats
  has_many :messages

end
