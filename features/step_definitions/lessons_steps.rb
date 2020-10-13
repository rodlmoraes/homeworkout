Dado('que existem aulas disponíves') do
  teacher = FactoryBot.create(:teacher)
  FactoryBot.create_list(:lesson, 5, name: 'boxe', teacher: teacher)
end

Quando('ele entrar na listagem de aula') do
  visit '/'
  Capybara.using_wait_time(180) do
    fill_in 'Busca',	with: ''
  end
end

Então('todas as aulas cadastradas devem aparecer') do
  pending # expect(page).to have_content('boxe')
end

Quando('ele criar uma aula com todos os dados necessários') do
  visit '/cadastrar-aula'
  fill_in 'Nome da aula',	with: 'Yoga'
  fill_in 'Link da Aula',	with: 'https://www.youtube.com/watch?v=kozEd1SnwmI&ab_channel=PriLeiteYoga'
  fill_in 'Descrição da Aula',	with: 'Venha ficar flexível'
  click_button 'Salvar Cadastro'
end

Então('quero que a aula tenha sido criada') do
  pending # Write code here that turns the phrase above into concrete actions
end
