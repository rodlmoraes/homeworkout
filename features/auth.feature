#language:pt

Funcionalidade: Manter dados de sessão através de cadastro
Como um usuário do sistema
Eu quero conseguir criar uma conta, entrar e sair dela
Para manipular as minhas informações e aulas com segurança

Cenário: Fazer cadastro do professor
Dado que um usuário do sistema queira se cadastrar
Quando ele insere seu email e senha
Então o cadastro deve ser efetuado

Cenário: Professor entrar na plataforma
Dado que o usário já possui um cadastro na plataforma
Quando ele clicar em 'Entrar'
E inserir seu email e senha
Então deve entrar na plataforma

Cenário: Professor entrar na plataforma com usuário invalido
Dado que o usário já possui um cadastro na plataforma
Quando ele clicar em 'Entrar'
E inserir seu email errado
Então deve aparecer uma menssagem de 'Erro ao tentar entrar'

Cenário: Professor entrar na plataforma com senha errada
Dado que o usário já possui um cadastro na plataforma
Quando ele clicar em 'Entrar'
E inserir sua senha errada
Então deve aparecer uma menssagem de 'Erro ao tentar entrar'
