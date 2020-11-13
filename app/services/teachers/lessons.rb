module Teachers
  class Lessons
    include BaseService

    def initialize(params = {})
      @teacher = params.fetch(:teacher)
    end

    def call
      @teacher.lessons
    end
  end
end
