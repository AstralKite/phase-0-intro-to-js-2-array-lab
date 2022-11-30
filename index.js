const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newCat){
    cats.push(newCat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(cat){
    return [...cats, cat];
}

function prependCat(cat){
    return [cat, ...cats];
}

function removeLastCat(cat){
    return cats.slice(0, 2);
}

function removeFirstCat(cat){
    return cats.slice(1);
}