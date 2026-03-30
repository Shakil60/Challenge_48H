package templates

import (
	"html/template"
	"log"
	
)

// Variable globale pour stocker les templates
var Tpl *template.Template

// Fonction d'initialisation des templates HTML
func InitTemplates() {
	var err error
	Tpl, err = template.ParseGlob("templates/*.html") // Charge tous les fichiers .html du dossier templates
	if err != nil {
		log.Fatal("Erreur lors du chargement des templates :", err) // Arrête le programme en cas d'erreur
	}
}