# -*- encoding: utf-8 -*-
# stub: moip 1.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "moip"
  s.version = "1.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Guilherme Nascimento"]
  s.date = "2010-11-10"
  s.description = "Gem para utiliza\u{e7}\u{e3}o da API MoIP"
  s.email = "guilherme.ruby@gmail.com"
  s.extra_rdoc_files = ["LICENSE", "README.markdown"]
  s.files = [".document", ".gitignore", "Gemfile", "Gemfile.lock", "LICENSE", "README.markdown", "Rakefile", "VERSION", "lib/moip.rb", "lib/moip/client.rb", "lib/moip/direct_payment.rb", "moip.gemspec", "spec/moip_spec.rb"]
  s.homepage = "http://github.com/moiplabs/moip-ruby"
  s.rdoc_options = ["--charset=UTF-8"]
  s.rubygems_version = "2.5.1"
  s.summary = "Gem para utiliza\u{e7}\u{e3}o da API MoIP"
  s.test_files = ["spec/moip_spec.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>, [">= 2.1.0"])
      s.add_runtime_dependency(%q<nokogiri>, [">= 1.5.0"])
      s.add_runtime_dependency(%q<httparty>, ["~> 0.6.1"])
      s.add_runtime_dependency(%q<activesupport>, [">= 2.3.2"])
    else
      s.add_dependency(%q<rspec>, [">= 2.1.0"])
      s.add_dependency(%q<nokogiri>, [">= 1.5.0"])
      s.add_dependency(%q<httparty>, ["~> 0.6.1"])
      s.add_dependency(%q<activesupport>, [">= 2.3.2"])
    end
  else
    s.add_dependency(%q<rspec>, [">= 2.1.0"])
    s.add_dependency(%q<nokogiri>, [">= 1.5.0"])
    s.add_dependency(%q<httparty>, ["~> 0.6.1"])
    s.add_dependency(%q<activesupport>, [">= 2.3.2"])
  end
end
