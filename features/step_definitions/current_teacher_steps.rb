Dado('que o professor esteja logado') do
  teacher = FactoryBot.create(:teacher)
  visit 'entrar'
  fill_in 'Email',	with: teacher.email
  fill_in 'Senha',	with: teacher.password
  click_button 'Entrar'
end

Quando('ele atualiza seus dados') do
  pending # Write code here that turns the phrase above into concrete actions
end

Então('quero que seus novos dados tenham sido salvos') do
  pending # Write code here that turns the phrase above into concrete actions
end

Quando('ele entrar no seu perfil') do
  pending # Write code here that turns the phrase above into concrete actions
end

Então('quero que ele veja seus dados') do
  pending # Write code here that turns the phrase above into concrete actions
end
