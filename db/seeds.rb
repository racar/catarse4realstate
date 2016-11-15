# coding: utf-8

puts 'Seeding the database...'

#[
#  { pt: 'Arte', es:'Apartamentos'},
#  { pt: 'Artes plásticas', es:'Zona Franca'},
#  { pt: 'Circo', es:'Bodega'},
#  { pt: 'Comunidade', es:'Casa'},
#  { pt: 'Humor', es:'Lote Urbanizado'},
#  { pt: 'Quadrinhos', es:'Proyecto Hotelero'},
#  { pt: 'Dança', es:'Edificio'},
#  { pt: 'Design', es:'Conjunto'},
#  { pt: 'Eventos', es:'Parqueadero'},
#  { pt: 'Moda', es:'Local'},
#  { pt: 'Gastronomia', es:'Lote'},
#  { pt: 'Cinema e Vídeo', es:'Finca'},
#  { pt: 'Jogos', es:'Oficina'},
#  { pt: 'Jornalismo', es:'Otros' }
#].each do |name|
#   category = Category.find_or_initialize_by(name_pt: name[:pt])
#   category.update_attributes({
#     name_en: name[:en]
#   })
#end


#USO: desde consola ejecutar - >> SEED_DATA=category rake db:seed


if ENV['SEED_DATA'] == 'category'
connection = ActiveRecord::Base.connection()
connection.execute("delete from project_notifications where 1=1;")
connection.execute("delete from rewards where 1=1;")
Project.delete_all
Category.delete_all
    File.open("#{Rails.root}/db/categorias.txt") do |categorias|
      categorias.read.each_line do |category|
        name_pt, name_es = category.chomp.split("|")
        Category.create!(:name_pt => name_pt, :name_es => name_es)
      end
    end
elsif ENV['SEED_DATA'] == 'ciudades'
  City.delete_all
  State.delete_all

    File.open("#{Rails.root}/db/states.txt") do |states|
      states.read.each_line do |state|
        name, acronym = state.chomp.split("|")
        State.create!(:name => name, :acronym => acronym)
      end
    end

    File.open("#{Rails.root}/db/cities.txt") do |cities|
      cities.read.each_line do |city|
        name, name_state = city.chomp.split("|")
        state_id = State.find_by_acronym(name_state).id
        City.create!(:name => name, :state_id => state_id)
      end
  end


else

end

{
  company_name: 'Home Parte',
  company_logo: '',
  host: 'homeparte.com',
  base_url: "http://homeparte.com",

  #from_email: 'info@homeparte.com',
  email_contact: 'info@homeparte.com',
  email_payments: 'admin@homeparte.com',
  email_projects: 'info@homeparte.com',
  email_system: 'info@homeparte.com',
  email_no_reply: 'info@homeparte.com',
  facebook_url: "http://facebook.com/homeparte",
  facebook_app_id: '480433832146583',
  twitter_url: 'http://twitter.com/homeparte',
  twitter_username: "homeparte",
  mailchimp_url: "http://catarse.us5.list-manage.com/subscribe/post?u=ebfcd0d16dbb0001a0bea3639&amp;id=149c39709e",
  catarse_fee: '0.13',
  support_forum: 'http://suporte.catarse.me/',
  base_domain: 'homeparte.com',
  uservoice_secret_gadget: 'change_this',
  uservoice_key: 'uservoice_key',
  faq_url: 'http://suporte.catarse.me/',
  feedback_url: 'http://suporte.catarse.me/forums/103171-catarse-ideias-gerais',
  terms_url: 'http://suporte.catarse.me/knowledgebase/articles/161100-termos-de-uso',
  privacy_url: 'http://suporte.catarse.me/knowledgebase/articles/161103-pol%C3%ADtica-de-privacidade',
  about_channel_url: 'http://blog.catarse.me/conheca-os-canais-do-catarse/',
  instagram_url: 'http://instagram.com/',
  blog_url: "http://blog.catarse.me",
  github_url: 'http://github.com/catarse',
  contato_url: 'http://suporte.catarse.me/'
}.each do |name, value|
   conf = CatarseSettings.find_or_initialize_by(name: name)
   conf.update_attributes({
     value: value
   }) if conf.new_record?
end



OauthProvider.find_or_create_by!(name: 'facebook') do |o|
  o.key = '480433832146583'
  o.secret = 'cca3da37b7ac90f31b06f8f83f0eba4c'
  o.path = 'facebook'
end

OauthProvider.find_or_create_by!(name: 'google') do |o|
  o.key = '593746662819-t9rpb9vce1rili5etboj3j0cmd1fbu7c.apps.googleusercontent.com'
  o.secret = 'ApW9ISaqSiAQUWD7AWr1EbVl'
  o.path = 'google'
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

CatarseSettings.all.each do |conf|
  a = conf.attributes
  puts "  #{a['name']}: #{a['value']}"
end

Rails.cache.clear

puts '---------------------------------------------'
puts 'Done!'
