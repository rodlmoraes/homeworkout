#language:pt

Funcionalidade: Manter dados de Lessons através da API
Como um usuário do sistema
Eu quero realizar as requisições na API
Para manipular as informações das aulas cadastradas

Cenário: Criar uma aula
Dado que o professor esteja logado
Quando ele criar uma aula com todos os dados necessários
Então quero que a aula tenha sido criada

Cenário: Listar aulas
Dado que existem aulas disponíves
Quando ele entrar na listagem de aula
Então todas as aulas cadastradas devem aparecer
