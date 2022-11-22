class MembersController < ApplicationController
  def index
    @members = Member.all
  end

  def mass_upload
    members = params[:members]
    members_attrs = members.map do |member|
      member_attrs(member)
    end

    Member.create!(members_attrs)

    render status: 200, json: { success: true }
  rescue => e
    render status: 200, json: { success: false, message: "At Least One #{e}" }
  end

  private

  def member_attrs(member_params)
    member_params.permit(
      :first_name,
      :last_name,
      :email,
      :company_name,
      :company_title,
      :avatar_url
    ).to_h
  end
end
