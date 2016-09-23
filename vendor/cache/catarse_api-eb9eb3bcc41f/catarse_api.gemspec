# -*- encoding: utf-8 -*-
# stub: catarse_api 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "catarse_api"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Ton"]
  s.date = "2016-09-23"
  s.description = "Experimental API."
  s.email = ["ton@catarse.me"]
  s.files = [".gitignore", "Gemfile", "Gemfile.lock", "MIT-LICENSE", "README.rdoc", "Rakefile", "app/controllers/catarse_api/application_controller.rb", "app/controllers/catarse_api/v1/authenticate_controller.rb", "app/controllers/catarse_api/v1/me/projects_controller.rb", "app/controllers/catarse_api/v1/projects/contributions_controller.rb", "app/controllers/catarse_api/v1/projects/rewards_controller.rb", "app/controllers/catarse_api/v1/projects_controller.rb", "app/serializers/catarse_api/v1/authenticate_user_serializer.rb", "app/serializers/catarse_api/v1/contribution_serializer.rb", "app/serializers/catarse_api/v1/project_serializer.rb", "app/serializers/catarse_api/v1/reward_serializer.rb", "bin/rails", "catarse_api.gemspec", "config/routes.rb", "lib/catarse_api.rb", "lib/catarse_api/engine.rb", "lib/catarse_api/version.rb", "lib/tasks/catarse_api_tasks.rake", "spec/acceptance/api/v1/me/projects_spec.rb", "spec/acceptance/api/v1/projects/contributions_spec.rb", "spec/acceptance/api/v1/projects/rewards_spec.rb", "spec/acceptance/api/v1/projects_spec.rb", "spec/dummy/.ruby-version", "spec/dummy/Gemfile", "spec/dummy/Gemfile.lock", "spec/dummy/README.rdoc", "spec/dummy/Rakefile", "spec/dummy/app/assets/images/.keep", "spec/dummy/app/assets/javascripts/application.js", "spec/dummy/app/assets/stylesheets/application.css", "spec/dummy/app/controllers/application_controller.rb", "spec/dummy/app/controllers/concerns/.keep", "spec/dummy/app/decorators/reward_decorator.rb", "spec/dummy/app/decorators/user_decorator.rb", "spec/dummy/app/helpers/application_helper.rb", "spec/dummy/app/mailers/.keep", "spec/dummy/app/models/.keep", "spec/dummy/app/models/bank.rb", "spec/dummy/app/models/bank_account.rb", "spec/dummy/app/models/category.rb", "spec/dummy/app/models/concerns/.keep", "spec/dummy/app/models/contribution.rb", "spec/dummy/app/models/credit_card.rb", "spec/dummy/app/models/payment_engines.rb", "spec/dummy/app/models/payment_notification.rb", "spec/dummy/app/models/project.rb", "spec/dummy/app/models/reward.rb", "spec/dummy/app/models/user.rb", "spec/dummy/app/models/user_total.rb", "spec/dummy/app/views/layouts/application.html.erb", "spec/dummy/bin/bundle", "spec/dummy/bin/rails", "spec/dummy/bin/rake", "spec/dummy/config.ru", "spec/dummy/config/application.rb", "spec/dummy/config/boot.rb", "spec/dummy/config/database.yml", "spec/dummy/config/environment.rb", "spec/dummy/config/environments/development.rb", "spec/dummy/config/environments/production.rb", "spec/dummy/config/environments/test.rb", "spec/dummy/config/initializers/assets.rb", "spec/dummy/config/initializers/backtrace_silencers.rb", "spec/dummy/config/initializers/cookies_serializer.rb", "spec/dummy/config/initializers/filter_parameter_logging.rb", "spec/dummy/config/initializers/inflections.rb", "spec/dummy/config/initializers/mime_types.rb", "spec/dummy/config/initializers/session_store.rb", "spec/dummy/config/initializers/wrap_parameters.rb", "spec/dummy/config/locales/en.yml", "spec/dummy/config/routes.rb", "spec/dummy/config/secrets.yml", "spec/dummy/lib/assets/.keep", "spec/dummy/log/.keep", "spec/dummy/log/development.log", "spec/dummy/public/404.html", "spec/dummy/public/422.html", "spec/dummy/public/500.html", "spec/dummy/public/favicon.ico", "spec/dummy/spec/support/testimg.png", "spec/spec_helper.rb", "spec/support/factories.rb"]
  s.homepage = "https://github.com/catarse/catarse_api"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "Experimental API"
  s.test_files = ["spec/acceptance/api/v1/me/projects_spec.rb", "spec/acceptance/api/v1/projects/contributions_spec.rb", "spec/acceptance/api/v1/projects/rewards_spec.rb", "spec/acceptance/api/v1/projects_spec.rb", "spec/dummy/.ruby-version", "spec/dummy/Gemfile", "spec/dummy/Gemfile.lock", "spec/dummy/README.rdoc", "spec/dummy/Rakefile", "spec/dummy/app/assets/images/.keep", "spec/dummy/app/assets/javascripts/application.js", "spec/dummy/app/assets/stylesheets/application.css", "spec/dummy/app/controllers/application_controller.rb", "spec/dummy/app/controllers/concerns/.keep", "spec/dummy/app/decorators/reward_decorator.rb", "spec/dummy/app/decorators/user_decorator.rb", "spec/dummy/app/helpers/application_helper.rb", "spec/dummy/app/mailers/.keep", "spec/dummy/app/models/.keep", "spec/dummy/app/models/bank.rb", "spec/dummy/app/models/bank_account.rb", "spec/dummy/app/models/category.rb", "spec/dummy/app/models/concerns/.keep", "spec/dummy/app/models/contribution.rb", "spec/dummy/app/models/credit_card.rb", "spec/dummy/app/models/payment_engines.rb", "spec/dummy/app/models/payment_notification.rb", "spec/dummy/app/models/project.rb", "spec/dummy/app/models/reward.rb", "spec/dummy/app/models/user.rb", "spec/dummy/app/models/user_total.rb", "spec/dummy/app/views/layouts/application.html.erb", "spec/dummy/bin/bundle", "spec/dummy/bin/rails", "spec/dummy/bin/rake", "spec/dummy/config.ru", "spec/dummy/config/application.rb", "spec/dummy/config/boot.rb", "spec/dummy/config/database.yml", "spec/dummy/config/environment.rb", "spec/dummy/config/environments/development.rb", "spec/dummy/config/environments/production.rb", "spec/dummy/config/environments/test.rb", "spec/dummy/config/initializers/assets.rb", "spec/dummy/config/initializers/backtrace_silencers.rb", "spec/dummy/config/initializers/cookies_serializer.rb", "spec/dummy/config/initializers/filter_parameter_logging.rb", "spec/dummy/config/initializers/inflections.rb", "spec/dummy/config/initializers/mime_types.rb", "spec/dummy/config/initializers/session_store.rb", "spec/dummy/config/initializers/wrap_parameters.rb", "spec/dummy/config/locales/en.yml", "spec/dummy/config/routes.rb", "spec/dummy/config/secrets.yml", "spec/dummy/lib/assets/.keep", "spec/dummy/log/.keep", "spec/dummy/log/development.log", "spec/dummy/public/404.html", "spec/dummy/public/422.html", "spec/dummy/public/500.html", "spec/dummy/public/favicon.ico", "spec/dummy/spec/support/testimg.png", "spec/spec_helper.rb", "spec/support/factories.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>, ["~> 4.0"])
      s.add_runtime_dependency(%q<active_model_serializers>, ["= 0.8.0"])
      s.add_runtime_dependency(%q<has_scope>, [">= 0"])
      s.add_runtime_dependency(%q<kaminari>, [">= 0"])
      s.add_development_dependency(%q<rspec-rails>, ["~> 2.14.0"])
      s.add_development_dependency(%q<factory_girl_rails>, [">= 0"])
      s.add_development_dependency(%q<draper>, [">= 0"])
      s.add_development_dependency(%q<pg>, [">= 0"])
      s.add_development_dependency(%q<rspec_api_documentation>, [">= 0"])
      s.add_development_dependency(%q<json_spec>, [">= 0"])
    else
      s.add_dependency(%q<rails>, ["~> 4.0"])
      s.add_dependency(%q<active_model_serializers>, ["= 0.8.0"])
      s.add_dependency(%q<has_scope>, [">= 0"])
      s.add_dependency(%q<kaminari>, [">= 0"])
      s.add_dependency(%q<rspec-rails>, ["~> 2.14.0"])
      s.add_dependency(%q<factory_girl_rails>, [">= 0"])
      s.add_dependency(%q<draper>, [">= 0"])
      s.add_dependency(%q<pg>, [">= 0"])
      s.add_dependency(%q<rspec_api_documentation>, [">= 0"])
      s.add_dependency(%q<json_spec>, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>, ["~> 4.0"])
    s.add_dependency(%q<active_model_serializers>, ["= 0.8.0"])
    s.add_dependency(%q<has_scope>, [">= 0"])
    s.add_dependency(%q<kaminari>, [">= 0"])
    s.add_dependency(%q<rspec-rails>, ["~> 2.14.0"])
    s.add_dependency(%q<factory_girl_rails>, [">= 0"])
    s.add_dependency(%q<draper>, [">= 0"])
    s.add_dependency(%q<pg>, [">= 0"])
    s.add_dependency(%q<rspec_api_documentation>, [">= 0"])
    s.add_dependency(%q<json_spec>, [">= 0"])
  end
end
