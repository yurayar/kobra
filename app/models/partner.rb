class Partner < ActiveRecord::Base
  mount_uploader :photo, PartnerPhotoUploader
end
