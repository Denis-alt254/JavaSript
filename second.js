const Myobject = {
    firstname: 'John',
    lastname: 'Doe',
    age: 50,
    eyecolor: 'blue',
    fullname: function(){
        return this.firstname + " "+ this.lastname;
    }
}
console.log(Myobject.fullname())