import  * as heros from './hero.js';
import  * as monster from './monster.js';

document.addEventListener('DOMContentLoaded', () => {

    const state = {
        view:{
            heroSelected : document.getElementById("character-combo"),
            start        : document.getElementById("start-game-button"),
            attack       : document.getElementById("attack-button"),
            action       : document.getElementById("action"),
            hero         : document.getElementById("hero"),
            monsterimg   : document.getElementById("monster"),            
            heroimg      : document.getElementById("hero").querySelector("img")
        },
        value : {
            hero : new heros.Hero(),
            monster : new monster.Monster()
        }
    }

    function CreateHero(){
       
        if (state.view.heroSelected.value === 'ninja'){
            state.value.hero = new heros.Ninja();            
            state.view.heroimg.src = state.value.hero.url;
        }

        if (state.view.heroSelected.value === 'guerreiro' ){
            state.value.hero =  new heros.Warrior();            
            state.view.heroimg.src = state.value.hero.url;
        }

        if (state.view.heroSelected.value === 'mago' ){
            state.value.hero =  new heros.Magician();            
            state.view.heroimg.src =  state.value.hero.url;
        }         
    }

    async function Attack(){
      
        
      state.view.attack.style.display  = "none";

      const heroRandom = Math.random();

      const hitThreshold = 0.5;

      if (heroRandom > hitThreshold) {
        
        state.value.monster.ReciveDamage(state.value.hero.damage);
        state.view.action.textContent = state.value.hero.Attack();    

      } else{
        state.view.action.textContent = `${state.value.hero.name} errou o ataque`;
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      const monsterRandom = Math.random();

      if (monsterRandom > hitThreshold) {
        
        state.value.hero.ReciveDamage(state.value.monster.damage);
        state.view.action.textContent = state.value.monster.Attack();    
        
      }else{
        state.view.action.textContent = `Monstro errou o ataque`;
      }

      if (state.value.hero.life <= 0){

          state.view.action.textContent = `Você Perdeu.`;
          state.view.heroimg.src = "";          
          return;
      }
        
      if (state.value.monster.life <= 0){

          state.view.action.textContent = `Você Ganhou.`;
          state.view.monsterimg.src = "";
          return;
      } 

      await new Promise(resolve => setTimeout(resolve, 2000));
      state.view.action.textContent    = "";
      state.view.attack.style.display  = "";

    }
    
    state.view.start.addEventListener('click',CreateHero);
    state.view.attack.addEventListener('click',Attack);
});