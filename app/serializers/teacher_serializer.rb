class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image, :phone
end
