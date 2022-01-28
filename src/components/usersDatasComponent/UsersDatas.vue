<template>
    <div>
        <h1 class="title">Users</h1>
        <main class="main">
            <CardComponent
                class="showCard"
                v-if="!showTable"
                :showCard="stateCard"
                :text="stateText"
                :users="users"
                :stateModalCreateForm="stateModalCreateForm"
                :stateModalEditForm="stateModalEditForm"
                :amountSonCreate="amountSonCreate"
                :dataForm="dataForm"
                :dataFormEdit="dataFormEdit"
                :hasSelectMale="hasSelectMale"
                :hasSelectFemenine="hasSelectFemenine"
                :hasSelectYesSon="hasSelectYesSon"
                :hasSelectNotSon="hasSelectNotSon"
                @changeGenderFemenine="changeGenderFemenine()"
                @changeNotSon="changeNotSon()"
                @changeYesSon="changeYesSon()"
                @changeGenderMale="changeGenderMale()"
                @showModalEditForm="showModal($event)"
                @showModalCreate="showModalCreate()"
                @userData="userData($event)"
                @resetForm="resetForm()"
                @deleteItem="deleteItem($event)"
                @showAmountSonCreate="showAmountCreate($event)"
                @editUsers="editUsers($event)"
                @notShowAmountSon="notShowAmountSon()"
                
            />
            <TableComponent class="showTable"
                :users="users"
                :stateModalCreateForm="stateModalCreateForm"
                :stateModalEditForm="stateModalEditForm"
                :amountSonCreate="amountSonCreate"
                :stateNotSon="stateNotSon"
                :dataForm="dataForm"
                :dataFormEdit="dataFormEdit"
                :hasSelectMale="hasSelectMale"
                :hasSelectFemenine="hasSelectFemenine"
                :hasSelectYesSon="hasSelectYesSon"
                :hasSelectNotSon="hasSelectNotSon"
                @resetForm="resetForm()"
                @changeNotSon="changeNotSon()"
                @changeYesSon="changeYesSon()"
                @changeGenderMale="changeGenderMale()"
                @changeGenderFemenine="changeGenderFemenine()"
                @showAmountCreate="showAmountCreate($event)"
                @showModalCreate="showModalCreate()"
                @userData="userData($event)"
                @deleteCard="deleteItem($event)"
                @showModalEditForm="showModal($event)"
                @editUsers="editUsers($event)"
                @notShowAmountSon="notShowAmountSon()"
            />
        </main>
        <button @click="showModalCreate()" class="main__button" type="button">Nuevo Usuario</button>
        <footer class="footer">
            <p class="footer__text">Development by @DiegoLeyton</p>
        </footer>
    </div>
</template>

<script>
import TableComponent from "../TableComponent/Table.vue"
import { v4 as uuidv4 } from 'uuid';
import CardComponent from "../CardComponent/Card.vue";

export default {
    name: 'UsersDatasComponent',
     components: {
        CardComponent,
        TableComponent
    },
    data(){
        return {
            stateCard: true,
            stateText: false,
            stateModalEditForm: false,
            stateNotSon: false,
            stateModalCreateForm: false,
            amountSonCreate: false,
            showTable: false,
            hasSelectMale: false,
            hasSelectFemenine: false,
            hasSelectYesSon: false,
            hasSelectNotSon: false,
            users: [],
            dataForm: {
                names: '',
                surnames: '',
                mail: '',
                cel: null,
                country: '',
                town: '',
                birth: '',
                gender: '',
                son: '',
            },
            dataFormEdit: {
                names: '',
                surnames: '',
                mail: '',
                cell: null,
                country: '',
                town: '',
                birth: '',
                gender: '',
                son: '',
            },
                  
        }
    },
    methods: {
        showText(status){
            this.stateText = status;
        },
        showSon(status){
            this.stateNotSon = status
        },
        showAmountCreate(){
            this.amountSonCreate = true;         
        },
        notShowAmountSon(){
            this.amountSonCreate = false;
        },
        showModal(status){
            this.stateModalEditForm = status;
        },
        showModalCreate(){
            this.stateModalCreateForm = !this.stateModalCreateForm;
            this.amountSonCreate = false;
        },
        userData(data){
            const newUser = {
                id: uuidv4(),
                ...data
            }
            this.users.unshift(newUser);
        },
        deleteItem(id){
            const findIndex = this.users.findIndex(item => item.id === id);
            if(findIndex > -1){
                this.users.splice(findIndex, 1);
            }
        },
        editUsers(id){
            const user = this.users.find(item => item.id === id);
            const regex = /^[0-9]+$/;
            if(user){
                this.dataFormEdit = user;

                if(user.gender === "M"){
                    this.hasSelectMale = true;
                }else if(user.gender === "F"){
                    this.hasSelectFemenine = true;
                }else {
                    this.hasSelectMale = false;
                    this.hasSelectFemenine = false;
                }

                if(user.son === "No"){
                    this.hasSelectNotSon = true;
                }else if(user.son.match(regex)){
                    this.amountSonCreate = true;
                    this.hasSelectYesSon = true;
                }else{
                    this.hasSelectNotSon = false;
                    this.hasSelectYesSon = false;
                }
            }
        },
        resetForm(){
            this.hasSelectMale = false;
            this.hasSelectFemenine = false;
        },
        changeGenderMale(){
            this.hasSelectMale = false;
            this.hasSelectFemenine = true;
        },
        changeGenderFemenine(){
            this.hasSelectFemenine = false;
            this.hasSelectMale = true;
        },
        changeNotSon(){
            this.hasSelectNotSon = false;
            this.hasSelectYesSon = true;
        },
        changeYesSon(){
            this.hasSelectYesSon = false;
            this.hasSelectNotSon = true;
        }
    },
}
</script>

<style scoped>

    .title{
        text-align: center;
        font-family: var(--font);
        font-size: 54px;
        color: var(--color-title);
        padding-top: 36px;
        font-weight: 600;
    }

    .main{
        margin-top: 30px;
    } 

    .main__button{
        margin: 0 auto;
        width: 124px;
        height: 36px;
        font-family: var(--font);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--bg-btn-new-user);
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: bold;
        color: var(--color-texts);
        margin-top: 36px;
        cursor: pointer;
    }
    
    .showTable {
        display: none;
    }

    .showCard {
        display: flex;
        flex-direction: column;
    }

    .main__button:active{
        transform: scale(.9);
    }

    .footer{
        width: 100%;
        padding: 10px;
    }

    .footer__text{
        text-align: center;
        font-size: 12px;
        font-family: var(--font);
        margin-top: 36px;
        color: var(--color-footer-text);
    }


    @media(min-width: 1400px){
        .showCard{
            display: none;
        }

        .showTable{
            display: block;
            background: var(--bg-table);
        }
        .main{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>