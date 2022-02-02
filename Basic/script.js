class basic{

    name;
    weight;
    age;
    img;

    constructor(name,weight,age,img){
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.img = img;
    }
    
}

class car extends basic{
      
    brand;
    model;
    type;
    color;
      
    constructor(name, brand, model, type, color, weight, age, img) {
        super(name,weight,age,img)
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
                
    }

    output() {
        return `<div class="col py-3"><div class="card" style="width: 18rem;">
        <div class="card-header">Car Properties</div>
        <img src="${this.img}" height = "150" alt="">
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

// const result = document.getElementById("result");


class animal extends basic{
      
    brand;
    model;
    type;
    color;
      
    constructor(name, brand, model, type, color, weight, age, img) {
        super(name,weight,age,img)
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
                
    }

    output() {
        return `<div class="col"><div class="card" style="width: 18rem;">
        <div class="card-header">Car Properties</div>
        <img src="${this.img}" alt="">
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

const Mazda = new car("Heinrich323", "Mazda", "Mazda 3 (Bj 2008 )", "hatchback", "white", "1111kg", "14 Years", "https://cdn.pixabay.com/photo/2018/03/08/19/06/auto-3209511_1280.jpg");
const Mazda2 = new car("Gundula0815", "Mazda", "Mazda 3 (Bj 2018 )", "not hatchback", "black", "1112kg", "4 Years", "https://cdn.pixabay.com/photo/2016/05/14/02/18/camera-1391325_1280.jpg");
const Mazda3 = new car("Kunigunde201", "Mazda", "Mazda 3 (Bj 2009 )", "full hatchback", "grey", "1110kg", "13 Years", "https://cdn.pixabay.com/photo/2016/04/29/08/52/car-1360471_1280.jpg");
result.innerHTML = Mazda.output();
result.innerHTML += Mazda2.output();
result.innerHTML += Mazda3.output();

