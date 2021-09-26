
# Desafio Final do programa Gobeyond da Corebiz

Um Projeto passado como desafio para todos os participantes da 3° edição do progama Gobeyond, a recomendação foi que fosse feito com React.js e que fosse seguido um layout feito no AdobeXD

## O que foi Feito?
    
Foi desenvolvido um site a partir de um layout que até então encontra-se nesse link (AdobeXD-layout)[ https://xd.adobe.com/view/e100320d-9539-4cd9-9146-e27f75204e69-b453/]
nesse projeto foi preciso fazer uma requisição a uma API (link da API)[https://my-json-server.typicode.com/VitorHugoG/api-dados/dados ] que retornava um array de objetos JSON contendo um título , links de pequenas imagens(thumbnails) e imagens grandes que seriam os thumbnails em tamanhos maiores .
O titulo recebido na requisição, deveria ser mostrado dinamicamente na tela conforme fosse clicado na pequena imagem, e consequentemente a imagem maior deveria ser exibida também dinamicamente em tela. 
As informações dessa requisição foi exibida em tela conforme pedia no layout, abaixo é possível observar melhor:

- Informações vindas da API :
	``` [
  {
    "title": "Praticidade",
    "imgUrl": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&h=670&q=10",
    "thumb": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=10"
  },
  {
    "title": "Trabalho",
    "imgUrl": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&h=670&q=10",
    "thumb": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=10"
  },
  {
    "title": "Dedicação",
    "imgUrl": "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&h=670&q=10",
    "thumb": "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=10"
  },
  {
    "title": "#Gobeyond",
    "imgUrl": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&h=670&q=10",
    "thumb": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=10"
  }
]
```

- Como foram exibidas em tela:

        ![readme-section](https://user-images.githubusercontent.com/80721128/134786848-a558ccb5-a851-4dc3-bb8f-57af1d8079ca.jpg)
	

Além disso, o Layout deveria ser responsivo, comportando-se em diferentes tamanhos de telas de dispositivos, sendo assim temos abaixo as duas versões do mesmo projeto:
- Desktop
	![Versão Desktop ](https://whimsical.com/pt-corebiz-go-beyond-2021-final-challenge-XPcnF5FUkS6pFW9nveNr2h@2bsEvpTYFZsxPgJMiV7DsQXyGBbEqTWMpM2)

- Mobile
            	![Versão mobile](https://whimsical.com/pt-corebiz-go-beyond-2021-final-challenge-XPcnF5FUkS6pFW9nveNr2h@2bsEvpTYFZsxPPziWDvBMvvcSstgLUffk6Z)

## Como foi feito ?

O projeto foi desenvolvido usando React.js, CSS, HTML e Javascript .
A Requisição para a Api foi feita usando o método nativo "Fetch" e foi usado funções async await, recomendadas para gerar assincronismo ao fazer requisições e buscas,
assim evitamos travamentos desnecessários na Aplicação.
Foram usados abundantemente os displays flex e grid para que houvesse mais flexibilidade e celeridade no desenvolvimento do layout,
além disso para gerar o dinamismo das imagens e seus  títulos foram usados os Hooks de react : useState e useEffect.

## Como Rodar a Aplicação no seu local:

Caso queira rodar essa Aplicação no seu computador, deverá seguir os seguintes passos:
    
    1. Fazer o clone do repositório para a sua máquina;
    2. Abrir o editor de texto de sua preferência;
    3. Abrir o arquivo contendo o projeto no seu editor;
    4. Rodar o comando "npm install para instalar as dependencias do projeto;
    5. Rodar o comando "npm start" ou "yarn start" ,isso fará com que inicie 
       um servidor da porta 3000 e abrirá uma aba no navegador com o projeto rodando.

## Status
-[x] Todos os Resultados esperados foram alcançados

## Tecnologias Usadas:
- React.js
- JavaScript
- CSS
- HTML



### Author
 Bruno de Brito

