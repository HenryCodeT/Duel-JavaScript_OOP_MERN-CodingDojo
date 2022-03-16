class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    play(target){
        this.stat='power'?target.res += this.magnitude:target.power += this.magnitude;
    }
}

console.log("******************** El jugador 1 convoca a Ninja Cinturón Rojo **********************");
const jugador1 = new Unit("Ninja Cinturón Rojo",3,3,4);
console.log(jugador1);
console.log("********** El jugador 1 juega Algoritmo duro en Ninja Cinturón Rojo ******************");
const algoritmoDificil = new Effect("Algoritmo Difícil",2,"aumentar la resistencia del objetivo en 3","Resiliencia",3);
console.log(algoritmoDificil);
algoritmoDificil.play(jugador1);
console.log(jugador1);
console.log("******************** El jugador 2 convoca a Ninja Cinturón Negro **********************");
console.log("El jugador 2 convoca a Ninja Cinturón Negro");
const jugador2 = new Unit("Ninja Cinturón Negro",4,5,4);
console.log(jugador2);
console.log("******** 	El jugador 2 juega Rechazo de promesa no controlada en Ninja Cinturón Rojo ********");
const rechazoPromesa = new Effect("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","Resiliencia",-2);
rechazoPromesa.play(jugador2);
console.log(jugador2);
console.log("******	El jugador 1 tiene el ataque Ninja Cinturón Rojo => Ninja Cinturón Negro **********");
jugador1.attack(jugador2);
console.log(jugador1);
console.log(jugador2);