# Simple Test

### Setup do projeto
Os seguintes comandos deverão ser executados: 

O comando abaixo baixa as dependências do sistema:
```sh
root_project $ composer install
```

O comando abaixo roda as migrações de banco de dados:
```sh
root_project $ php artisan migrate
```

O comando abaixo deve ser executado dentro da pasta 'public' do projeto. Nesse processo as dependêncais Javascript e CSS serão baixadas:
```sh
root_project/public $ bower install
```

### Configurado Banco de Dados
Na raiz do projeto existe um arquivo '.env.exemple', nesse arquivo há chaves para configuração do Banco de Dados. Obs: o arquivo deverá ser renomeado para apenas '.env' para que funcione adequadamente.


### Rodando em modo desenvolvimento
Na raiz do projeto, execute o comando abaixo para iniciar uma instância de banco de dados Mysql: 
```sh
root_project $ docker-compose up
```

Execute o comando abaixo para inicar um servidor http simples:
```sh
root_project $ php artisan serve
```