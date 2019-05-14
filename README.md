# API Smart Parking
Api desenvolvido em NodeJS utilizando o banco de dados MongoSB Atlas.

Desenvolvida para ser utilizada na integração entre o App e o banco de dados.

## Rotas e Parâmetros

**/vagas** : Retorna todas as vagas gravadas no banco de dados.

**/vagas?pos=nVaga:** Retorna a vaga na qual foi filtrada.

  **Query Parms: nVaga**
  
    O Query Param nVaga deve conter o seguinte formato: @numeroDaVaga
    
*Exemplo*: **/vagas?pos=@1**

**/vagas?disp=Disponiblidade:** Retorna as vagas com a disponibilidade filtrada.

  **Query Parms: Disponiblidade**
  
    O Query Param Disponiblidade deve conter o seguinte formato: Inteiro de 1 há 3
      1 - Disponiveis
      2 - Reservadas
      3 - Oculpadas

*Exemplo*: **/vagas?disp=1**
