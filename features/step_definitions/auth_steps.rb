Dado('que um usuário do sistema queira se cadastrar') do
  visit 'cadastrar'
end

Quando('ele insere seu email e senha') do
  fill_in 'Nome', with: 'Test'
  fill_in 'Email', with: 'test@test.com'
  fill_in 'Senha', with: '123456'
  click_button 'Cadastrar'
end

Então('o cadastro deve ser efetuado') do
  expect(page).to have_content('Cadastro de Aula')
  expect(page).to have_content('Você se cadastrou!')
  expect(current_path).to eq('/cadastrar-aula')
end
