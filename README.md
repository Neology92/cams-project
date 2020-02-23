# #Projekt

#Project ist streaming platform without name yet. People intereste in erotic (or not really) content can watch there streamers, who provides that content.

## First Steps
### Instalation

1. Clone repo
```bash
git clone https://github.com/Neology92/cams-project.git cams-project
```
2. Instal dependecies

```bash
cd cams-project
npm install
```

### Run environmet


Start in development mode (runs client on port 3000 and server - with nodemon - on port 5000)
```bash
npm run dev
```

Start just server or client
```bash
npm run server
---
npm run client
```

## Contributing
If you're part of team, you're welcome to pull request to this repo. Simply create branch, that match the task, and after work - pull request to dev branch. If it passes review you'll meet the changes in repo soon.


## Repo structure
```
root
│
├── client
│     │
│     ├── assets
│     │     ├── styles
│     │     │     └── ...    
│     │     └── ...   
│     │
│     ├── components
│     │     └── ...      
│     └── pages
│           └── ...
└── server
      │── config
      │     └── ...    
      ├── models
      │     └── ...    
      │
      └── routes   
            │── api
            │    └── ...
            └── ...

```


