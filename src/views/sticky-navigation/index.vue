<template>
  <div id="page">
    <!-- 导航栏 -->
    <nav class="nav" ref="navRef">
      <div class="container">
        <h1 class="logo">
          <a href="">经典文学</a>
        </h1>

        <ul>
          <li><a href="#" class="current">主页</a></li>
          <li><a href="#">国内经典</a></li>
          <li><a href="#">外国经典</a></li>
          <li><a href="#">关于</a></li>
        </ul>
      </div>
    </nav>

    <!-- 主体内容 -->
    <div class="hero">
      <div class="container">
        <h1>欢迎来到我的网站</h1>
        <p>经典文学作品简介</p>
      </div>
    </div>

    <section class="container content">
      <h2>朝花夕拾</h2>
      <p>
        此文集作为“回忆的记事”，多侧面地反映了作者鲁迅青少年时期的生活，
        形象地反映了他的性格和志趣的形成经过。前七篇反映他童年时代在绍兴的家庭和私塾中的生活情景，
        后三篇叙述他从家乡到南京，又到日本留学，然后回国教书的经历；
        揭露了半封建半殖民地社会种种丑恶的不合理现象，同时反映了有抱负的青年知识分子在旧中国茫茫黑夜中，
        不畏艰险，寻找光明的困难历程，以及抒发了作者对往日亲友、师长的怀念之情。
      </p>

      <h2>昆虫记</h2>
      <p>
        该作品是一部概括昆虫的种类、特征、习性和婚习的昆虫生物学著作，
        记录了昆虫真实的生活，表述的是昆虫为生存而斗争时表现出的灵性，
        还记载着法布尔痴迷昆虫研究的动因、生平抱负、知识背景、生活状况等等内容。
        作者将昆虫的多彩生活与自己的人生感悟融为一体，用人性去看待昆虫，
        字里行间都透露出作者对生命的尊敬与热爱。
      </p>

      <h2>朝花夕拾</h2>
      <p>
        此文集作为“回忆的记事”，多侧面地反映了作者鲁迅青少年时期的生活，
        形象地反映了他的性格和志趣的形成经过。前七篇反映他童年时代在绍兴的家庭和私塾中的生活情景，
        后三篇叙述他从家乡到南京，又到日本留学，然后回国教书的经历；
        揭露了半封建半殖民地社会种种丑恶的不合理现象，同时反映了有抱负的青年知识分子在旧中国茫茫黑夜中，
        不畏艰险，寻找光明的困难历程，以及抒发了作者对往日亲友、师长的怀念之情。
      </p>

      <h2>昆虫记</h2>
      <p>
        该作品是一部概括昆虫的种类、特征、习性和婚习的昆虫生物学著作，
        记录了昆虫真实的生活，表述的是昆虫为生存而斗争时表现出的灵性，
        还记载着法布尔痴迷昆虫研究的动因、生平抱负、知识背景、生活状况等等内容。
        作者将昆虫的多彩生活与自己的人生感悟融为一体，用人性去看待昆虫，
        字里行间都透露出作者对生命的尊敬与热爱。
      </p>
    </section>

    <back-home></back-home>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'sticky-navigation',
  setup() {
    const navRef = ref()

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > navRef.value.offsetHeight) {
          navRef.value.classList.add('active')
        } else {
          navRef.value.classList.remove('active')
        }
      })
    })
    return {
      navRef
    }
  }
}
</script>

<style lang="less">
#page {
  padding-bottom: 50px;
  font-family: '等线', sans-serif;
  color: #222;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222;
  transition: all 0.3s ease-in-out;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    transition: all 0.3s ease-in-out;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }

  a {
    padding: 7px 15px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-size: 1.2em;

    &.current,
    &:hover {
      color: #c0392b;
      font-weight: bold;
    }
  }

  &.active {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .container {
      padding: 5px 0;
    }

    a {
      color: #000;

      &.current,
      &:hover {
        color: #c0392b;
        font-weight: bold;
      }
    }
  }
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  h1 {
    font-size: 46px;
    margin: -20px 0 20px;
  }

  p {
    font-size: 20px;
    letter-spacing: 1px;
  }
}

.content h2 {
  font-size: 150%;
  margin: 20px 0;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
  text-align: left;
  text-indent: 2em;
}
</style>
