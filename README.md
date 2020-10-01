# PontoTel (front-end)

Projeto responsável pelo front-end do PontoTel

## Desenvolvimento

_Este projeto foi inicialmente buildado com [Create React App](https://github.com/facebook/create-react-app)_

Após clonar o repositório, instale as dependências do projeto:

```
yarn
```

Após a instalação das dependências, rode o projeto:

```
yarn start
```

Se estiver tudo certo você deverá ver em seu terminal a seguinte mensagem

```
Compiled successfully!

You can now view front-end in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://xxx.xxx.x.xx:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

E uma aba irá abrir automaticamente em seu navegador.

O comando `yarn start` irá servir a aplicação React em modo de desenvolvimento. **Não** utilize esse comando para subir para homol/prod.

### Buildando com Docker


```
docker build --tag frontend-pontotel --network host .
```

Esse comando cria uma imagem do front-end pronta para a execução.

```
docker run -d --name frontend-pontotel --network host --restart always frontend-pontotel
```

Esse comando utiliza a imagem para criar um container que contém o front-end.

```
docker container ls
```

Utilize esse comando para verificar se o container foi iniciado com sucesso.

```
docker logs frontend-pontotel
```

Para ver os logs do container.


### React Hooks

**TODOS** os componentes, por questão de atualização do React e Performance, utilizam o novo padrão de [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html).

### Estilos

Nosso projeto utiliza o framework de UI [Material-UI](https://material-ui.com/). Baseado nos componentes do Materialize e bem flexiveis.

Utilizei para tratar o CSS o [styled components](https://www.styled-components.com/).
