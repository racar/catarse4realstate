class StaticController < ApplicationController
  def thank_you
    contribution = Contribution.find session[:thank_you_contribution_id]
    redirect_to [contribution.project, contribution]
  end

  def send_contact_email
  	if params[:question].blank? || params[:detail].blank? || params[:name].blank? || params[:email].blank?
  		flash[:alert] = "Todos los campos son obligatorios"
  	else
  		UserContact.contact(params[:question], params[:detail], params[:name], params[:email]).deliver
  		flash[:notice] = "Email enviado"
  	end
  	redirect_to "/contact"
  end
end
