let io;
module.exports={
    init:(server)=>{
         io=require('socket.io')(server)
         return io;


    },
    getIO:()=>{
        if(!io)
        {
             throw new Error('Socket.io is not initialized ')

        }


     //    console.log("We are  not getting error  ",io);
                return io
        
    }
}