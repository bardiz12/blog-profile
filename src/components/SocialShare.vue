<template>
    <div class="social-share mt-10 mb-10">
      <span>Share to your friends!</span>
      <div class="social-share-button">
          
          <a :href="`https://web.whatsapp.com/send?text=${data.title}+:+${data.url}`" class="whatsapp" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a>
          <a :href="`https://telegram.me/share/url?url=${data.url}&text=${data.title}`" class="telegram" target="_blank"><i class="fab fa-telegram fa-2x"></i></a>
          
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${data.url}&utm_medium=sharer&utm_campaign=social`" class="facebook" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
          <a :href="`https://twitter.com/intent/tweet?url=${data.url}&text=${data.title}`" class="twitter" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
      </div>
    </div>
</template>

<script>
export default {
    props:['title'],
    data(){
        return {
            data:{
                url:null,
                title:encodeURI(this.title)
            }
        }
    },
    mounted(){
        this.data.url = window.location.href;    
    }
}
</script>