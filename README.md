# Gerenciador de Podcasts com Nodejs + TypeScript sem Framework| DIO

Neste projeto, foi desenvolvida uma API para gerenciar e consumir informações sobre podcasts, permitindo a listagem de todos os podcasts disponíveis e a consulta de um podcast específico. O desenvolvimento foi realizado utilizando apenas TypeScript com Node.js.

<table>
    <tr>
        <td>
            <b>Objetivo:</b>
            <p>Criar uma API RESTful, sem framework, que sirva dados de podcasts a partir de um arquivo JSON, oferecendo endpoints para listar podcasts e filtrar episódios, seguindo as melhores práticas de desenvolvimento com TypeScript.</p>
        </td>
    </tr>
</table>

---

## 🚀 Funcionalidades Principais

A API oferece as seguintes operações:

<table style="border-collapse: collapse; width: 100%; max-width: 900px;">
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🎧 Listar Podcasts
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Fornece uma lista de todos os podcasts disponíveis, retornando os dados em formato JSON. Opcionalmente, pode filtrar por um termo.
        </td>
    </tr>
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            ▶️ Filtrar Podcasts pelo nome
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Retorna o podcast específico com base no nome do podcast fornecido como parâmetro.
        </td>
    </tr>
</table>

---

## ⚙️ Endpoints Disponíveis

O servidor expõe os seguintes endpoints:

### 1. Listar Podcasts
- **Endpoint:** `GET /api/list`
- **Output:** Um array de objetos, onde cada objeto representa um podcast.

### 2. Filtrar Podcasts pelo nome
- **Endpoint:** `GET /api/episode`
- **Query Params (Opcional):** `p` (o nome do podcast, ex: `?p=hipsters`)
- **Output:** Um array com os episódios do podcast solicitado.

---

## 📦 Estrutura do Projeto

```
podcast-manager/
├── src/
│   ├── app.ts                  # Configuração do servidor HTTP
│   ├── server.ts               # Ponto de entrada da aplicação
│   ├── controllers/
│   │   └── podcast-controller.ts # Controladores da API
│   ├── models/
│   │   ├── podcast-dto.ts      # Data Transfer Objects
│   │   └── podcast.ts          # Modelos de dados
│   ├── repositories/
│   │   ├── podcast-repository.ts # Lógica de acesso aos dados
│   │   └── podcasts.json       # Arquivo de dados dos podcasts
│   ├── routes/
│   │   └── route.ts            # Definição das rotas
│   ├── services/
│   │   ├── service-filter-podcast.ts # Lógica para filtrar podcasts
│   │   └── service-list-episodes.ts  # Lógica para listar episódios
│   └── utils/
│       ├── http-methods.ts     # Utilitários de métodos HTTP
│       └── status-code.ts      # Mapeamento de status code e http methods
├── api.http                    
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Tipagem estática para JavaScript
- **Node.js** - Runtime JavaScript
- **tsx** - Executor TypeScript para desenvolvimento

---

## 📋 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pdro-h0/podcast-manager
```

### 2. Navegue até o diretório do projeto

```bash
cd podcast-manager
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo desenvolvimento

```bash
npm run dev
```

Após executar o comando, o servidor estará rodando, por padrão, em `http://localhost:8000`. Você pode usar um cliente de API (como o Postman ou o próprio `api.http` no VS Code) para fazer requisições.

---

## ✨ Recursos Especiais

- ✅ API REST para consulta de podcasts e episódios.
- ✅ Filtragem de podcasts por nome.
- ✅ Código modular e bem estruturado, separando responsabilidades (Controllers, Services, Repositories).
- ✅ Uso de TypeScript para um código mais robusto e manutenível.
- ✅ Servidor de desenvolvimento com hot-reload usando `tsx`.

---

Desenvolvido como desafio educacional da **DIO** - Digital Innovation One
