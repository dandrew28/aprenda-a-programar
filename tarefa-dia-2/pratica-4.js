let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
        let acrescimo = 100*1.2
    console.log ("A camiseta é internacional")
    console.log (acrescimo)
    
}   else {
        let acrescimo = 100*1.12
        console.log ("A camiseta é nacional")
        console.log (acrescimo)
        
}

if (produtoB.internacional == true) {
    let acrescimo = 200*1.2
console.log ("O perfume é internacional")
console.log (acrescimo)

}   else {
    let acrescimo = 200*1.12
    console.log ("O perfume é nacional")
    console.log (acrescimo)
    
}

if (produtoC.nacional == false) {
    let acrescimo = 120*1.2
console.log ("A sandalia é internacional")
console.log (acrescimo)

}   else {
    let acrescimo = 120*1.12
    console.log ("A sandalia é nacional")
    console.log (acrescimo)
    
}