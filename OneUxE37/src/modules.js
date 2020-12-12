import func from './modules.js';
export default {
    clean( val ) {
        try{
            val = val.toLowerCase();
            console.log("Recebido valor é: " + val + "   ---  De clean();");
            let empty = '';
            for(var i = 0; i < val.length; i++){
                if(i == 0) {
                    empty+=val.charAt(0).toUpperCase();
                } else {
                    empty+=val.charAt(i);
                }
            }
            console.log("Transformação feita, resultado: " + empty + "Retornando valor..    ---  De clean();");
            return empty;
        }catch(newErr){
            return "Não foi possivel fazer isso, você fez algo de errado ? Talvez isso te ajude:<br><strong>" + newErr + "</strong>"
        }
    },
    transform(str){
        console.log(`Passando informações recebidas para o método clean()   ---  De transform();`)
        return func.clean(str);
    }
}