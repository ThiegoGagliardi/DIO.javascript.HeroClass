export class Hero {
    
    
  constructor (name, age, life, damage, attackType, url) {
      this.name  = name;
      this.age = age;
      this.life   = life;
      this.damage = damage;
      this.attackType = attackType;
      this.url  = url
    }
  
    
    Attack(){
        return `${this.name} atacou com ${this.attackType} e causos ${this.damage} de dano.`;
    }

    ReciveDamage(damage)
    {
      this.life -= damage
    }    
}

export class Ninja extends Hero {
    
    constructor (){
      super("Hanzo",28,80,18,"shuriken", "./src/assets/img/ninja.png")
    } 
}

export class Magician extends Hero {
    
    constructor (){
      super("Merlin",800,60,26," a magia Fire Ball","./src/assets/img/magician.png");
    } 
}

export class Warrior extends Hero {
    
    constructor (){
      super("Gutz",19,150,16,"a espada Dragon Slayer ","./src/assets/img/warior.png");
    }
}   

export class Monk extends Hero {
    
    constructor (){
      super("Lee",80,120,22," Soco Mata Tigre","./src/assets/img/monk.png");
    }     
}