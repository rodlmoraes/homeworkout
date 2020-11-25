Dado('que um usuário queira ver as informações dos desenvolvedores e da empresa') do
  true
end

Quando('ele entrar na página sobre nós') do
  visit 'sobre-nos'
end

Então('as informações dos desenvolvedores e da empresa devem ser mostradas') do
  expect(page).to have_content('Homeworkout')
  expect(page).to have_content('Rodrigo')
  expect(page).to have_content('Rogério')
  expect(page).to have_content('Carolina')
  expect(page).to have_content('Júlia')
  expect(page).to have_content('Vinícius')
  expect(page).to have_content('João')
end
