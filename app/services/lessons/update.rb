module Lessons
  class Update
    include BaseService

    def initialize(params = {})
      @id = params.fetch(:id)
      @name = params.fetch(:name)
      @description = params.fetch(:description)
      @link = params.fetch(:link)
      @image = params.fetch(:image)
    end

    def call
      update
    end

    private

    def update
      lesson = Lesson.find(@id)

      lesson.update(update_params)
    end

    def update_params
      {
        name: @name,
        description: @description,
        link: @link,
        image: @image
      }.compact
    end
  end
end
