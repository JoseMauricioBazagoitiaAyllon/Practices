//function
function hello(name) {
  /*
    console.log("Hola mundo");
    console.log("Tarabajando en JS");*/
  //return "hola mundo";//Devuelve Strings
  //return 20;devuelve numeros
  //return 2.5// devuelve decimales
  //return {name: 'Mauricio', lastname:'Bazagoitia'}//Objetos
  /*return function(){
        return "Hola Mundo"
    }//Incluso otras funciones*/
  return "Hola " + name;
}
console.log(hello("Mauricio"));
function add(x = 0, y = 0) {
  return x + y;
}
console.log(add(3, 3));
const user={
    name:'Ryan',
    lastname:'Ayllon',
    age: 20,
    address:{
        country:'Colombia',
        city:'Bogota',
        street: 'main street 123'
    },
    friends:['brandon','elena'],
    active:true,
    sendEmail:function(){
        return 'Send Email.....'
    }
}
console.log(user);