<template>
  <div>
      <p>
        <router-link> to="/Member">Member</router-link>,
        <router-link> to="/Cartoon">Cartoon</router-link>
      </p>

  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1><br>
      </v-flex>
     <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center">
      <v-img
              src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/46941681_362984331173077_3770240966670155776_n.png?_nc_cat=100&_nc_ht=scontent.fbkk14-1.fna&oh=0f595a67ce87d14931eafc8947093a46&oe=5CA5106F"
      ></v-img>
      <br>
      <v-btn to="/Cartoon">Read Cartoon</v-btn>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
         <v-img
              src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/46959531_579258785826656_5934884018334990336_n.png?_nc_cat=110&_nc_ht=scontent.fbkk10-1.fna&oh=80d4f0ee9cd9214fe7ef8511e7b112f1&oe=5C6C7AEB"
         ></v-img>
       <br>
        <v-btn to="/Member">Member</v-btn>
        
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
