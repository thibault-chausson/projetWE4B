export class ActivitesPres {
  constructor(
    public nomActivite: string,
    public descriptionActivite: string,
    public dateActivite: string,
    public idActivite: string,
    public imagePath: any,
    public prix: number,) {

    this.nomActivite = nomActivite
    this.descriptionActivite = descriptionActivite
    this.dateActivite = dateActivite
    this.idActivite = idActivite
    this.imagePath = imagePath
    this.prix = prix
  }
}
