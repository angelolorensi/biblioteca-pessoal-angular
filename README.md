# Biblioteca Pessoal - Angular e Laravel

Este é um projeto de Biblioteca Pessoal que utiliza o framework Angular e o Laravel PHP para o back-end. A aplicação permite a criação, edição, exclusão e listagem de livros. Ela também utiliza a API do Google Books para obter imagens dos livros.

## Recursos

- Adição de livros à sua biblioteca pessoal.
- Edição dos detalhes de livros existentes.
- Exclusão de livros da sua coleção.
- Listagem de todos os livros em sua biblioteca.
- Uso da API do Google Books para buscar informações de livros e imagens das capas.

## Tecnologias Utilizadas

- Angular: Front-end.
- Angular Material: Biblioteca de design para o Angular, usada para estilizar a aplicação.
- Laravel: Back-end.
- MySQL: Banco de dados.

## Pré-requisitos

- Node.js e npm instalados.
- Angular CLI instalado globalmente (`npm install -g @angular/cli`).
- PHP e Composer instalados para o backend Laravel.
- Banco de dados MySQL configurado e pronto para uso.

## Configuração

### Front-End (Angular)

1. Navegue até a pasta `angular-frontend` usando o terminal.
2. Execute `npm install` para instalar as dependências.
3. Configure a chave da API do Google Books em `src/environments/environment.ts`.
4. Execute `ng serve` para iniciar o servidor de desenvolvimento.

### Back-End (Laravel)

1. Navegue até a pasta `laravel-backend` usando o terminal.
2. Execute `composer install` para instalar as dependências do Laravel.
3. Crie um banco de dados MySQL e configure as credenciais em `.env`.
4. Execute `php artisan migrate` para criar as tabelas necessárias no banco de dados.
5. Execute `php artisan serve` para iniciar o servidor Laravel.

## Uso

1. Acesse o site no navegador em `http://localhost:4200` (ou a porta que você configurou para o Angular).
2. Explore as opções de adição, edição, exclusão e listagem de livros.
3. Utilize a busca para encontrar informações e imagens de livros da API do Google Books.

---

Desenvolvido por Angelo Lorensi Mozzaquatro 
