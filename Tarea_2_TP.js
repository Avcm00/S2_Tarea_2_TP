//1. Define una clase Coche que tenga propiedades para marca, modelo y año.
class coche{
    constructor(marca, modelo,año){
        this.marca= marca
        this.modelo= modelo
        this.año= año
    }
}
let coche_1 = new coche('hyundai',202,2020)
console.log(coche_1)
//2. Descripción: Escribe una función que tome un array de nombres y los transforme a mayúsculas.
function mayusculas(array){
    let resultado=[];
    for (let i =0; i<array.length;i++){
        resultado.push(array[i].toUpperCase())
    }
    return resultado
}
let list=['juan','pedro','ana']
console.log(mayusculas(list))
//3. Descripción: Crea una función que reciba un arreglo de números y devuelva un nuevo arreglo que 
//solo contenga los números mayores que 10
function mayores(list){
    let resul=[]
    for (let i =0 ; i<list.length;i++){
        if (list[i]> 10 ){
            resul.push(list[i])
        }
    }
    return resul
}
let numeros = [1,3,5,12,0,23,43,10]
console.log(mayores(numeros));
//4. Descripción: Escribe una función que imprima los primeros 10 números naturales usando un bucle while.
function num(){
    let i=0
while(i<10)
    i++
    console.log(i)
}
num()
//5. Descripción: Utiliza filter y map para encontrar todos los números en
//un arreglo que sean mayores que 10 y luego multiplícalos por 2.
const nums = numeros.filter((numer) => numer >10)
const numpor10 = nums.map(numero=> numero * 2)
console.log(numpor10);
//6. Descripción: Implementa una función que recorra una lista hasta
//encontrar el número 0, momento en el que el bucle deberá terminar.
function buscarcero(list){
    
    let num = []
for( let i =0 ; i<list.length;i++){
    if (list[i] == 0 ){
        num= list.slice(0,i+1)
        break;
    }
}
return num
}
console.log(buscarcero(numeros));
//7. Descripción: Crea una clase Persona que tenga propiedades para nombre, edad y un método 
//que devuelva una descripción básica de la persona.
class persona {
    constructor(nombre ,edad ) {
        this.nombre = nombre;
        this.edad = edad;
}
caracteristicas(){
return `La persona se llama ${this.nombre} y tiene ${this.edad} años de edad`
}
}
let persona_1 = new persona (`Juan`, 20)
console.log(persona_1.caracteristicas());
// 8. Descripción: Define una clase Libro con propiedades para título, autor, y año. Agrega un método 
//que devuelva un string con el título y el autor del libro.
class libro{
    constructor(titulo ,autor ,año){
        this.año=año
        this.autor=autor
        this.titulo=titulo
    }
    caracteristicas() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
    }
}
let libro_1 = new libro ('Don Quijote de la Mancha', `Miguel de Servantes`, 1605)
console.log(libro_1.caracteristicas());
//9. Descripción: En la clase CuentaBancaria, añade propiedades
//privadas para titular y saldo. Usa getters y setters para modificar el saldo.

class CuentaBancaria {
    constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }

    get titular() {
        return this._titular;
    }

    set titular(new_titular) {
        if (typeof new_titular !== 'string' || new_titular !== 'juan') {
            this._titular= `Nombre no permitido`;
            return
        } else {
            this._titular = new_titular.toUpperCase();
        }
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(new_saldo) {
        if (new_saldo >= 0) {
            this._saldo = new_saldo;
        } else {
           this._saldo= `El saldo inicial no puede ser menor a 0`;
            
        }
    }
}

