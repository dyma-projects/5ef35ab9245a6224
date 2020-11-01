import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public result: number = 0;
  // Initialisation à 0 :
  valeur = 0;

  ngOnInit() {}

  // Méthode exécutée à chaque événement reçu :
  miseAjourCompteur(event) {
    this.result = event.value;
  }
}
