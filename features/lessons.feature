#language:pt

Funcionalidade: Manter dados de Lesson
Como um usuário do sistema
Eu quero ter acesso às aulas
Para interagir com aulas cadastradas

Cenário: Criar uma aula
Dado que o professor esteja cadastrado
Quando ele visita a página de cadastrar aulas e preenche o formulário
Então o cadastro da aula deve ser efetuado

Cenário: Deletar uma aula
Dado que o professor tenha aulas cadastradas
Quando ele visita a página com suas aulas e clica no botão de deletar uma aula
Então a aula deve ser deletada e não aparecer mais na página

Cenário: Ver lista de aulas
Dado que existem aulas disponíveis
Quando o usuário entrar na listagem de aula
Então todas as aulas cadastradas devem aparecer

Cenário: Ver o vídeo de uma aula específica
Dado que existem aulas disponíveis
Quando o usuário clicar no botão da aula
Então deverá aparecer o nome da aula