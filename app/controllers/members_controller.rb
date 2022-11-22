class MembersController < ApplicationController
  def index
    render json: { testing: "ok" }
  end
end
