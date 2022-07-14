<template>
  <div id="page">
    <template v-for="item in sounds" :key="item.name">
      <div class="btn" @click="playSong(item.name)">{{ item.name }}</div>
    </template>

    <div class="btn" @click="pasuePlay">暂停播放</div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  name: 'sound-board',
  setup() {
    const sounds = ref([
      {
        name: '孤勇者',
        url: 'https://m801.music.126.net/20220714192305/2d93ce51d71e4004152f98ce0c01cacf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096427565/7854/7b14/6110/6a83aac06435d939143701eebe126ed9.m4a'
      },
      {
        name: '再见莫妮卡',
        url: 'https://m801.music.126.net/20220714191938/65e5eee36af1c49f2d5cb3a7c97e2e2f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7694527238/7f65/5f21/53e9/dbd790dccc82e515db0179281405f9d0.m4a'
      },
      {
        name: 'So Fay Away',
        url: 'https://m701.music.126.net/20220714192057/3c4146ce2d5d956c0f76ed018f255849/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096590174/a387/c255/583c/256f4b5cb3ca6231095adccdae1d2927.m4a'
      },
      {
        name: 'STAY',
        url: 'https://m701.music.126.net/20220714192126/f765712a39ad7e20b48e9f896691127f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096402546/eb85/21f8/2573/bf9ae2e409e31fbcc1363c6e7d2b5901.m4a'
      },
      {
        name: 'Normal No More',
        url: 'https://m701.music.126.net/20220714192150/2d18601e8d02de67f3f0b780baa3457a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096419450/ad9f/2494/eba1/e310a66422f42ec8943f2e850e74892c.m4a'
      },
      {
        name: 'Everybody Dies In Their Nightmares',
        url: 'https://m701.music.126.net/20220714192221/4dff0b8511a65ce8711518a714437fde/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096535080/5817/6db8/8671/c04ff4d7ac9e407d0d54befb22ea8ae5.m4a'
      }
    ])

    const audio = new Audio()

    // 播放音乐
    const playSong = (songName) => {
      let { url } = sounds.value.find((item) => {
        return item.name === songName
      })
      audio.src = url
      audio.play()
    }

    // 暂停音乐播放
    const pasuePlay = () => {
      console.log(audio.__proto__)
      audio.pause()
    }

    onBeforeUnmount(() => {
      audio.pause()
    })

    return {
      sounds,
      playSong,
      pasuePlay
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  background-color: #607d8b;
  overflow: hidden;
}

.btn {
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-family: inherit;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #455a64;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
}
</style>
