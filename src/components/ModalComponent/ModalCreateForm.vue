
<template>
    <div class="div">
        <section @click="closeModal($event)" class="section">
            <form class="section__form"
                @submit.prevent="showModalCreateForm()"
            >
                <img @click="closeModalX()" class="close" src="../../assets/close.svg" alt="close logo">
                <div class="container">
                    <label class="form__label" for="name">Nombre</label>
                    <input v-model="dataForm.names" class="form__input" type="text" id="name">
                    <p class="texts_errors" v-if="nameError.state">{{nameError.message}}</p>
                    <label class="form__label" for="surnames">Apellidos</label>
                    <input v-model="dataForm.surnames" class="form__input" type="text" id="surnames">
                    <p class="texts_errors" v-if="surnameError.state">{{surnameError.message}}</p>
                    <label class="form__label" for="mail">Correo</label>
                    <input v-model="dataForm.mail" class="form__input" type="email" id="mail">
                    <p class="texts_errors" v-if="mailError.state">{{mailError.message}}</p>
                    <label class="form__label" for="cel">Celular</label>
                    <input v-model="dataForm.cel" class="form__input" type="number" id="cel">
                    <p class="texts_errors" v-if="celError.state">{{celError.message}}</p>
                    <p class="texts_errors" v-if="celAmountError.state">{{celAmountError.message}}</p>
                    <label class="form__label" for="country">País</label>
                    <input v-model="dataForm.country" class="form__input" type="text" id="country">
                    <p class="texts_errors" v-if="countryError.state">{{countryError.message}}</p>
                    <label class="form__label" for="town">Ciudad</label>
                    <input v-model="dataForm.town" class="form__input" type="text" id="town">
                    <p class="texts_errors" v-if="townError.state">{{townError.message}}</p>
                    <label class="form__label" for="birth">Nacimiento</label>
                    <input v-model="dataForm.birth" class="form__input" type="text" id="birth">
                    <p class="texts_errors" v-if="birthError.state">{{birthError.message}}</p>
                    <p class="form__text">Genero</p>
                    <div class="form__container">
                        <input :class="{'bg-select': hasSelectMale}" @click="clickMale()" class="container__button" value="Masculino" type="button">
                        <input :class="{'bg-select': hasSelectFemenine}" @click="clickFemenine()" class="container__button" value="Femenino" type="button">
                    </div>
                    <p class="texts_errors" v-if="genderError.state">{{genderError.message}}</p>
                    <p class="form__text">Hijos</p>
                    <div class="form__container">
                        <button :class="{'bg-select': hasSelectYesSon}" @click="clickAmountSon()" class="container__button" type="button">Si</button>
                        <button :class="{'bg-select': hasSelectNotSon}" @click="notSon()" class="container__button" type="button">No</button>
                    </div>
                    <p class="texts_errors" v-if="sonError.state">{{sonError.message}}</p>
                    <div v-show="showAmountSon">
                        <p class="form__text">Cantidad</p>
                        <input v-model="dataForm.son"  class="form__input" type="number">
                        <p class="texts_errors" v-if="sonAmountError.state">{{sonAmountError.message}}</p>
                    </div>
                    <div class="form-container">
                        <button  class="container__button" type="submit">Guardar</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>

