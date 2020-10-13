#language:pt

Funcionalidade: Manter dados de Teacher através da API
Como um professor
Eu quero realizar as requisições na API
Para manipular as minhas informações de usuário

Cenário: Atualizar dados do professor
Dado que o professor esteja logado
Quando ele atualiza seus dados
Então quero que seus novos dados tenham sido salvos

Cenário: Apresentar dados do professor
Dado que o professor esteja logado
Quando ele entrar no seu perfil
Então quero que ele veja seus dados
