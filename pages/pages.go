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
