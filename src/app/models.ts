

export interface Productos{
    nombre: string;
    precioNormal: number;
    precioReducido: number;
    foto: string;
    id: string;
    fecha: Date;
}

export interface Cliente {
    uid: string;
    email: string;
    nombre: string;
    celular: string;
    foto: string;
    referencia: string;
    ubicacion: any;
}


export interface Pedido{
    uid: string;
    cliente: Cliente;
    productos: ProductoPedido ;
    precioTotal: number;
    predioReducido:number;
    estado: EstadoPedido;
    fecha: Date;
    valoracion: number;
}

export interface ProductoPedido{
    producto: Productos;
    cantidad: number;
}

export type EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';