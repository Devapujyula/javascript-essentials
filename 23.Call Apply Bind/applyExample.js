const person = { name: "Sowmya" };

function introduce(city) {
  console.log("I'm " + this.name + " from " + city);
}

introduce.call(person, "New York");
introduce.apply(person, ["London"]);

const introLater = introduce.bind(person);
introLater("Tokyo");
