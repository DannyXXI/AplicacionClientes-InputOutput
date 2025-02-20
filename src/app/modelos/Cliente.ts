export class Cliente{

    // metodo constructor
    constructor( private _id:number , private _nombre:string , private _cif:string , private _direccion:string , private _grupo:string ){}

    // metodos GETTER
    get id():number { return this._id; }

    get nombre():string { return this._nombre; }

    get cif():string { return this._cif; }
    
    get direccion():string { return this._direccion; }

    get grupo():string { return this._grupo; }

    // metodos SETTER
    set nombre(nuevoNombre:string) { this._nombre = nuevoNombre; }

    set cif(nuevoCif:string) { this._cif = nuevoCif; }

    set direccion(nuevaDireccion:string) { this._direccion = nuevaDireccion; }

    set grupo(nuevoGrupo:string) { this._grupo = nuevoGrupo; }
}