let usuario_1 = new CuentaBancaria('juan',0);
usuario_1.titular='juan'
usuario_1.saldo= 500
console.log(usuario_1);
/* 10. Descripción: Crea una clase Utilidad que tenga un método estático
que convierta grados Celsius a Fahrenheit. */
class utiliad{
    static celsiusToFahrein(){
        let fahrenheit=(celsius)=> {
            return celsius * 9/5 + 32
        }
       
        return fahrenheit
    }
}
let resuls=utiliad.celsiusToFahrein()
console.log(resuls(32))
/*11. Descripción: Define una clase Empleado que herede de la clase
Persona y añade una propiedad salario.*/
class Empleado extends persona {
    constructor(nombre,edad,salario){
        super(nombre, edad); 
        this.salario=salario;
    }
}
let persona_2 = new Empleado ('Juan',20,200)
console.log(persona_2)
/* 12. Descripción: Implementa una clase Coche que encapsule las
propiedades marca, modelo, y kilometraje y prevenga el acceso
directo a kilometraje.*/
class Coche {
    constructor(marca,modelo,kilometraje){
        this._marca=marca;
        this._modelo=modelo;
       let _kilometraje =kilometraje;

       this.getkilometraje=function(){
        return _kilometraje
       }
       this.setkilometraje=function(new_kilometraje){
        if(new_kilometraje>= kilometraje){
            _kilometraje=new_kilometraje
        }else{
            console.log(`El nuevo kilometraje no puede ser menor al actual`)
        }
       }
    }
    get marca(){
        return this._marca
    }
    set marca(new_marca){
        this._marca=new_marca
    }
    get modelo(){
        return this._modelo
    }
    set modelo(new_modelo){
        this._modelo=new_modelo
    }
}
let coche_2= new Coche('Toyota','Corolla',0)
coche_2.setkilometraje(2000)
console.log(coche_2.getkilometraje())
/*13.  Descripción: Crea una clase Tienda que contenga un array de objetos
de la clase Producto. Implementa métodos para añadir, remover y buscar productos. */
class producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}
class Tienda{
    constructor(){
        this.productos=[]
    }
    agregar(producto){
        this.productos.push(producto)
    }
    quitar(nombre){
        this.productos= this.productos.filter(producto => producto.nombre != nombre)
    }
    buscar(nombre){
        return this.productos.find(producto => producto.nombre == nombre)
    }
}
let tienda = new Tienda
tienda.agregar(new producto('cuaderno', 1.5))
tienda.agregar(new producto('lapicero', 0.5))
tienda.agregar(new producto('mochila', 30.5))
console.log(tienda.buscar('mochila'))
tienda.quitar('mochila')
console.log(tienda.buscar('mochila'))
let list_tienda
/*14. Descripción: En la clase Usuario, permite que se añadan propiedades
dinámicas que no están definidas en el constructor como hobbies o
intereses */
class Usuario{
    constructor(nombre, edad){
    this.nombre=nombre
    this.edad=edad

    }
}
let usuario = new Usuario('juan',20)
usuario.hobbies=['leer','futbol']
usuario.interes=['viajes','fiestas']
console.log(usuario)
/*15. Descripción: Define una clase Configuracion donde ciertas
propiedades como nombreDeUsuario no puedan modificarse
después de ser inicializadas.*/
class Configuracion{
    constructor(nombreDeUsuario,contraseña){
        this._nombreDeUsuario=nombreDeUsuario
        this._contraseña=contraseña
    }
    get nombreDeUsuario(){
        return this.nombreDeUsuario
    }
}
let configuracion= new Configuracion('Juan','1234a')
configuracion.nombreDeUsuario='Luis'
console.log(configuracion)
/*16. Descripción: En la clase Persona, asegura que la edad no pueda ser
menor que 0 ni mayor que 120 usando setters. */
class persona_{
    constructor(edad,nombre){
        this._edad= edad
        this._nombre=nombre
    }
    get edad(){
        return this._edad
    }
    set edad(new_edad){
        if (new_edad<0||new_edad>120){
            console.log('Edad invalidad')
        }else{
            this._edad=new_edad
        }
    }
}
let persona_3= new persona_()
persona_3.edad=122
console.log(persona_3)
persona_3.edad=12
console.log(persona_3)
/*17. Descripción: Implementa una clase Cadena que tenga métodos para
contar número de vocales, invertir la cadena, y verificar si es un palíndromo. */
class Cadena {
    constructor(cadena) {
        this._cadena = cadena;
    }

    contarVocales() {
        let contador = 0;
        for (let i = 0; i < this._cadena.length; i++) {
            let minuscula = this._cadena[i].toLowerCase();
            if (minuscula === 'a' || minuscula === 'e' || minuscula === 'i' || minuscula === 'o' || minuscula === 'u') {
                contador++;
            }
        }
        return contador;
    }

    invertir() {
        let invertida = "";
        for (let i = 0; i < this._cadena.length; i++) {
            invertida = this._cadena[i] + invertida;
        }
        return invertida;
    }

    palindromo() {
        let palabrainvertida = this.invertir();
        if (palabrainvertida === this._cadena) {
            return true;
        } else {
            return false;
        }
    }
}

let cadena_ = new Cadena('hola');
console.log(cadena_.invertir()); 
console.log( cadena_.palindromo());
console.log(cadena_.contarVocales()); 
/*18. Descripción: Implementa la clase Calculadora de modo que se
puedan encadenar métodos como sumar, restar, etc. */
class Calculadora{
    constructor(valor_1,valor_2){
        this.num1=valor_1
        this.num2=valor_2
    }
    sumar(){
        return this.num1+this.num2
    }
    restar(){
        return this.num1-this.num2
    }
    multiplicar(){
        return this.num1*this.num2
    }
    dividir(){
        return this.num1/this.num2
    }
}
let calculo = new Calculadora(10,5)
console.log(calculo.sumar())
console.log(calculo.restar())
console.log(calculo.multiplicar())
console.log(calculo.dividir())