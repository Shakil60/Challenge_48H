## Pré-requis
- Go installé (version `go 1.25.5` dans `go.mod`).
- Le port `8080` doit être libre.
- Un navigateur pour ouvrir l’URL du serveur.

## Lancer le site
Depuis la racine du projet (`Challenge_48H`) :
```bash
go run .
```

Le serveur démarre sur `http://localhost:8080`.

Raccourcis de navigation :
- `/` : accueil
- `/enigme4` et `/challenge48h/bureau` : énigme 4
- `/challenge48h/morse` : morse
- `/challenge48h/porte` : porte
- Les fichiers statiques sont servis sous `/static/`

## Arborescence
```text
.
├─ main.go
├─ go.mod
├─ pages/
│  └─ pages.go
├─ templates/
│  ├─ templates.go
│  ├─ accueil.html
│  ├─ enigme4.html
│  ├─ morse.html
│  └─ porte_a_code.html
└─ static/
   ├─ css/
   │  ├─ accueil.css
   │  ├─ enigme4.css
   │  ├─ morse.css
   │  └─ porte_a_code.css
   └─ js/
      └─ enigme4.js
```

## Solution
