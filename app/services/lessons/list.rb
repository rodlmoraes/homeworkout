module Lessons
  class List
    include BaseService

    def initialize(params = {})
      @query = params.fetch(:query)
    end

    def call
      list
    end

    private

    def list
      Lesson
        .includes(:teacher)
        .where('name LIKE ?', "%#{@query}%")
        .or(Lesson.includes(:teacher).where('description LIKE ?', "%#{@query}%"))
        .or(Lesson.includes(:teacher).where(id: @query))
    end
  end
end
