class FriendshipSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :friend, class_name: "User"

end
