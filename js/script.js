var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops";
var upperCaseDinosaur = dinosaur.toUpperCase();
var rightsText = text.replace('Velociraptor',upperCaseDinosaur);
var textLenght = rightsText.length
var shortText = rightsText.slice(0,textLenght/2);

console.log(shortText);




