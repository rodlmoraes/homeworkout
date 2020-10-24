# HomeWorkout

[![Maintainability](https://api.codeclimate.com/v1/badges/e1b8cbb4f1b371cae496/maintainability)](https://codeclimate.com/github/rodlmoraes/homeworkout/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e1b8cbb4f1b371cae496/test_coverage)](https://codeclimate.com/github/rodlmoraes/homeworkout/test_coverage)
[![Build Status](https://travis-ci.org/rodlmoraes/homeworkout.svg?branch=main)](https://travis-ci.org/rodlmoraes/homeworkout)

**Aplicação:** https://arcane-fjord-39570.herokuapp.com/

**PivotalTracker:** https://www.pivotaltracker.com/n/projects/2466931

**Projetos anteriores:** https://github.com/rodlmoraes/esi-project-interface
                         https://github.com/CarolGalvao/esi-project 

## Integrantes

- Carolina Galvão de Oliveira - 10724135
- João Francisco Cocca Fukuda - 10843566
- Júlia Cristina de Brito Passos - 10723840
- Rodrigo Lima de Moraes - 10724420
- Rogério Ferreira Dos Santos - 10687882
- Vinícius Bueno de Carvalho Rodrigues - 10346770

## Problema

Facilitar a comunicação entre educadores físicos e pessoas que querem fazer exercícios

## Docs

### Para rodar o projeto
```
rails s
```
Rodar o comando a baixo em uma aba separada do terminal para ter o live-reload no javascript, caso contrário é necessário recarregar a página
```
./bin/webpack-dev-server
```

### Auth API

```
POST /api/teacher_auth - cadastro - body:
{
	"email": "prof@email.com",
	"password": "senha",
	"password_confirmation": "senha"
}
```
```
POST /api/teacher_auth/sign_in - login - body:
{
	"email": "prof@email.com",
	"password": "senha"
}
```
```
DELETE /api/teacher_auth/sign_out - logout
```

todo request authenticado precisa de uid, client, e access-token no header, eles vem no header do cadastro ou do login

### Lessons API

```
GET / redireciona para /api/lessons
```
```
GET /api/lessons - retorna as aulas e os professores atribuidos a elas (não precisa de autenticação)
```
```
POST /api/lessons - criar uma aula - body:
"lesson": {
	"name": "yoga",
	"description": "zen",
	"link": "www.google.com/yoga"
}
```

### Current Teacher API

```
GET /api/current_teacher/:id - retorna o professor que está autenticado
```
```
PUT /api/current_teacher/:id - atualiza dados do professor - body:
"teacher": {
	"name": "joaninha de fogo",
	"email": "joana@email.com"
}
```

### Sobre o Cucumber
O webpacker as vezes está compilando para testes o ambiente de desenvolvimento, caso tenha problemas com isso executar
```
rm -rf public/packs*/
```
```
RAILS_ENV=test NODE_ENV=test bundle exec rails webpacker:compile
```
