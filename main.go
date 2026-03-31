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
// 0199764e8ea55f7e62eb0917bc40e7fa79edf1dd
	http.HandleFunc("/enigme4", pages.Enigme4Handler)

	http.HandleFunc("/morse", pages.MorseHandler) // TODO: Implement MorseHandler in pages package
	http.HandleFunc("/porte", pages.PorteHandler) // TODO: Implement PorteHandler in pages package

// 0199764e8ea55f7e62eb0917bc40e7fa79edf1dd
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Le serveur est lancé http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
