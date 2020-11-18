module Lessons
  class Delete
    include BaseService

    def initialize(params = {})
      @id = params.fetch(:id)
    end

    def call
      delete
    end

    private

    def delete
      Lesson.destroy(@id)
    end
  end
end
