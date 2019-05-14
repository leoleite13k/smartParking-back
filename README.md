# API SmartParking
Api desenvolvido em NodeJS utilizando o banco de dados MongoSB Atlas.

Desenvolvida para ser utilizada na integração entre o App e o banco de dados.

## Rotas

*/vagas* : Retorna todas as vagas gravadas no banco de dados.

*/vagas?pos=nVaga* : Retorna a vaga na qual foi filtrada passando nVaga como Query Params.

  ### Validação Query Parms
    * 1 - O Query Param nVaga deve conter o seguinte formato: @numeroDaVaga

*/vagas?disp=Disponiblidade* : Retorna as vagas com a disponibilidade filtrada passando Disponiblidade como Query Params.

  ### Validação Query Parms
    * 1 - O Query Param Disponiblidade deve conter o seguinte formato: Inteiro de 1 há 3
      * 1 - Disponiveis
      * 2 - Reservadas
      * 3 - Oculpadas
