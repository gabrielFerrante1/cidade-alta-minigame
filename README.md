
# 🎮 Desafio Front-End (Minigame)

## 📝 Descrição do Projeto

Este projeto é um desafio técnico para o processo seletivo da Cidade Alta. O minigame, criado em ReactJS e TypeScript, tem como objetivo desafiar o jogador a seguir uma sequência aleatória de teclas o mais rápido possível. Dessa forma, o jogador deve reagir rapidamente e corretamente dentro de um tempo limite.

## 🛠️ Tecnologias Utilizadas

- **[ReactJS:](https://react.dev)** Biblioteca JavaScript para criar interfaces de usuário.
- **[TypeScript:](https://www.typescriptlang.org)** Superset do JavaScript que adiciona tipagem estática ao código.
- **[Vite:](https://vitejs.dev)** Ferramenta de build rápida e moderna para projetos front-end.
- **[React Router:](https://reactrouter.com/en/main)** Utilizado para gerenciar a navegação entre páginas.
- **[Tailwind CSS:](https://tailwindcss.com)** Framework para estilização rápida e responsiva utilizando classes utilitárias.
- **[Framer-Motion:](https://www.framer.com/motion/)** Biblioteca para animações suaves e interativas em React.
- **[Zustand:](https://zustand-demo.pmnd.rs)** Biblioteca leve para gerenciamento de estado global.
- **[Lucide React:](https://lucide.dev)** Conjunto de ícones em SVG para uso em interfaces React.

## ⚙️ Lógica e Funcionalidades do Jogo

1. **Geração de Sequência:**
   - Ao iniciar o jogo, uma sequência de teclas será gerada (de A a Z e de 1 a 9).

2. **Jogabilidade:**
   - O jogador deve pressionar as teclas na ordem correta. Caso acerte, um efeito sonoro será emitido e a próxima tecla será destacada com uma borda amarela.
   - Caso o jogador pressione a tecla incorreta, um efeito sonoro de erro será emitido e uma tentativa será adicionada.

3. **Limite de Tentativas e Tempo:**
   - O jogador tem um limite de tentativas: 1 tentativa para uma sequência de 6 teclas e 2 tentativas para uma sequência de 12 teclas.
   - Se o jogador esgotar o limite de tentativas ou o tempo se esgotar, o jogo será finalizado.

4. **Pausa e Continuidade:**
   - O jogador pode pausar o jogo a qualquer momento, mudar de página e até mesmo atualizar a página, pois o progresso será salvo localmente.

5. **Reinício:**
   - Um botão de reinício estará sempre disponível para recomeçar a partida.

6. **Ranking Local:**
   - Um ranking local mostrará as três melhores partidas, exibindo o tempo de jogo, o número de tentativas e a data da partida.

7. **Tema:**
   - No jogo, é possível alterar o tema para claro (light) e escuro (dark).

## 🚀 Instruções para Rodar o Projeto

### Pré-requisitos

- Node.js instalado em sua máquina. [Download Node.js](https://nodejs.org/)

### Passos para Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabrielFerrante1/cidade-alta-minigame.git
3. Instale as dependências do projeto:

   ```
   npm install
5. Execute o projeto:

	``` 
	 npm run dev
