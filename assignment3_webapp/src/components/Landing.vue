<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <h1>Welcome to my web toon</h1>
        
      </v-flex>

      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
           <br>
        <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
    
  </v-carousel>
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {data () {
  return {
    items: [
      {src: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/47024062_1566699113476152_7038500569694076928_n.png?_nc_cat=110&_nc_ht=scontent.fbkk10-1.fna&oh=f2ca5d3b1385dcbcabe1f897a91a78a3&oe=5C6CFD30'},
      {src: 'https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/47043375_1073831139454339_3016535873362591744_n.png?_nc_cat=106&_nc_ht=scontent.fbkk14-1.fna&oh=0055a68d41d031a4f094134e31d974d9&oe=5C6D54E8'},
      {src: 'https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/46837455_2192747590981072_957015079730020352_n.png?_nc_cat=104&_nc_ht=scontent.fbkk14-1.fna&oh=3af82db641f38e6288a60455123fbc13&oe=5C6DB5A2'},
      {src: 'https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/46984697_386484585427766_5648590595124363264_n.png?_nc_cat=104&_nc_ht=scontent.fbkk14-1.fna&oh=fc6621155b013bfa30282608fdcc4393&oe=5CADF0E6'},
      {src: 'https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/46869778_272233030144290_3616630993177280512_n.png?_nc_cat=104&_nc_ht=scontent.fbkk14-1.fna&oh=4d6c30f7cf2a578d73d92e4141da0544&oe=5C64A2CC'},
      {src: 'https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/47054530_469322063590609_6491732270632665088_n.png?_nc_cat=100&_nc_ht=scontent.fbkk14-1.fna&oh=ff4519f4ad9d2f879cd9175ae70d3a49&oe=5C63B7BA'}
    ]}
}}
</script>
