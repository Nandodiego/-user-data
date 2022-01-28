
<template>
    <div class="div">
        <section @click="closeModal($event)" class="section">
            <form class="section__form"
                @submit.prevent="showModalEditForm()"
            >
                <img @click="closeModalX()" class="close" src="../../assets/close.svg" alt="close logo">
                <div class="container">
                    <label class="form__label" for="name">Nombre</label>
                    <input v-model="dataForm.names" class="form__input" type="text" id="name">
                    <label class="form__label" for="surnames">Apellidos</label>
                    <input v-model="dataForm.surnames" class="form__input" type="text" id="surnames">
                    <label class="form__label" for="mail">Correo</label>
                    <input v-model="dataForm.mail" class="form__input" type="email" id="mail">
                    <label class="form__label" for="cel">Celular</label>
                    <input v-model="dataForm.cel" class="form__input" type="number" id="cel">
                    <label class="form__label" for="country">País</label>
                    <input v-model="dataForm.country" class="form__input" type="text" id="country">
                    <label class="form__label" for="town">Ciudad</label>
                    <input v-model="dataForm.town" class="form__input" type="text" id="town">
                    <label class="form__label" for="birth">Nacimiento</label>
                    <input v-model="dataForm.birth" class="form__input" type="text" id="birth">
                    <p class="form__text">Genero</p>
                    <div class="form__container">
                        <input :class="{'bg-select': hasSelectMale}" @click="clickMale()" class="container__button" value="Masculino" type="button">
                        <input :class="{'bg-select': hasSelectFemenine}" @click="clickFemenine()" class="container__button" value="Femenino" type="button">
                    </div>
                    <p class="form__text">Hijos</p>
                    <div class="form__container">
                        <button :class="{'bg-select': hasSelectYesSon}"  @click="clickAmountSon()" class="container__button" type="button">Si</button>
                        <button :class="{'bg-select': hasSelectNotSon}"  @click="notSon()" class="container__button" type="button">No</button>
                    </div>
                    <p v-if="sonError.state">{{sonError.message}}</p>
                    <div v-show="showAmountSon">
                        <p class="form__text">Cantidad</p>
                        <input v-model="dataForm.son"  class="form__input" type="number">
                        <p class="texts_errors" v-if="sonAmountError.state">{{sonAmountError.message}}</p>
                    </div>
                    <div class="form-container">
                        <button class="container__button" type="submit">Guardar</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
export default {
    name: "ModalEditComponent",
    data(){
        return {
            sonError: {
                state: true,
                message: ""
            },
            sonAmountError: {
                state: false,
                message: ""
            },
            amountError: 0
        }
    },
    props: {
        showAmountSon: {
            type: Boolean,
            default: false
        },
        modalEditForm: {
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
        hasSelectMale: {
            type: Boolean
        },
        hasSelectFemenine: {
            type: Boolean
        },
        hasSelectYesSon: {
            type: Boolean
        },
        hasSelectNotSon: {
            type: Boolean
        }
    },
    methods: {
        clickAmountSon(){
            this.$emit('showAmountSonEdit');
            this.$emit('changeNotSon');
            this.dataForm.son = ""
        },
        notSon(){
            this.dataForm.son = "No"
            this.$emit('notShowAmountSon')
            this.$emit('changeYesSon');
        },
        clickMale(){
            this.dataForm.gender = "M";
            this.$emit('changeGenderFemenine')
        },
        clickFemenine(){
            this.dataForm.gender = "F";
            this.$emit('changeGenderMale')
        },
        showModalEditForm(){
            if(this.dataForm.son.length === 0){
                this.sonError.state = true;
                this.sonError.message = "Elija una opción";
                this.amountError++
            }else{
                this.sonError.state = false;
                this.amountError = 0;
            }

            if(Math.sign(this.dataForm.son) === -1){
                this.sonAmountError.state = true;
                this.sonAmountError.message = "No se permiten valores negativos"
                this.amountError++
            }else{
                this.sonAmountError.state = false;
                this.amountError = 0;
            }

            if(this.amountError === 0){
                this.$emit('editUsers', this.dataForm);
                this.$emit("showModalEdit", !this.modalEditForm);
                this.resetForm();
            }
            console.log(this.amountError)
        },
        resetForm(){
            this.$emit('resetForm');
        },
        closeModal(event){
            if(event.target.className === "section"){
                this.$emit("showModalEdit", !this.modalEditForm);
            }
        },
        closeModalX(){
            this.$emit("showModalEdit", !this.modalEditForm);
        },
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

    .container__button:active{
        transform: scale(.9);
    }

    .form-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .bg-select {
        background: #6972A5;
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
            cursor: pointer;
        }
    }
</style>