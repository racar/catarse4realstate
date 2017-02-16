class UserInformation < ActiveRecord::Base

  belongs_to :user

  #accepts_nested_attributes_for :user

  extend Enumerize

  enumerize :document_type, in: [:nit, :cc, :foreigner_card, :passport], i18n_scope: "document_type"
  enumerize :gender, in: [:male, :female, :other], i18n_scope: "gender"

  def country_name
    country = ISO3166::Country[country_code]
    country.translations[I18n.locale.to_s] || country.name
  end

end
