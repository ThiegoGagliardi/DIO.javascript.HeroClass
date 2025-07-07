export class Hero {
    
    
  constructor (name, age, life, damage, attackType, url, accuracy) {
      this.name  = name;
      this.age = age;
      this.life   = life;
      this.damage = damage;
      this.attackType = attackType;
      this.url  = url;
      this.accuracy = accuracy;
    }
  
    
    Attack(){
        return `${this.name} atacou com ${this.attackType} e causou ${this.damage} de dano.`;
    }

    ReciveDamage(damage)
    {
      this.life -= damage
    }    
}

export class Ninja extends Hero {
    
    constructor (){
      super("Hanzo",28,80,22,"shuriken", "./src/assets/img/ninja.png",0.5)
    } 
}

export class Magician extends Hero {
    
    constructor (){
      super("Merlin",800,60,28," a magia Fire Ball","./src/assets/img/magician.png",0.6);
    } 
}

export class Warrior extends Hero {
    
    constructor (){
      super("Gutz",19,150,20,"a espada Dragon Slayer ","./src/assets/img/warior.png",0.4);
    }
}   

export class Monk extends Hero {
    
    constructor (){
      super("Lee",80,120,18," Soco Mata Tigre","./src/assets/img/monk.png",0.2);
    }     
}