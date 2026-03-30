package pages

import (
	"log"
	"net/http"
	"templates/templates"
)

func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "accueil", nil)
	if err != nil {
		log.Println("Erreur template accueil:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func Enigme4Handler(w http.ResponseWriter, r *http.Request) {
    http.SetCookie(w, &http.Cookie{
        Name:  "mdp_pc",
        Value: "fyLoxDrQsUNiAy2H",
        Path:  "/enigme4",
    })
    err := templates.Tpl.ExecuteTemplate(w, "enigme4", nil)
    if err != nil {
        log.Println("Erreur template enigme4:", err)
        http.Error(w, "Erreur serveur", http.StatusInternalServerError)
    }
}
func PorteHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "porte", nil)
	if err != nil {
		log.Println("Erreur template porte:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func MorseHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "morse", nil)
	if err != nil {
		log.Println("Erreur template accueil:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}
