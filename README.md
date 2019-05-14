# API Smart :parking:arking :car:
Api desenvolvido em NodeJS utilizando o banco de dados MongoDB Atlas.

Desenvolvida para ser utilizada na integração entre o App e o banco de dados.

### Rotas e Parâmetros

####  GET

    /vagas : Retorna todas as vagas gravadas no banco de dados.

    /vagas?pos=nVaga : Retorna a vaga na qual foi filtrada.

  ######  Query Parms: nVaga
  
      O Query Param nVaga deve conter o seguinte formato: @numeroDaVaga
    
  *Exemplo*: **/vagas?pos=@1**

    /vagas?disp=Disponiblidade : Retorna as vagas com a disponibilidade filtrada.

  ######  Query Parms: Disponiblidade
  
    O Query Param Disponiblidade deve conter o seguinte formato: Inteiro de 1 há 3
    
      1 - Disponiveis
      2 - Reservadas
      3 - Oculpadas

  *Exemplo*: **/vagas?disp=1**

    /vagas/id : Retorna a vaga na qual foi filtrada.

  ###### Parâmetro: id
  
    O Parâmetro id deve conter o seguinte formato: String
    
  *Exemplo*: **/vagas/5cd733735b220f13b3cc6a98**

  ####  POST

    /vagas : Grava no banco o objeto enviado.

  ######  Body
  
    Enviar um objeto do seguinte formato:
```javascript
  {
    "pos": "@23",
    "disp": 2
  }
```

  ####  PUT

  ####  DELETE


