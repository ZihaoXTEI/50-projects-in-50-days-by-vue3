<template>
  <div id="page">
    <div class="container" :class="{ 'show-nav': isOpen }">
      <!-- 左上角按钮区域 -->
      <div class="circle-container">
        <div class="circle">
          <button id="open-btn" @click="handleOpenClick">
            <i class="iconfont icon-icon-gengduo"></i>
          </button>
          <button id="close-btn" @click="handleCloseClick">
            <i class="iconfont icon-icon-guanbi2"></i>
          </button>
        </div>
      </div>

      <!-- 正文 -->
      <div class="content">
        <h1>True nobilit</h1>
        <small>Written in October, 2020</small>
        <p>
          In a calm sea every man is a pilot.But all sunshine without shade, all
          pleasure without pain, is not life at all.Take the lot of the happiest
          - it is a tangled yarn.Bereavements and blessings,one following
          another, make us sad and blessed by turns. Even death itself makes
          life more loving. Men come closest to their true selves in the sober
          moments of life, under the shadows of sorrow and loss.
        </p>

        <h3>My Little Dog</h3>
        <img
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="doggy"
        />
        <p>
          In the affairs of life or of business, it is not intellect that tells
          so much as character, not brains so much as heart, not genius so much
          as self-control, patience, and discipline, regulated by judgment. I
          have always believed that the man who has begun to live more seriously
          within begins to live more simply without. In an age of extravagance
          and waste, I wish I could show to the world how few the real wants of
          humanity are.
        </p>
      </div>
    </div>

    <!-- 导航区 -->
    <nav>
      <ul>
        <li><i class="iconfont icon-icon-shouye"></i><a href="#"> 主页</a></li>
        <li>
          <i class="iconfont icon-icon-zhanghao"></i><a href="#"> 关于</a>
        </li>
        <li>
          <i class="iconfont icon-icon-youxiang"></i><a href="#"> 联系</a>
        </li>
      </ul>
    </nav>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'rotating-nav-animation',
  setup() {
    const isOpen = ref(true)

    const handleOpenClick = () => {
      isOpen.value = true
    }

    const handleCloseClick = () => {
      isOpen.value = false
    }
    return {
      isOpen,
      handleOpenClick,
      handleCloseClick
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  font-family: 'Lato', sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}

.container {
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;

  .circle-container {
    position: fixed;
    top: -100px;
    left: -100px;

    .circle {
      background-color: #ff7979;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: relative;
      transition: transform 0.5s linear;
    }
  }

  &.show-nav {
    transform: rotate(-20deg);

    .circle-container .circle {
      transform: rotate(-70deg);
    }

    & + nav li {
      transform: translateX(0);
      transition-delay: 0.3s;
    }
  }
}

.circle button {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &#open-btn {
    left: 60%;
  }

  &#close-btn {
    top: 60%;
    transform: rotate(90deg);
    transform-origin: top left;
  }
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;

  ul {
    list-style-type: none;
    padding-left: 30px;

    li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;

      i {
        font-size: 20px;
        margin-right: 10px;
      }

      a {
        color: #fafafa;
        text-decoration: none;
        transition: all 0.5s;

        &:hover {
          color: #ff7979;
          font-weight: bold;
        }
      }
    }

    & + li {
      margin-left: 15px;
      transform: translateX(-150%);

      & + li {
        margin-left: 30px;
        transform: translateX(-200%);
      }
    }
  }
}

.content {
  max-width: 1000px;
  margin: 50px auto;

  h1 {
    margin: 0;
  }

  small {
    color: #555;
    font-style: italic;
  }

  p {
    color: #333;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
}
</style>
