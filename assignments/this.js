/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When "this" is globally scoped, "this" refers to the "global object" or "window object"--it is the uber-Object, the form of forms, the great prototype of prototypes
* 2. When "this" is used within the method of an object, and then that method is called on that object, "this" refers to that object.
* 3. When "this" is used within a constructor, calling that constructor makes "this" refer to the specific instance of the class that is created by that call.
* 4. Using "call" or "apply" together with a parameter can override  "this"'s default application to a constructed instance in favor of applying to a different constructed instance.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const thisLogger = function () {
    console.log(this);
}
thisLogger();
// Principle 2

// code example for Implicit Binding
const impliciturBinder = {
    favoriteImplicationForm: "insinuation",
    findFave: function () {
        console.log(`${this.favoriteImplicationForm} is the best form of implication`);
    }
}

impliciturBinder.findFave(); // shows that "this" in findFave is implciitly bound to impliciturBinder


// Principle 3

// code example for New Binding
function CoolGuy(name, pet, artist, hobby, girlfriend, car, currency) {
    this.name = name;
    this.pet = pet;
    this.artist = artist;
    this.hobby = hobby;
    this.girlfriend = girlfriend;
    this.car = car;
    this.currency = currency;
    this.describer = function () {
        console.log(`I am a cool guy named ${this.name}. I own a ${this.pet} and my favorite artist is ${this.artist}. I enjoy ${this.hobby}. My girlfriend is ${this.girlfriend}. I drive a ${this.car}. I keep my money in ${this.currency}`)
    }
}

const Gabe = new CoolGuy("Gabe", "Shih-Tzu", "Picasso", "skateboarding", "Gal Gadot", "Lambo", "Ether");
const Kafka = new CoolGuy("Kafka", "human", "Snoopy", "eating", "Margot Robbie", "G-Wagon", "Dogecoin");
Gabe.describer(); // shows that "this" in describer is newly bound to Gabe instance of CoolGuy.
Gabe.describer(Kafka);// still bound to Gabe even w/ another object as a parameter.
Kafka.describer(); //bound to Kafka object.

// Principle 4

// code example for Explicit Binding
Kafka.describer.call(Gabe); //calls Kafka's describer method but on the Gabe object, so "this" reference changes to Gabe
Gabe.describer.call(Kafka); //calls Gabe's describer method but on the Kafka object, so "this" references changes to Kafka
