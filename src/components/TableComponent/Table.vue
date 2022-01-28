<template>
    <div>
        <table>
            <tr>
                <th class="thOne">Nombre</th>
                <th class="thTwo">Apellidos</th>
                <th class="thThree">Correo</th>
                <th class="thFour">Celular</th>
                <th class="thFive">País</th>
                <th class="thSix">Ciudad</th>
                <th class="thSeven">Nacimiento</th>
                <th class="thEigth">G</th>
                <th class="thNine">H</th>
                <th class="thTen">Acciones</th>
            </tr>
            <TableItemComponent
                v-for="user in users" :key="user.id"
                :names="user.names"
                :surnames="user.surnames"
                :mail="user.mail"
                :cel="user.cel"
                :country="user.country"
                :town="user.town"
                :birth="user.birth"
                :gender="user.gender"
                :son="user.son"
                :id="user.id"
                @deleteCard="deleteCard($event)"
                @editUsers="editUsers($event)"
                @showModalEdit="showModalEditForm()"
            />
        </table>
        <ModalCreateForm
            v-show="stateModalCreateForm"
            :showAmountSon="amountSonCreate"
            :stateNotSon="stateNotSon"
            :dataForm="dataForm"
            @showAmountSonCreate="showAmountCreate()"
            @showModalCreate=" showModalCreate()"
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
            @resetForm="resetForm()"
            @changeGenderFemenine="changeGenderFemenine()"
            @changeGenderMale="changeGenderMale()"
            @showAmountSonEdit="showAmountCreate()"
            @showModalEdit="showModalEditForm()"
            @editUsers="editUsers($event)"
            @notShowAmountSon="notShowAmountSon()"
        /> 
    </div>
</template>

<script>

import TableItemComponent from "./TableItem.vue";
import ModalCreateForm from "../ModalComponent/ModalCreateForm.vue";
import ModalEditForm from "../ModalComponent/ModalEditForm.vue";

export default {
    name: 'TableComponent',
    components: {
        TableItemComponent,
        ModalCreateForm,
        ModalEditForm
    },
    props: {
        users: {
            type: Array
        },
        stateModalCreateForm: {
            type: Boolean,
            default: false
        },
        stateModalEditForm: {
            type: Boolean,
            default: false
        },
        amountSonCreate: {
            type:  Boolean
        },
        stateNotSon :{
            type: Boolean
        },
        dataForm: {
            type: Object
        },
        dataFormEdit: {
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
        showAmountCreate(){
            this.$emit('showAmountCreate')
        },
        showModalCreate(){
            this.$emit('showModalCreate')
        },
        userData(data){
            this.$emit('userData', data);
        },
        deleteCard(id){
            this.$emit('deleteCard', id);
        },
        showModalEditForm(){
            this.$emit("showModalEditForm", !this.stateModalEditForm);
        },
        editUsers(id){
            this.$emit('editUsers', id);
        },
        resetForm(){
            this.$emit('resetForm')
        },
        changeGenderMale(){
            this.$emit('changeGenderMale');
        },
        changeGenderFemenine(){
            this.$emit('changeGenderFemenine')
        },
        changeNotSon(){
            this.$emit('changeNotSon');
        },
        changeYesSon(){
            this.$emit('changeYesSon');
        },
        notShowAmountSon(){
            this.$emit('notShowAmountSon');
        }
    }
}
</script>

<style scoped>
    table{
        border-collapse: collapse;
        margin: 0 auto;
        width: 968px;
        border: var(--border-table);
    }
    
    th {
        font-family: var(--font);
        font-size: 16px;
        text-align: center;
        height: 60px;
        color: #110F0F;
        border: var(--border-table);

    }
</style>