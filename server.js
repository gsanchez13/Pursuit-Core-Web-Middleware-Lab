const express = require("express");
const cors = require("cors");
const server = express();
const port = 8080;
const mathMods = require("./mathMods.js")

server.listen(port);
server.use(cors());

//  question 1 -------------------------------------------------------------------------------

const arr = [ "Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape", "Armadillo", "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Boar", "Buffalo", "Butterfly", "Camel", "Capybara", "Caribou", "Cassowary", "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Curlew", "Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin", "Dotterel", "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin", "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur", "Gazelle", "Gerbil", "Giraffe", "Gnat", "Gnu", "Goat", "Goldfinch", "Goldfish", "Goose", "Gorilla", "Goshawk", "Grasshopper", "Grouse", "Guanaco", "Gull", "Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena", "Ibex", "Ibis", "Jackal", "Jaguar", "Jay", "Jellyfish", "Kangaroo", "Kingfisher", "Koala", "Kookabura", "Kouprey", "Kudu", "Lapwing", "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust", "Loris", "Louse", "Lyrebird", "Magpie", "Mallard", "Manatee", "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose", "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum", "Oryx", "Ostrich", "Otter", "Owl", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Pony", "Porcupine", "Porpoise", "Quail", "Quelea", "Quetzal", "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer", "Red panda", "Reindeer", "Rhinoceros", "Rook", "Salamander", "Salmon", "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep", "Shrew", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Stinkbug", "Stork", "Swallow", "Swan", "Tapir", "Tarsier", "Termite", "Tiger", "Toad", "Trout", "Turkey", "Turtle", "Viper", "Vulture", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wildcat", "Wolf", "Wolverine", "Wombat", "Woodcock", "Woodpecker", "Worm", "Wren", "Yak", "Zebra"].map((elem) => {return elem.toLowerCase()});
const isAnimal = (req, res, next) => {
    let input = req.params.input.toLowerCase();
    let rejection = {
        status: "failure",
        message: false
}
    arr.includes(input) ? next() : res.send(rejection);
}
const returnAnimal = (req, res, next) => {
    let answer = {
        status: "success",
        message: true
    }
    res.send(answer)
}
server.get("/animal/:input", isAnimal, returnAnimal)
//  question 2 -------------------------------------------------------------------------------
const generateSpread = (req, res, next) => {
    let floor = Number(req.query.num1);
    let ceiling = Number(req.query.num2); 
    floor > ceiling ? next() : sendAnswer(res, floor, ceiling);
}
const sendAnswer = (res, floor, ceiling) => {
    let arr = mathMods.randomInBetween(floor, ceiling);
    let index = mathMods.randomIndex(arr.length);
    let result = arr[index];
    let answer = {
        status: "Success",
        message: `Your random number is ${result}.`
    }
    res.json(answer)
}
const unavailableSpread = (req, res, next) => {
    let floor = Number(req.query.num1);
    let ceiling = Number(req.query.num2); 
    let answer = {
        status: "Failure",
        message: `Your max, ${ceiling}, is lower than your min, ${floor}. Try again.`
    }
    res.json(answer);
}
server.get("/random", generateSpread, unavailableSpread)
// question 3 ----------------------------------------------------------------------------
