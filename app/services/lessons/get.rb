module Lessons
    class Get
      include BaseService
  
      def initialize(params = {})
        @id = params.fetch(:id)
      end
  
      def call
        get
      end
  
      private
  
      def get
        Lesson
          .includes(:teacher)
          .where(id: @id)
      end
    end
  end
  