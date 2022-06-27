import { Socket } from "socket.io";


export const desconectar = ( cliente:Socket)=>{

    cliente.on('disconnect',()=>{
        console.log('cliente desconectado');
    })

}

//Escuchar mensajes
export const mensaje = (cliente: Socket)=>{

    cliente.on('mensaje',(payload:any)=>{

       

        console.log('Mensaje recibido ', payload);
    })

}