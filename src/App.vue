<template>
  <div class="content">
    <UsersDatasComponent/>
  </div>
</template>

<script>

import UsersDatasComponent from "@/components/usersDatasComponent/UsersDatas.vue"

export default {
  name: 'App',
  components: {
    UsersDatasComponent
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

   :root{
        --font: 'Poppins', sans-serif;
        --bg-primary: linear-gradient(180deg, #8491D3 0%, #5D6692 100%);
        --bg-btn-new-user: #FEFAFF;
        --bg-table: #CDECF5;
        --bg-card: #CDECF5;
        --bg-form: #CDECF5;
        --bg-modal: rgba(0,0,0,0.7);
        --bg-btn-delete: #EC3535;
        --bg-btn-edit: #5257CE;
        --bg-btn-showMore: #71C97A;
        --border-inputs: 1px solid #110F0F;
        --border-table: 1px solid #356E87;
        --color-title: #FFFFFF;
        --color-texts: #110F0F;
        --color-buttons: #E5E5E5;
        --color-footer-text: #FFFFFF;
    }

  .content{
    background: var(--bg-primary);
    min-height: 670px;
  }

  @media(min-width: 1400px){
    .content{
      min-height: 100vh;
    }      
  }
</style>
