#language:pt

Funcionalidade: Ver aulas pelo site
	Quando um usuário gosta de uma aula, ele pode clicar nela para assisti-la

	Cenário: Ver o vídeo de uma aula específica
		Dado que o usuário esteja na página principal
		Quando o usuário clicar na aula '<nome_aula>'
		Então deverá aparecer '<nome_aula>'
		E deverá aparecer '<link>'

		Exemplos:
			| nome_aula | link      |
			| Zumba 101 | zumbalink |

