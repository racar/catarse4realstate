## Update this configuration seed and then run
## rake db:seed:my-seeds

puts "Adding OauthProvider settings..."

  puts "  Facebook..."

  ## catarse-local-dev Facebook App
  facebook = OauthProvider.find_or_initialize_by_name 'facebook' 
  facebook.update_attributes(
    key: '480433832146583',
    secret: 'cca3da37b7ac90f31b06f8f83f0eba4c',
    path: 'facebook'
  )
  
    
  #OauthProvider.create :name => 'Twitter', :key => 'myconsumerkey', :secret => 'myconsumersecret', :strategy => 'Twitter', :path => 'twitter'
  #OauthProvider.create :name => 'LinkedIn', :key => 'myconsumerkey', :secret => 'myconsumersecret', :strategy => 'LinkedIn', :path => 'linked_in'

###
## Uservoice.com seetings
## at YOURDOMAIN.uservoice.com/admin/settings#/channels
## Sendgrid Heroku Plugin Settings
puts "Creating Configuration entries..."
{
  
  catarse_fee: '0.13',
  company_name: 'Home Parte',

  host: 'homeparte.com',
  base_domain: 'https://homeparte.com',
  base_url: "https://homeparte.com",

  facebook_url: "http://facebook.com/homeparte",
  facebook_app_id: '480433832146583',
  uservoice_subdomain: 'MY-USER-VOICE.uservoice.com',                  
  uservoice_sso_key: 'MY-USER-VOICE-KEY',                         
  uservoice_secret_gadget: 'MY-USER-VOICE-SECRET', 
  sendgrid_user_name: 'MY-HEROKU-SENDGRID-APP@heroku.com',                        
  sendgrid: 'MY-HEROKU-SENDGRID-KEY',                                                 
  mailchimp_url: "YOUR_MAIL_CHIMP_URL",

  blog_url: "YOUR_BLOG_URL",
  twitter_username: "homeparte",
  email_contact: 'info@homeparte.com',
  email_payments: 'admin@homeparte.com',
  email_projects: 'info@homeparte.com',
  email_system: 'info@homeparte.com',
  email_no_reply: 'info@homeparte.com',
  support_forum: 'YOUR_SUPPORT_URL',
  
}.each do |name, value|
   conf = Configuration.find_or_initialize_by_name name
   conf.update_attributes({
     value: value
   })
end

puts 
puts '============================================='
puts ' Showing all Authentication Providers'
puts '---------------------------------------------'

OauthProvider.all.each do |conf|
  a = conf.attributes
  puts "  name #{a['name']}"
  puts "     key: #{a['key']}"
  puts "     secret: #{a['secret']}"
  puts "     path: #{a['path']}"
  puts 
end


puts 
puts '============================================='
puts ' Showing all entries in Configuration Table...'
puts '---------------------------------------------'

Configuration.all.each do |conf|
  a = conf.attributes
  puts "  #{a['name']}: #{a['value']}"
end

puts '---------------------------------------------'
puts 'Done!'
