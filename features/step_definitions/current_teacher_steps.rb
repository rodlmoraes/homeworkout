Dado('que o professor tenha aulas cadastradas') do
  visit 'cadastrar'
  fill_in 'Nome',	with: 'Test'
  fill_in 'Email',	with: 'test@test.com'
  fill_in 'Senha',	with: '123456'
  click_button 'Cadastrar'

  fill_in 'Nome da aula',	with: 'Yoga'
  fill_in 'Link da Aula',	with: 'https://www.youtube.com/link-aula'
  fill_in 'Descrição da Aula',	with: 'Venha ficar flexível'
  click_button 'Salvar Cadastro'
end

Quando('ele visita a página com suas aulas') do
  visit '/suas-aulas'
end

Então('todas as aulas cadastradas devem aparecer') do
  expect(page).to have_content('Yoga')
  expect(page).to have_content('Venha ficar flexível')
end
