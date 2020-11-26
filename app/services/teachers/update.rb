module Teachers
  class Update
    include BaseService

    def initialize(params = {})
      @teacher = params.fetch(:teacher)
      @name = params.fetch(:name)
      @email = params.fetch(:email)
      @image = params.fetch(:image)
      @phone = params.fetch(:phone)
    end

    def call
      update
    end

    private

    def update
      @teacher.update(teacher_params)
    end

    def teacher_params
      {
        name: @name,
        email: @email,
        image: @image,
        phone: @phone
      }.compact
    end
  end
end
