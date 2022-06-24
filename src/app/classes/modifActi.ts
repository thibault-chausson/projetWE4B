export class ModifActi {
  constructor(
    public adresse1: string,
    public adresse2: string,
    public codePostal: string,
    public ville: string,
    public telephone: string,
    public domaine: string,
    public categorie: string,
    public jour: string,
    public pays: string,
    public nomResponsable: string,
    public prix: number,
    public nomActivite: string,
    public descriptionActivite: string,
    public idActivite: any,
    public image1: any,
    public image2: any,
    public image3: any,
    public image4: any,
    public image5: any,
  ) {

    this.adresse1 = ''
    this.adresse2 = ''
    this.codePostal = ''
    this.ville = ville
    this.telephone = telephone
    this.domaine = domaine
    this.categorie = categorie
    this.jour = jour
    this.pays = pays
    this.nomResponsable = nomResponsable
    this.prix = prix
    this.nomActivite = ''
    this.descriptionActivite = descriptionActivite
    this.idActivite = idActivite
    this.image1 = image1
    this.image2 = image2
    this.image3 = image3
    this.image4 = image4
    this.image5 = image5
  }
}
