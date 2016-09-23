class UserContact < ActionMailer::Base
  default from: "info@homeparte.com"

  def contact(question, details, name, email)
  	@question =  question
  	@details = details
   	@name = name
  	@email = email
	mail( :to => 'info@homeparte.com',
    :subject => @name + ' ha hecho una pregunta a HomeParte' )
  end
end
