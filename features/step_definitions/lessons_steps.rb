Dado('que o professor esteja cadastrado') do
  visit 'cadastrar'
  fill_in 'Email',	with: 'test@test.com'
  fill_in 'Senha',	with: '123456'
  click_button 'Cadastrar'
end

Quando('ele visita a página de cadastrar aulas e preenche o formulário') do
  fill_in 'Nome da aula',	with: 'Yoga'
  fill_in 'Link da Aula',	with: 'https://www.youtube.com/link-aula'
  fill_in 'Descrição da Aula',	with: 'Venha ficar flexível'
  click_button 'Salvar Cadastro'
end

Então('o cadastro da aula deve ser efetuado') do
  expect(page).to have_content('Yoga')
  expect(page).to have_content('Aula cadastrada!')
  expect(current_path).to eq('/')
end

Dado('que existem aulas disponíves') do
  visit 'cadastrar'
  fill_in 'Email',	with: 'test@test.com'
  fill_in 'Senha',	with: '123456'
  click_button 'Cadastrar'

  fill_in 'Nome da aula',	with: 'Yoga'
  fill_in 'Link da Aula',	with: 'https://www.youtube.com/link-aula'
  fill_in 'Descrição da Aula',	with: 'Venha ficar flexível'
  click_button 'Salvar Cadastro'
end

Quando('o usuário entrar na listagem de aula') do
  visit '/'
  fill_in 'Busca',	with: ''
end

Então('todas as aulas cadastradas devem aparecer') do
  expect(page).to have_content('Yoga')
end
