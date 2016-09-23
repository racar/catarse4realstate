# -*- encoding: utf-8 -*-
# stub: payulatam 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "payulatam"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Sebastian Gamboa", "Gustavo Guichard", "Daniel Weinmann"]
  s.date = "2016-09-23"
  s.description = "Payulatam"
  s.email = ["me@sagmor.com", "gustavoguichard@gmail.com", "danielweinmann@gmail.com"]
  s.files = [".gitignore", "Gemfile", "Rakefile", "lib/payulatam.rb", "lib/payulatam/client.rb", "lib/payulatam/payment.rb", "lib/payulatam/response.rb", "lib/payulatam/version.rb", "payulatam.gemspec"]
  s.homepage = ""
  s.rubyforge_project = "payulatam"
  s.rubygems_version = "2.5.1"
  s.summary = "Payulatam"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<hashie>, [">= 0"])
    else
      s.add_dependency(%q<hashie>, [">= 0"])
    end
  else
    s.add_dependency(%q<hashie>, [">= 0"])
  end
end
