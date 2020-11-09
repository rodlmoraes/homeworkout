Dado('que o usuário esteja na página principal') do
  visit '/'
end

Quando(/^o usuário clicar na aula '(.+)'$/) do |nome_aula|
  fill_in 'Busca',	with: nome_aula
  click_button nome_aula
end

Então(/^deverá aparecer '(.+)'$/) do |texto|
  expect(page).to have_content(texto)
end
