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

Dado('que existem aulas disponíveis') do
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

Quando('o usuário clicar no botão da aula') do
  click_button 'Detalhes'
end

Então('deverá aparecer o nome da aula') do
  expect(page).to have_content('Yoga')
end

Quando('ele visita a página com suas aulas e clica no botão de deletar uma aula') do
  visit '/suas-aulas'
  click_button 'delete'
end

Então('a aula deve ser deletada e não aparecer mais na página') do
  expect(page).not_to have_content('Yoga')
  expect(page).not_to have_content('https://www.youtube.com/link-aula')
  expect(page).not_to have_content('Venha ficar flexível')
end

Quando('ele visita a página de atualizar aulas e preenche novos dados') do
  visit '/suas-aulas'
  click_button 'update'

  fill_in 'Nome da aula',	with: 'Skate'
  fill_in 'Link da Aula',	with: 'https://www.youtube.com/skate'
  fill_in 'Descrição da Aula',	with: 'Venha ficar maneiro com skate'
  click_button 'Salvar Atualização'
end

Então('a aula deve ser atualizada') do
  expect(page).to have_content('Skate')
  expect(page).to have_content('https://www.youtube.com/skate')
  expect(page).to have_content('Venha ficar maneiro com skate')
end
