var turma = ["Natan","Bruno","Lucas1","Lucas2"]

function random(min, max) {
    return Math.floor(Math.random()*(max - min)+ min) 
}

for(var i = 0; i < turma.length; i++){
    console.log(turma[random(0, turma.length)])
}
//como aleatorizar um array?