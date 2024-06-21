const getNombreAxios = async()=>{
    try{
        const respuesta = await axios('http://127.0.0.1:8000/predict')
        console.log("Respuesta:", respuesta.data);

        const {createApp} = Vue 
            createApp({
                data(){
                    return{
                        dato: respuesta.data
                    }
                }
            }).mount("#api-axios")

    }catch(error){console.log("Hubo un error", error)}
      
}

getNombreAxios()
