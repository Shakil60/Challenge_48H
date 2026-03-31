## Enquête interactive – Challenge 48h

Bienvenue dans une enquête policière en temps limité où votre objectif est simple : **déjouer un attentat et désamorcer une bombe** en résolvant une série d’énigmes logiques et techniques.

Cette application est une plateforme de défis interactifs où les joueurs progressent à travers plusieurs scènes (clé USB, bureau, PC, bombe, etc.) qui mobilisent des notions de **logique**, **algorithmique** et **cryptographie**.

Conçu dans le cadre d’un **challenge de 48h**, le projet met l’accent sur :
- **Une expérience immersive** sous forme de mini‑jeu.
- **Un fil narratif cohérent** autour de l’enquête.
- **Une montée en difficulté progressive** des énigmes.

## Pré-requis

- Go installé (voir la version dans `go.mod`, actuellement `go 1.25.5`).
- Le port `8080` doit être libre.

## Installation et lancement

1. **Cloner le projet**

```bash
git clone https://github.com/Shakil60/Challenge_48H.git
cd Challenge_48H
```

2. **Démarrer le serveur**

Depuis la racine du projet (`Challenge_48H`) :

```bash
go run .\main.go
```

Le serveur démarre sur `http://localhost:8080`.

## Gameplay (aperçu)

- **Accueil** : introduction de l’enquête et mise en situation.
- **Clé USB / Morse** : déchiffrer un message audio en morse pour obtenir un premier code.
- **Bureau** : fouiller l’interface et utiliser les outils du navigateur pour récupérer un mot de passe caché.
- **PC / VM** : utiliser les informations collectées pour accéder à une machine virtuelle.
- **Bombe** : appliquer les indices précédents pour couper les bons fils dans le bon ordre.

## Structure du projet

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

## Solutions

Les solutions détaillées des différentes étapes (morse, cookies, VM, bombe, etc.) sont centralisées dans le fichier `SOLUTIONS.md`.  
⚠️ **Attention** : ce fichier contient des spoilers, à consulter uniquement en cas de blocage ou pour la correction.