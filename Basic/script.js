class Basic {

    name;
    weight;
    age;
    img;

    constructor(name, weight, age, img) {
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.img = img;
    }
}

class Car extends Basic {

    brand;
    model;
    type;
    color;

    constructor(name, brand, model, type, color, weight, age, img) {
        super(name, weight, age, img)
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
    }

    output() {
        return `<div class="col-4 py-3"><div class="card" style="width: 18rem;">
        <div class="card-header">Car Properties</div>
        <img src="${this.img}" height = "150" alt="car">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">${this.brand}</li>
          <li class="list-group-item">${this.model}</li>
          <li class="list-group-item">${this.type}</li>
          <li class="list-group-item">${this.color}</li>
          <li class="list-group-item">${this.weight}</li>
          <li class="list-group-item">${this.age}</li>
        </ul>
      </div></div>`
    }

}

const result = document.getElementById("result");
const car1 = new Car("Heinrich323", "Mazda", "Mazda 3 (Bj 2008 )", "hatchback", "white", "1111kg", "14 Years", "https://cdn.pixabay.com/photo/2018/03/08/19/06/auto-3209511_1280.jpg");
const car2 = new Car("Gundula0815", "Mazda", "Mazda 3 (Bj 2018 )", "not hatchback", "black", "1112kg", "4 Years", "https://cdn.pixabay.com/photo/2016/05/14/02/18/camera-1391325_1280.jpg");
const car3 = new Car("Kunigunde201", "Mazda", "Mazda 3 (Bj 2009 )", "full hatchback", "grey", "1110kg", "13 Years", "https://cdn.pixabay.com/photo/2016/04/29/08/52/car-1360471_1280.jpg");
result.innerHTML += car1.output();
result.innerHTML += car2.output();
result.innerHTML += car3.output();

class Animal extends Basic {
    
    type;
    color;

    constructor(name, type, color, weight, age, img) {
        super(name, weight, age, img)
        this.type =type;
        this.color = color;
    }

    output() {
        return `<div class="col-4 py-3"><div class="card" style="width: 18rem;">
        <div class="card-header">Animal</div>
        <img src="${this.img}" height = "150"alt="animal">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">${this.type}</li>
          <li class="list-group-item">${this.color}</li>
          <li class="list-group-item">${this.weight}</li>
          <li class="list-group-item">${this.age}</li>
        </ul>
      </div></div>`
    }

}

const animal = new Animal("Heinzl", "Dog", "black", "15kg", "4 Years", "https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_960_720.jpg");
const animal2 = new Animal("Matilda", "Cat", "brown", "3kg", "2 Years", "https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682_960_720.jpg");
const animal3 = new Animal("Chappy", "Bird", "blue", "400g", "2 Years", "https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678_960_720.jpg");
result.innerHTML += animal.output();
result.innerHTML += animal2.output();
result.innerHTML += animal3.output();


class Person extends Basic {

    lname;
    #birthday;

    constructor(name,lname,weight,birthday,img){
        super(name,weight,'',img)
        this.lname=lname;
        this.#birthday=birthday;
        this.age = this.#calcAge();
    }

    output() {
        return `<div class="col-4 py-3"><div class="card" style="width: 18rem;">
        <div class="card-header">Person</div>
        <img src="${this.img}" height = "150"alt="person">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">${this.lname}</li>
          <li class="list-group-item">${this.weight}</li>
          <li class="list-group-item">${this.age}</li>
        </ul>
      </div></div>`
    }

    #calcAge() {
        const date1 = new Date();
        const date2 = new Date(this.#birthday);
        return Math.floor((date1.getTime() - date2.getTime())/60/60/24/1000/365);
    }

}


const person1 = new Person("Julia","Tritonson", "12kg", "03/24/2017", "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg");
const person2 = new Person("Herbert", "Blad",  "70kg", "07/24/1988", "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg");
const person3 = new Person("Jacky", "Johnny", "60kg",  "07/03/1974", "https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_1280.jpg");
result.innerHTML += person1.output();
result.innerHTML += person2.output();
result.innerHTML += person3.output();
