class person {
    constructor(name,age,height,weight,address){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.address = address;
    }
    name(){
        return this.name;
    }
    age(){
        return this.age;
    }
    height(){
        return this.height;
    }
    weight(){
        return this.weight;
    }
    address(){
        return this.address;
    }
}
const obj = new person('Abishek',21,5.8,60,'Kathmandu');