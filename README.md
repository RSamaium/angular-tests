Exercice : Écrivez un test unitaire pour vérifier la méthode addUser de UserService.

1. Créez une instance de UserService.
2. Appelez la méthode addUser en fournissant un nouvel objet utilisateur avec toutes les propriétés requises: name and email. Lancer une erreur si une des propriétés n'a pas été renseignée
3. Vérifiez que la méthode ajoute correctement l'utilisateur à la liste d'utilisateurs interne du service.
4. Vérifiez que la méthode génère une erreur si l'objet utilisateur n'a pas toutes les propriétés requises ou si elles sont vides ou incorrectes. 

> Aide Jasmine (https://jasmine.github.io/api/edge/matchers)
expect(() => ....).toThrowError()
toContain()