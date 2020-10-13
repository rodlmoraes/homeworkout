module Lessons
  class Create
    include BaseService

    def initialize(params = {})
      @teacher = params.fetch(:teacher)
      @name = params.fetch(:name)
      @description = params.fetch(:description)
      @link = params.fetch(:link)
    end

    def call
      create
    end

    private

    def create
      Lesson.create(lesson_params)
    end

    def lesson_params
      {
        teacher: @teacher,
        name: @name,
        description: @description,
        link: @link
      }
    end
  end
end
