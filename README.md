Claro! Aqui está uma versão atualizada do README, incluindo instruções para criar um container Docker a partir do arquivo Dockerfile:

---

# Lista de Tarefas

Bem-vindo ao projeto **Lista de Tarefas**! Este aplicativo permite gerenciar suas tarefas de forma simples e eficiente, com uma interface amigável e funcionalidades práticas.

## Funcionalidades

### 1. Criar Tarefa
- **Título da tarefa**: Campo obrigatório.
- **Data**: Campo opcional.
- **Status**: Campo obrigatório (concluída ou não).
- Adicione novas tarefas facilmente preenchendo os campos.

### 2. Editar Tarefa
- Modifique as informações da tarefa, incluindo:
  - Data da tarefa.
  - Status da tarefa (concluída ou não).
  
### 3. Deletar Tarefa
- Exclua tarefas com um simples clique, garantindo um gerenciamento flexível.

### 4. Visualizar Tarefas
- Visualize a lista de tarefas com opções de filtro:
  - Mostrar tarefas concluídas.
  - Mostrar tarefas não concluídas.
  - Mostrar todas as tarefas.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar

### Executando Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/gus2222/Lista-de-Tarefas.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Lista-de-Tarefas
   ```
3. Abra o arquivo `index.html` em seu navegador.

### Executando com Docker

Se você deseja executar o aplicativo em um container Docker, siga os passos abaixo:

1. Certifique-se de que o Docker esteja instalado em seu sistema. Se não estiver, você pode baixar e instalar a partir do [site oficial do Docker](https://www.docker.com/get-started).

2. Navegue até o diretório do projeto (onde está o Dockerfile):
   ```bash
   cd Lista-de-Tarefas
   ```

3. Construa a imagem Docker:
   ```bash
   docker build -t lista-de-tarefas .
   ```

4. Execute o container:
   ```bash
   docker run -p 8080:80 lista-de-tarefas
   ```

5. Abra seu navegador e acesse `http://localhost:8080` para ver o aplicativo em funcionamento.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
