<template>
    <div>
        <div class="container__datas">
            <p class="datas__data">Nombres: {{names}}</p>
            <p class="datas__data">Apellidos: {{surnames}}</p>
            <p class="datas__data">Correo: {{mail}}</p>
            <div v-show="text">
                <p class="datas__data ">Celular: {{cel}}</p>
                <p class="datas__data ">País: {{country}}</p>
                <p class="datas__data ">Ciudad: {{town}}</p>
                <p class="datas__data ">Nacimiento: {{birth}}</p>
                <p class="datas__data ">Género: {{gender}}</p>
                <p class="datas__data ">Hijos: {{son}}</p>
            </div>
        </div>
        <div class="container__buttons">
            <button @click="deleteCard()" type="button" class="buttons__delete btn">Eliminar</button>
            <button @click="showModal()" type="button" class="buttons__edit btn">Editar</button>
            <button @click="textShow()" type="button" class="buttons__showMore btn">Ver más</button>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'CardItemComponent',
    data(){
        return{
            text: false,
        }
    },
    props: {
        names: {
            type: String
        },
        surnames: {
            type: String
        },
        mail: {
            type: String
        },
        cel: {
            type: String
        },
        country: {
            type: String
        },
        town: {
            type: String
        },
        birth: {
            type: String
        },
        gender: {
            type: String
        },
        son: {
            type: String
        },
        users: {
            type: Array
        },
        modal: {
            type: Boolean,
            default: false
        },
        id: {
            type: String
        }

    },
    methods: {
        textShow(){
            this.text = !this.text;
        },
        deleteCard(){
            this.$emit('deleteCard', this.id);
        },
        showModal(){
            this.$emit("showModalEdit", !this.modal);
            this.$emit("editUsers", this.id);
        },
    }
}
</script>

<style scoped>
    .datas__data{
        font-family: var(--font);
        font-size: 16px;
        color: var(--color-texts);
        margin-bottom: 8px;
    }

    .datas__data:last-child{
        margin-bottom: 0;
    }

    .container__buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 16px;
    }

    .buttons__delete{
        width: 92px;
        height: 36px;
        font-size: 12px;
        font-family: var(--font);
        background: var(--bg-btn-delete);
        border-radius: 6px;
        border: none;
        margin-right: 24px;
        color: var(--color-buttons);
        font-weight: bold;
        cursor: pointer;
    }

    .buttons__edit{
        width: 92px;
        height: 36px;
        font-family: var(--font);
        background: var(--bg-btn-edit);
        border-radius: 6px;
        border: none;
        margin-right: 24px;
        color: var(--color-buttons);
        font-weight: bold;
        cursor: pointer;
    }

    .buttons__showMore{
        width: 92px;
        height: 36px;
        font-family: var(--font);
        background: var(--bg-btn-showMore);
        border-radius: 6px;
        border: none;
        color: var(--color-buttons);
        font-weight: bold;
        cursor: pointer;
    }

    .btn:active{
        transform: scale(.9);
    }
</style>