-----

# Desvendando o Reino dos Heróis: Classes de Jogo em JavaScript

Bem-vindo(a) ao repositório do projeto "Escrevendo as Classes de um Jogo", desenvolvido como parte do bootcamp de JavaScript da DIO\! Este projeto tem como objetivo principal a aplicação de conceitos fundamentais da programação orientada a objetos em JavaScript, criando um sistema de classes para heróis em um jogo de aventura.

-----

## 🚀 Sobre o Projeto

Neste desafio, você encontrará a implementação de uma classe genérica `Heroi` que representa os personagens do nosso jogo. Cada herói possui características como **nome**, **idade** e **tipo** (guerreiro, mago, monge, ninja). Além disso, a classe conta com um método `atacar` que simula o ataque do herói, exibindo uma mensagem personalizada de acordo com o seu tipo.

O projeto foi construído para reforçar o aprendizado e a utilização dos seguintes conceitos de JavaScript:

  * **Variáveis**: Para armazenar informações sobre os heróis.
  * **Operadores**: Para realizar operações lógicas e de atribuição.
  * **Laços de repetição**: (Opcional, mas útil para criar múltiplos heróis ou simular turnos).
  * **Estruturas de decisões**: Para definir o tipo de ataque com base no tipo do herói.
  * **Funções**: Para encapsular lógicas reutilizáveis.
  * **Classes e Objetos**: O pilar central do projeto, permitindo a criação de modelos para nossos heróis.

-----

## 🎯 Objetivo

O desafio consistiu em:

1.  **Criar uma classe genérica `Heroi`** com as propriedades `nome`, `idade` e `tipo`.
2.  **Implementar um método `atacar`** dentro da classe `Heroi`.
3.  **Personalizar a mensagem de ataque** do método `atacar` de acordo com o `tipo` do herói:
      * **Mago**: "usou magia"
      * **Guerreiro**: "usou espada"
      * **Monge**: "usou artes marciais"
      * **Ninja**: "usou shuriken"

A saída esperada ao chamar o método `atacar` para um herói deve ser no formato: `"o {tipo} atacou usando {ataque}"`.

-----

## 🛠️ Como Executar

Para testar o projeto localmente, siga os passos abaixo:

1.  **Clone este repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-do-repositorio
    ```
3.  **Abra o arquivo JavaScript** (geralmente `index.js` ou `main.js`) em seu ambiente de desenvolvimento.
4.  **Execute o código** usando Node.js no terminal:
    ```bash
    node seu_arquivo.js
    ```
    Ou abra o arquivo HTML (se houver um para visualização no navegador) em seu navegador.

-----

## ✨ Exemplo de Uso

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando alguns heróis
const mago = new Heroi("Merlin", 1000, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Li", 50, "monge");
const ninja = new Heroi("Hanzo", 25, "ninja");

// Realizando ataques
mago.atacar();       // Saída: O mago atacou usando magia
guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
monge.atacar();      // Saída: O monge atacou usando artes marciais
ninja.atacar();      // Saída: O ninja atacou usando shuriken
```

-----

## 🤝 Contribuições

Este projeto é uma demonstração de aprendizado e, embora seja um exercício do bootcamp, sugestões e melhorias são sempre bem-vindas\!

-----

Espero que este README seja útil para você entender e explorar o projeto\! Se tiver alguma dúvida ou sugestão, fique à vontade para abrir uma issue ou entrar em contato.