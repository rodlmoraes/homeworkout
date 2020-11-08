class LessonSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :teacher, :image

  def teacher
    TeacherSerializer.new(object.teacher)
  end
end
