Dado('que um usuário do sistema queira ver informações dos desenvolvedores') do
  end
  
  Quando('ele entrar na página sobre-nos') do
    visit 'sobre-nos'
  end
  
  Então('As informações devem ser exibidas') do
    expect(page).to have_content('Homeworkout')
    expect(page).to have_content('Rogério')
    expect(page).to have_content('Rodrigo')
    expect(page).to have_content('Carolina')
    expect(page).to have_content('Julia')
    expect(page).to have_content('Vinícius')
    expect(page).to have_content('João')
    
  end