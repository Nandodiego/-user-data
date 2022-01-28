<template>
    <div>
        <div class="container" v-show="showCard"
            v-for="user in users" :key="user.id"
        >
            <CardItemComponent
                :names="user.names"
                :surnames="user.surnames"
                :mail="user.mail"
                :cel="user.cel"
                :country="user.country"
                :town="user.town"
                :birth="user.birth"
                :gender="user.gender"
                :son="user.son"
                :users="users"
                :modal="stateModalEditForm"
                :id="user.id"
                @showModalEdit="showModalEdit()"
                @deleteCard="deleteCard($event)"
                @editUsers="editUsers($event)"
            />
        </div>
        <ModalCreateForm
            v-show="stateModalCreateForm"
            :showAmountSon="amountSonCreate"
            :stateNotSon="stateNotSon"
            :dataForm="dataForm"
            :bgMale="bgMale"
            :bgFemenine="bgFemenine"
            :bgYesSon="bgYesSon"
            :bgNotSon="bgNotSon"
            @showAmountSonCreate="showAmountCreate()"
            @showModalCreate="showModalCreate()"          
            @addUsers="userData($event)"
            @notShowAmountSon="notShowAmountSon()"
            
        />
        <ModalEditForm 
            v-show="stateModalEditForm"
            :showAmountSon="amountSonCreate"
            :dataForm="dataFormEdit"
            :modalEditForm="stateModalEditForm"
            :hasSelectMale="hasSelectMale"
            :hasSelectFemenine="hasSelectFemenine"
            :hasSelectYesSon="hasSelectYesSon"
            :hasSelectNotSon="hasSelectNotSon"
            @changeNotSon="changeNotSon()"
            @changeYesSon="changeYesSon()"
            @changeGenderFemenine="changeGenderFemenine()"
            @changeGenderMale="changeGenderMale()"
            @showAmountSonEdit="showAmountCreate()"
            @showModalEdit="showModalEdit()"
            @editUsers="editUsers()"
            @resetForm="resetForm()"
            @notShowAmountSon="notShowAmountSon()"
        /> 
    </div>
</template>

<script>

import ModalCreateForm from "../ModalComponent/ModalCreateForm.vue";
import ModalEditForm from "../ModalComponent/ModalEditForm.vue"
import CardItemComponent from "../CardItemComponent/CardItem.vue"

export default {
    name: 'CardComponent',
    props: {
        showCard: {
            type: Boolean,
            default: true
        },
        stateModalCreateForm: {
            type: Boolean,
            default: false
        },
        stateModalEditForm: {
            type: Boolean,
            default: false
        },
        stateNotSon: {
            type: Boolean,
            default: false
        },
        users: {
            type: Array
        },
        amountSonCreate: {
            type: Boolean,
        },
        dataForm: {
            type: Object
        },
        dataFormEdit: {
            type: Object
        },
        bgMale: {
            type: String
        },
        bgFemenine: {
            type: String
        },
        bgYesSon: {
            type: String
        },
        bgNotSon: {
            type: String
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
    components: {
        CardItemComponent,
        ModalCreateForm,
        ModalEditForm
    },
    methods: {
        showModalCreateForm(){
            this.$emit("showModalCreateForm", !this.stateModalCreateForm);
        },
        showModalEdit(){
            this.$emit("showModalEditForm", !this.stateModalEditForm);
        },
        unshiftUsers(data){
            this.$emit('unshiftUsers', data)
        },
        showAmountCreate(){
            this.$emit('showAmountSonCreate', !this.amountSonCreate);
        },
        showModalCreate(){
            this.$emit('showModalCreate')
        },
        userData(data){
            this.$emit('userData', data);
        },
        editUsers(id){
            this.$emit('editUsers', id);
        },
        deleteCard(id){
            this.$emit('deleteItem', id);
        },
        bgYesAndNotSon(){
            this.$emit('bgYesAndNotSon')
        },
        bgMaleAndFemenine(){
            this.$emit('bgMaleAndFemenine')
        },
        bgFemenineAndMale(){
            this.$emit('bgFemenineAndMale')
        },
        resetBackgrounds(){
            this.$emit('resetBackgrounds')
        },
        dataFormNotSon(){
            this.$emit('dataFormNotSon');
        },
        dataFormGenderMale(){
            this.$emit('dataFormGenderMale')
        },
        dataFormGenderFemenine(){
            this.$emit('dataFormGenderFemenine')
        },
        notShowAmountSon(){
            this.$emit('notShowAmountSon');
        },
        changeGenderFemenine(){
            this.$emit('changeGenderFemenine')
        },
        changeGenderMale(){
            this.$emit('changeGenderMale');
        },
        changeNotSon(){
            this.$emit('changeNotSon');
        },
        changeYesSon(){
            this.$emit('changeYesSon');
        },
        resetForm(){
            this.$emit('resetForm')
        }
    }
}
</script>

<style scoped>
    .container {
        width: 340px;
        max-height: 358px;
        padding: 8px;
        margin-top: 36px;
        background: var(--bg-card);
        border-radius: 6px;
        margin: 0 auto;
        margin-bottom: 30px;
    }   
</style>