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
	http.HandleFunc("/challenge48h/bureau", pages.Enigme4Handler)
	http.HandleFunc("/challenge48h/morse", pages.MorseHandler)
	http.HandleFunc("/challenge48h/porte", pages.PorteHandler)
<<<<<<< HEAD
	http.HandleFunc("/challenge48h/suspect", pages.SuspectHandler)
=======
	http.HandleFunc("/challenge48h/bombe", pages.BombeHandler)
	http.HandleFunc("/challenge48h/appartement", pages.AppartHandler)
>>>>>>> d9f3f20b89456883136db47f0c35015172e76c61

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Le serveur est lancé http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
