<template>
  <div id="app">

    
    <main class="container">
         <h1>Gerador de link para WhatsApp</h1>
        <div class="form"  v-if="boolean">
          <div class="error" v-if="error">
            Digite um numero de telefone!
          </div>
          <label for="telefone">
            <span>Telefone</span>
            <input type="telefone" name="telefone" id="telefone" v-model="telefoneField" v-mask="mask">
          </label>
          <label for="mensagem">
            <span>Mensagem</span>
            <input type="mensagem" name="mensagem" id="mensagem" v-model="mensagemField">
          </label>
          <button @click="gerarLink()">Gerar Link</button>

        </div>

      <div class="link-gerado" id="link" v-if="!boolean">
         {{completo}}
      </div>
        <div class="botoes" v-if="!boolean">
          <button  v-clipboard="completo" id="copiar" @click="copiar()">Copiar</button>
          <button @click="linkNovo()" >Novo link</button>
        </div>
      <footer class="footer">Nenhum dado é guardado!</footer>
    </main>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data(){
    return{
      telefoneField: "",
      mensagemField: "",
      mask:"(##) #####-####",
      boolean: true,
      error:false,
      completo:"",
    };

  },
    methods: {

      gerarLink(){
        if(this.telefoneField.length==0){
          this.erro();
        }
        else{
          
        if(!this.mensagemField){
          this.completo="https://api.whatsapp.com/send?phone="+55+
          this.telefoneField.replace(/\s/g, '');
          this.boolean = false;
          
          }
          else{
          this.completo="https://api.whatsapp.com/send?phone="+55+
          this.telefoneField.replace(/\s/g, '')+"&text="+
          this.mensagemField;

          this.boolean = false;

          }
          

        }
      },

      copiar(){

        console.log("Copiou")

      },

      reseta(){
        this.boolean = true;
        this.completo="";
        this.telefoneField="";
        this.mensagemField="";
      },

      erro(){

        this.error = true;
        setTimeout(() => {
          this.error = false;

          }, 4000);
      },

      linkNovo(){
              this.reseta();
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

*{
   margin: 0; 
   padding: 0;
   border: 0;
   box-sizing: border-box;
   font-family: "Poppins", sans-serif;
}

body{
  
    background: linear-gradient(0deg, #00C9FF, #92FE9D);
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
main.container {
    background: white;
    max-width: 5000px;
    min-height: 50vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
   }


main .form {
    display: flex;
    flex-direction: column;
}
main .form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
main h1 {
    font-weight: 600;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
}
main .form label {
    display: flex;
    flex-direction: column;
}

main .form label span {
    font-size: 1.1rem;
    margin-top: 2rem;
}
main .form .error{

  background: red;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

}
main .form input {
    
    width: 300px;
    height: 50px;
    padding: 0 0.5rem;
    margin-top: 1rem;
    outline: none;
    color: black;
    font-size: 1rem;
    border: 1px solid rgba(166, 166, 166);
    border-radius: 8px;
}

main .link-gerado{

  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:blanchedalmond;

}
main .form button{
    cursor: pointer;
    height: 40px;
    width: 40%;
    margin-top: 4rem;
    border: none;
    border-radius: 8px;
    background: #42d650;
    color: white;
    font-size: 1.1rem;
    transition: all .3s ease-in-out;
    outline: none;
}
main .botoes{
  display: flex;
  align-items: center;
  justify-content: center;
}
main .botoes button{


    cursor: pointer;
    height: 40px;
    width: 130px;
    margin-top: 5rem;
    margin-left: 17%;
    border-radius: 8px;
    background: #42d650;
    color: white;
    
    font-size: 1.1rem;
    transition: all .3s ease-in-out;
}

main .botoes button:first-child{
  margin-left: 0;

}

main .botoes button:hover{
  background: #4bf05c;

}
main .botoes button:focus-visible{
  outline: black;
}

main footer {
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
