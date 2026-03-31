## Solutions des énigmes

> ⚠️ **Attention – Spoilers**  
> Ce fichier décrit les solutions complètes des différentes étapes.  
> Ne le lisez qu’en cas de blocage ou pour la correction.

---

### 2. Clé USB – Morse

- Un audio en morse est disponible.
- En décodant le message morse, on obtient le code de la porte :

> Code de la porte : `2568`

---

### 3. Bureau – Cookie caché

- Ouvrir les DevTools du navigateur (`F12`).
- Aller dans l’onglet `Application` > `Cookies`.
- Sélectionner le site `http://localhost:8080/`.
- Repérer le cookie `mdp_pc`.

> Valeur du cookie `mdp_pc` : `fyLoxDrQsUNiay2H`

---

### 4. PC / VM – Connexion

- Se rendre sur l’écran du PC / de la VM dans le jeu.
- Utiliser comme mot de passe la valeur trouvée dans le cookie `mdp_pc`.

> Mot de passe de connexion : `fyLoxDrQsUNiay2H`
- Ensuite aller sur 10.0.2.15 sur le navigateur de la VM.
- aller sur le fichier resolv.conf 
> ordre des fils de la bombe :  `jaune`, `bleu`, `vert`, `blanc`, `rouge`, `noir`
---

### 5. Bombe – Ordre des fils

- Sur l’interface de la bombe, plusieurs fils de couleurs différentes sont présents.
- À partir des indices disséminés dans les étapes précédentes, l’ordre correct des fils à couper est :

> Ordre des fils : `jaune`, `bleu`, `vert`, `blanc`, `rouge`, `noir`