export default {
    name: "ModalCreateComponent",
    data(){
        return {
            hasSelectMale: false,
            hasSelectFemenine: false,
            hasSelectYesSon: false,
            hasSelectNotSon: false,
            nameError: {
                state: false,
                message: ""
            },
            surnameError: {
                state: false,
                message: ""
            },
            mailError: {
                state: false,
                message: ""
            },
            celError: {
                state: false,
                message: ""
            },
            countryError: {
                state: false,
                message: ""
            },
            townError: {
                state: false,
                message: ""
            },
            birthError: {
                state: false,
                message: ""
            },
            genderError: {
                state: false,
                message: ""
            },
            sonError: {
                state: false,
                message: ""
            },
            sonAmountError: {
                state: false,
                message: ""
            },
            celAmountError: {
                state: false,
                message: ""
            }
        }
    },
    props: {
        showAmountSon: {
            type: Boolean,
            default: false
        },
        modalCreateForm: {
            type: Boolean,
            default: false
        },
        stateNotSon: {
            type: Boolean,
            default: false
        },
        dataForm: {
            type: Object
        },
    },
    methods: {
        clickAmountSon(){
            this.$emit('showAmountSonCreate');
            this.hasSelectYesSon = !this.hasSelectYesSon;
            this.hasSelectNotSon = false;
        },
        notSon(){
            this.$emit('notShowAmountSon');
            this.dataForm.son = "No"
            this.hasSelectNotSon = !this.hasSelectNotSon;
            this.hasSelectYesSon = false
            
        },
        clickMale(){
            this.dataForm.gender = 'M';
            this.hasSelectMale = !this.hasSelectMale;
            this.hasSelectFemenine = false;
        },
        clickFemenine(){
            this.dataForm.gender = 'F';
            this.hasSelectFemenine = !this.hasSelectFemenine;
            this.hasSelectMale = false;
        },
        showModalCreateForm(){
            let amountError = 0;

            if(this.dataForm.names.length === 0){
                this.nameError.state = true;
                this.nameError.message = "Ingrese un nombre";
                amountError++;
            }else {
                this.nameError.state = false
            }

            if(this.dataForm.surnames.length === 0){
                this.surnameError.state = true;
                this.surnameError.message = "Ingrese un apellido";
                amountError++;
            }else {
                this.surnameError.state = false;
            }

            if(this.dataForm.mail.length === 0){
                this.mailError.state = true;
                this.mailError.message = "Ingrese un correo";
                amountError++;
            }else {
                this.mailError.state = false;
            }

            if(this.dataForm.cel === null){
                this.celError.state = true;
                this.celError.message = "Ingrese un número telefónico";
                amountError++
            }else if(this.dataForm.cel.length === 0){
                this.celError.state = true;
                this.celError.message = "Ingrese un número telefónico";
                amountError++
            }else{
                this.celError.state = false;
            }

            if(this.dataForm.country.length === 0){
                this.countryError.state = true;
                this.countryError.message = "Ingrese el nombre de su país";
                amountError++
            }else {
                this.countryError.state = false;
            }

            if(this.dataForm.town.length === 0){
                this.townError.state = true;
                this.townError.message = "Ingrese el nombre de su ciudad";
                amountError++
            }else {
                this.townError.state = false;
            }

            if(this.dataForm.birth.length === 0){
                this.birthError.state = true;
                this.birthError.message = "Ingrese su fecha de nacimiento";
                amountError++
            }else {
                this.birthError.state = false;
            }

            if(this.dataForm.gender.length === 0){
                this.genderError.state = true;
                this.genderError.message = "Elija un opción";
                amountError++
            }else{
                this.genderError.state = false;
            }

            if(this.dataForm.son.length === 0){
                this.sonError.state = true;
                this.sonError.message = "Elija una opción";
                amountError++
            }else{
                this.sonError.state = false;
            }

            if(Math.sign(this.dataForm.son) === -1){
                this.sonAmountError.state = true;
                this.sonAmountError.message = "No se permiten valores negativos"
                amountError++
            }else {
                this.sonAmountError.state = false;
            }

            if(Math.sign(this.dataForm.cel) === -1){
                this.celAmountError.state = true;
                this.celAmountError.message = "No se permiten valores negativos"
                amountError++
            }else {
                this.celAmountError.state = false;
            }


            if(amountError === 0){
                this.$emit("showModalCreate", !this.modalCreateForm);
                this.$emit('addUsers', this.dataForm);
                this.resetForm();
                this.resetFormErrors();
            }
        },
        resetForm(){
            this.hasSelectMale = false;
            this.hasSelectFemenine = false;
            this.hasSelectYesSon = false;
            this.hasSelectNotSon = false;
            this.dataForm.names = "";
            this.dataForm.surnames = "";
            this.dataForm.mail = "";
            this.dataForm.cel = null;
            this.dataForm.country = "";
            this.dataForm.town = "";
            this.dataForm.birth = "";
            this.dataForm.gender = "";
            this.dataForm.son = "";
        },
        resetFormErrors(){
            this.nameError.state = false;
            this.surnameError.state = false;
            this.mailError.state = false;
            this.celError.state = false;
            this.countryError.state = false;
            this.townError.state = false;
            this.birthError.state = false;
            this.genderError.state = false;
            this.sonError.state = false;
            this.sonAmountError.state = false;
            this.celAmountError.state = false;
        },
        closeModal(event){
            if(event.target.className === "section"){
                this.$emit("showModalCreate", !this.modalCreateForm); 
                this.resetFormErrors();
                this.resetForm();
            }
        },
        closeModalX(){
            this.$emit("showModalCreate", !this.modalCreateForm);
            this.resetFormErrors();
            this.resetForm();
        }
    }
};

</script>

<style scoped>
    .section{
        background-color:var(--bg-modal);
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
    }
  
    .section__form{
        width: 340px;
        border-radius: 6px;
        background: var(--bg-form);
        padding: 20px;
    }

    .close{
        margin-left: 284px;
        cursor: pointer;
    }

    .close:active{
        transform: scale(.8);
    }

    .form__label{
        font-size: 16px;
        font-family: var(--font);
        margin-bottom: 6px;
    }

    .form__input{
        width: 300px;
        height: 30px;
        border: var(--border-inputs);
        border-radius: 6px;
        margin-bottom: 12px;
        background: transparent;
        padding: 10px;
        font-family: var(--font);
        font-size: 16px;
    }

    .form__text{
        font-size: 16px;
        font-family: var(--font);
        margin-bottom: 6px;
    }

    .form__container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 300px;
        margin-bottom: 12px;
    }

    .container__button{
        width: 120px;
        height: 30px;
        border: var(--border-inputs);
        border-radius: 6px;
        font-family: var(--font);
        background: transparent;
        font-size: 16px;
        cursor: pointer;
    }

    .bg-select {
        background: #6972A5;
    }

    .container__button:active{
        transform: scale(.9);
    }

    .form-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .texts_errors{
        font-family: var(--font);
        font-size: 12px;
        margin-bottom: 5px;
    }

    @media(min-width: 1400px){
        .section {
            height: 100%;
        }

         .section__form{
            width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            display: flex;
            flex-direction: column;
        }

        .close{
            margin-left: 530px;
        }
    }
</style>