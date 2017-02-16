class UserInformation < ActiveRecord::Base

  belongs_to :user

  accepts_nested_attributes_for :user

  extend Enumerize

  enumerize :document_type, in: [:nit, :cc, :foreigner_card, :passport], i18n_scope: "document_type"
  enumerize :gender, in: [:male, :female, :other], i18n_scope: "sex"

end
