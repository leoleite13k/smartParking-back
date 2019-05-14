# API Smart :parking:arking :car:
Api desenvolvido em NodeJS utilizando o banco de dados MongoDB Atlas.

Desenvolvida para ser utilizada na integração entre o App e o banco de dados.


  ####  GET

    /vagas: Retorna todas as vagas gravadas no banco de dados.

    /vagas?pos=nVaga: Retorna a vaga na qual foi filtrada.
    
    /vagas?disp=Disponiblidade: Retorna as vagas com a disponibilidade filtrada.
    
    /vagas/id: Retorna a vaga na qual foi filtrada.

##### Parâmetros
    nVaga: O Query Param nVaga deve conter o seguinte formato: @numeroDaVaga
    
    Disponiblidade: O Query Param Disponiblidade deve conter o seguinte formato: Inteiro de 1 há 3
      1 - Disponiveis
      2 - Reservadas
      3 - Oculpadas

    id: O Parâmetro id deve conter o seguinte formato: String
    
##### Exemplos
    /vagas
    /vagas?disp=1
    /vagas?pos=@1
    /vagas/5cd733735b220f13b3cc6a98 
---

  ####  POST

    /vagas: Grava no banco o objeto enviado.

  ##### Corpo do objeto:

  ```javascript
    {
      "pos": "@Vaga",
      "disp": Disponibilidade
    }
  ```
  
##### Exemplos
    /vagas
    {
      "pos": "@8",
      "disp": 1
    }
---

  ####  PUT
  
    /vagas/id: Alterar a disponibilidade de uma vaga.
    
 ##### Corpo do objeto:

  ```javascript
    {
      "disp": Disponibilidade
    }
  ```
  
##### Exemplos
    /vagas/5cd733735b220f13b3cc6a98
    {
      "disp": 2
    }
---

  ####  DELETE
  
    /vagas/id: Deleta a vaga.
    
 
##### Exemplos
    /vagas/5cd733735b220f13b3cc6a98

