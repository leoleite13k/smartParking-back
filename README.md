# API Smart :parking:arking :car:
Api desenvolvida em NodeJS utilizando o banco de dados MongoDB.

Utilizada na integração entre o App e o banco de dados.


  ####  GET

    /vagas: Retorna um array com todos os objetos(vagas) gravadas no banco de dados.

    /vagas?pos=nVaga: Retorna um objeto com os dados da vaga na qual foi filtrada.
    
    /vagas?disp=Disponiblidade: Retorna um array de objetos com as vagas que tem a disponibilidade filtrada.
    
    /vagas/id: Retorna um objeto com os dados da vaga na qual foi filtrada.

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

    * Deve ser enviado somente as vagas Livres (Lidas pela câmera)
    
    /vagas: Grava no banco o array de objetos enviado de acordo com as seguintes regras:
    
    1 - Novas Vagas
      - Se o valor da key "pos" no objeto não existir no banco, a mesma é cadastrada no banco como disponível.
      
    2 - Vagas Livres
      - Se o valor da key "pos" no objeto exitir no banco e não extiver reservada, a mesma mudará para disponível.
      
    3 - Vagas Oculpadas
      - Se o valor da key "pos" no objeto exitir no banco e extiver oculpada, a mesma mudará para disponível.
      
    4 - Vagas Reservadas
      - Se não existir o valor da key "pos" no objeto e a pos exitir no banco e estiver como reservada, a mesma mudará para oculpada.
      
    

  ##### Corpo do objeto:

```javascript
[
  {
    "pos": "@numeroVaga"
  }
]
```
  
##### Exemplo
    /vagas
    
```javascript
[
  {
    "pos": "@1",
  },
  {
    "pos": "@2",
  }
]
```
---

  ####  PUT
  
    /vagas/id: Alterar a disponibilidade de uma vaga.
    
 ##### Corpo do objeto:

```javascript
{
  "disp": Disponibilidade
}
```
  
##### Exemplo
    /vagas/5cd733735b220f13b3cc6a98
    
```javascript
{
  "disp": 2
}
```
---

  ####  DELETE
  
    /vagas/id: Deleta a vaga.
    
 
##### Exemplos
    /vagas/5cd733735b220f13b3cc6a98

