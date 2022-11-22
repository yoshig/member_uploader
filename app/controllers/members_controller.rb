class MembersController < ApplicationController
  def index
    @members = Member.all
  end

  def mass_upload
    members = params[:members]
    puts members
  end
end
