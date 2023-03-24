  var amigo = {nome:'Nicolas',sexo:'m',peso: 57.6, engordar(p=0)
  {
console.log(`engordou ${p}Kg`)
this.peso += p
  }}
amigo.engordar(15)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)