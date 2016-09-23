begin
  # if Rails.env.production?
    ActionMailer::Base.smtp_settings = {
      address: 'smtp.sendgrid.net',
      port: '587',
      authentication: :plain,
      user_name: "drawdream1144",
      password: "drawdream1144151",
      domain: 'homeparte.ngrok.com'
    }
    ActionMailer::Base.delivery_method = :smtp
  # end
rescue
  nil
end

if Rails.env.sandbox?
  ActionMailer::Base.register_interceptor(SandboxMailInterceptor)
end
