begin
  # if Rails.env.production?
    ActionMailer::Base.smtp_settings = {
      address: 'smtp.sendgrid.net',
      port: '587',
      authentication: :plain,
      user_name: CatarseSettings.get_without_cache(:sendgrid_user_name),
      password: CatarseSettings.get_without_cache(:sendgrid_password),
      domain: CatarseSettings.get_without_cache(:sendgrid_domain),
      :enable_starttls_auto => true

    }
    ActionMailer::Base.delivery_method = :smtp
  # end
rescue
  nil
end

if Rails.env.sandbox?
  ActionMailer::Base.register_interceptor(SandboxMailInterceptor)
end
