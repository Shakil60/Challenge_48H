## Pré-requis
- Go installé (version `go 1.25.5` dans `go.mod`).
- Le port `8080` doit être libre.

## Lancer le site
1. Cloner le projet :
```bash
git clone <https://github.com/Shakil60/Challenge_48H.git>
cd Challenge_48H
```
2. Lancer le site depuis la racine du projet (`Challenge_48H`) :
```bash
go run .
```

Le serveur démarre sur `http://localhost:8080`.

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
