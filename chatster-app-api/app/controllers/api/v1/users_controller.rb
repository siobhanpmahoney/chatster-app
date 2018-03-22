class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.find_or_create_by(username: params[:user][:username])
    friends = user.friends
    chats = user.chats

    user_info = {user: user, friends: friends, chats: chats}

    render json: user_info
  end

  def show
    @user = User.find(params[:id])
    @friends = @user.user_friends
    @chats = @user.chats.map do |chat|
      messages = chat.message_with_usernames
      users = chat.chat_users

      {chat: chat, messages: messages, users: users}
    end




    user_info = {user: @user, friends: @friends, chats: @chats}
    render json: user_info
  end



  def new

    render json
  end




  def edit

    render json
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(
      :username, :password, :password_confirmation, :avatar,
      chat_ids: [],
      chats_attributes: [
        :title
      ],
      message_ids: [],
      messages_attributes: [
        :content,
        :chat_id,
        :user_id
      ]
    )
  end

  #helper methods

    # def show_friends
    #   friends = find_friends
    #   return friends
    # end
    #
    # def show_chats
    #   chats = find_chats
    #   return chats
    # end

end
