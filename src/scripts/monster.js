export class Monster {
    
    constructor(){

      this.life = 30;
      this.damage= 5;
      this.attackType = "Stratch";
    } 

    Attack(){
        return `Monster atacou com ${this.attackType} e causos ${this.damage} de dano.`;
    }

    ReciveDamage(damage)
    {
      this.life -= damage;
    }
}
