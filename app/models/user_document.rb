class UserDocument < ActiveRecord::Base
  belongs_to :user
  mount_uploader :document, DocumentUploader
  mount_uploader :salary_certificate, DocumentUploader
  mount_uploader :chamber_commerce, DocumentUploader
  mount_uploader :rut, DocumentUploader
end
