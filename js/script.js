var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops";
var upperCaseDinosaur = dinosaur.toUpperCase();
var arrayText = text.split(" ");
arrayText.splice([0], 1, upperCaseDinosaur);
var textNoComa = arrayText.join(' ');
var shortText = textNoComa.slice(0, text.length / 2);
console.log(textNoComa);
console.log(shortText);



