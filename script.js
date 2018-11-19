// on définit un array avec plein de chiffres
// var array1 = [25,27,87,97,82,1575,17,22,33,154,657,875];

// on declare une fonction permettant de ressortir
// le nombre le plus elevé contenu dans l'array


// function myMax(array){
// alert(Math.max.apply(null,array));
// }


// c'est la fonction Math.max.apply qui permet
// de ressortir le chiffre le plus grand de l'array
// on y met 2 arguments (null) et le 2eme
// (array) >>> ce que l'on va evaluer

// on appelle la fonction avec l'array qu'on veut
// evaluer

// myMax(array1);

// Ici on cree une fonction qui compte le
// nombre de voyelles
// a l interieur de la fonction on definit
// une variable v contenant l'argument + une
// methode match dans laquelle on met entre
// parentheses les 6 voyelles dans un
// array (avec // a la fin et au debut de
// l'array + g >>> qui cherche dans tout le string 
// + i pour le case sensitive)
// enfin on met un ternaire
//  return v === null ? 0 pour
// dire que si la condition est 
// verifiee et qu il y'a bien 0 voyelle ( donc par 
// defaut null ) , il faut
// retourner 0 au lieu de null , on met
// ensuite : pour dire si condition est false
// ( donc présence de voyelle ), indique moi
// le nombre de voyelles (v)

// function vowelCount(string) {
// var v = string.match(/[aeiouy]/gi);
// return v === null ? 0 : v.length;
// }

// Enfin on ecrit une fonction qui permet
// d'afficher un string à l'envers.
// pour cela on combine trois methodes 
// split qui permet de transformer le string
// en array ["h","e","l","l","o"] puis
// on utilise le reverse pour inverser chaque
// caractére contenu dans l'arret >>>
// ["o","l","l","e","h"] et enfin 
// on utilise join pour joindre tous les 
// elements contenus dans l'array sous forme
// de string

//  function reverse(string){
//  return string.split("").reverse().join("");
// }  	


