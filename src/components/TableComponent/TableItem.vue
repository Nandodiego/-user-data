<template>    
    <tr>
        <td>{{names}}</td>
        <td >{{surnames}}</td>
        <td >{{mail}}</td>
        <td >{{cel}}</td>
        <td >{{country}}</td>
        <td >{{town}}</td>
        <td >{{birth}}</td>
        <td >{{gender}}</td>
        <td >{{son}}</td>
        <td >
            <img @click="deleteCard()" class="marginRight" src="../../assets/delete.svg" alt="logo delete">
            <img @click="showModal()" src="../../assets/edit.svg" alt="logo edit">
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TableItemComponent',
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

    td {
        font-family: var(--font);
        font-size: 16px;
        text-align: center;
        height: 60px;
        color: var(--color-texts);
        border: var(--border-table);

    }

    .marginRight{
        margin-right: 24px;
    }

    img{
        cursor: pointer;
    }

    img:active{
        transform: scale(.8);
    }
</style>