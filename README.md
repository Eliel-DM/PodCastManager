<<<<<<< HEAD
# 🎙️ API Organizar PodCasts

Esta é uma API para listar e filtrar episódios de podcasts com base em um repositório local de dados.

## 📌 Funcionalidades

- Listar todos os episódios de podcasts disponíveis.
- Filtrar episódios por nome do podcast.
- Retornar os dados no formato JSON.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **HTTP Module (nativo do Node.js)**
- **File System (fs) para leitura de arquivos JSON**

## 📂 Estrutura do Projeto

```
📦 src
 ┣ 📂 controllers
 ┃ ┗ 📜 podcast-controller.ts
 ┣ 📂 models
 ┃ ┣ 📜 filter-podcast-model.ts
 ┃ ┗ 📜 podcast-model.ts
 ┣ 📂 repositories
 ┃ ┣ 📜 podcasts.json
 ┃ ┗ 📜 podcasts-repository.ts
 ┣ 📂 routes
 ┃ ┗ 📜 routes.ts
 ┣ 📂 services
 ┃ ┣ 📜 filter-episodes-service.ts
 ┃ ┗ 📜 list-episodes-service.ts
 ┣ 📂 utils
 ┃ ┣ 📜 content-type.ts
 ┃ ┣ 📜 http-methods.ts
 ┃ ┗ 📜 status-code.ts
 ┣ 📜 app.ts
 ┣ 📜 server.ts
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

## 📌 Como Executar

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/Eliel-DM/PodCastManager.git
cd PodCastManager.git
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Executar o Servidor

```bash
npm run start-dev // Para rodar normalmente
npm run start-watch // Para que seja reiniciado a cada alteração de forma automática
```

O servidor rodará por padrão em `http://localhost:process.env.PORT` // Defiina esse valor no seu arquivo .env .

## 📌 Endpoints

    LIST = "/api/list",
    EPISODE = "/api/episode",


### 🔹 Listar Todos os Episódios

**Rota:**

```
GET /api/list
```

**Exemplo de Resposta:**

```json
{
  "statusCode": 200,
  "body":[
    {
        "podcastname": "FlowPodcast",
        "episode": "GABRIEL PATO - Flow Podcast #182",
        "videoID": "TtAH6xGbvIQ",
        "cover": "https://i.ytimg.com/vi/TtAH6xGbvIQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC2t7dADaT2rYgdGdZQjJ6VihtjEA",
        "link": "https://www.youtube.com/watch?v=TtAH6xGbvIQ&pp=ygUWcG9kY2FzdCBnYWJyaWVsICBwYXRvIA%3D%3D",
        "categories": [
            "tecnology",
            "hacker"
        ]
    },
    {
        "podcastname": "FalaGlauberPodcast",
        "episode": "SGT DIAS - CAVEIRA COMANDOS - BOPE PMGO - Fala Glauber Podcast #265",
        "videoID": "x2_fR_8tSCM",
        "cover": "https://i.ytimg.com/vi/x2_fR_8tSCM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCKvbVnmofl6Pa3Tv5zPQOJqlNdag",
        "link": "https://www.youtube.com/watch?v=x2_fR_8tSCM&t=11354s",
        "categories": [
            "seguranca_publica",
            "militar"
        ]
    }
]
}
```

### 🔹 Filtrar Episódios por Nome do Podcast

**Rota:**

```
GET /podcasts?p={nome_do_podcast}
```

**Exemplo de Requisição:**

```
GET /podcasts?p=FlowPodcast
```

**Exemplo de Resposta:**

```json
{
  "statusCode": 200,
  "body": [
    {
      "podcastname": "FlowPodcast",
      "episode": "GABRIEL PATO - Flow Podcast #182",
      "videoID": "TtAH6xGbvIQ",
      "cover": "https://i.ytimg.com/vi/TtAH6xGbvIQ/hq720.jpg",
      "link": "https://www.youtube.com/watch?v=TtAH6xGbvIQ",
      "categories": ["tecnologia", "hacker"]
    }
  ]
}
```

### 🔹 Status Codes

| Código | Significado                              |
| ------ | ---------------------------------------- |
| 200    | OK - Requisição bem-sucedida             |
| 204    | No Content - Nenhum conteúdo encontrado  |

---
=======
# PodCastManager
Esta é uma API para listar e filtrar episódios de podcasts com base em um repositório local de dados.
>>>>>>> d6450db5ccd9814e4e5c3584d2fc43cd94012545
