package main

import (
	"fmt"
	"net/http"
	"templates/pages"
	"templates/templates"
)

func main() {
	templates.InitTemplates()
	http.HandleFunc("/", pages.AccueilHandler)
	http.HandleFunc("/morse", pages.MorseHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Le serveur est lancé http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
