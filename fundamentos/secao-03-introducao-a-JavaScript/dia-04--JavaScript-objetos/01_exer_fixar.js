let player = {
  nome: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medals: { golden: 2, silver: 3 }, 
};


console.log("A jogadora " + player.nome + " da " + player.lastName + " tem " + player.age + "anos de idade.");
console.log("A jogadora " + player.nome + " da " + player.lastName + " foi eleita a melhor dop mundo por " + player['bestInTheWorld'].length + " vezes.");
console.log("A jogadora possui " + player.medals.golden + " de ouro " + player.medals.silver +" de prata ." );