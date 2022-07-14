<template>
  <div id="page">
    <div
      class="container"
      :class="{ 'hover-left': hoverLeft, 'hover-right': hoverRight }"
    >
      <div
        class="split left"
        @mouseenter="hoverLeft = true"
        @mouseleave="hoverLeft = false"
      >
        <h1>Playstation 5</h1>
        <a href="#" class="btn">Buy Now</a>
      </div>

      <div
        class="split right"
        @mouseenter="hoverRight = true"
        @mouseleave="hoverRight = false"
      >
        <h1>Xbox Series X</h1>
        <a href="#" class="btn">Buy Now</a>
      </div>
    </div>

    <back-home></back-home>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'split-landing-page',
  setup() {
    const hoverLeft = ref(false)
    const hoverRight = ref(false)
    return {
      hoverLeft,
      hoverRight
    }
  }
}
</script>

<style lang="less" scoped>
@left-bg-color: rgba(87, 84, 236, 0.7);
@right-bg-color: rgba(43, 43, 43, 0.8);
@left-btn-hover-color: rgba(87, 84, 236, 1);
@right-btn-hover-color: rgba(28, 122, 28, 1);
@hover-width: 75%;
@other-width: 25%;
@speed: 1000ms;

#page {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;

  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    // overflow: hidden;

    &.left {
      left: 0;
      background: url('ps.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      transition: all @speed ease-in-out;

      .btn:hover {
        background-color: @left-btn-hover-color;
        border-color: @left-btn-hover-color;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: @left-bg-color;
        transition: all @speed ease-in-out;
      }
    }

    &.right {
      right: 0;
      background: url('xbox.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      transition: all @speed ease-in-out;

      .btn:hover {
        background-color: @right-btn-hover-color;
        border-color: @right-btn-hover-color;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: @right-bg-color;
        transition: all @speed ease-in-out;
      }
    }

    h1 {
      position: absolute;
      left: 50%;
      top: 20%;
      font-size: 4rem;
      color: #fff;
      white-space: nowrap;
      transform: translateX(-50%);
    }

    .btn {
      position: absolute;
      left: 50%;
      top: 40%;
      width: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
      padding: 1.5rem;
      border: 0.2rem solid #fff;
      transform: translateX(-50%);
    }
  }
}

.hover-left .left {
  width: @hover-width;
}

.hover-left .right {
  width: @other-width;
}

.hover-right .right {
  width: @hover-width;
}

.hover-right .left {
  width: @other-width;
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem !important;
    top: 30% !important;
  }

  .btn {
    padding: 1.2rem !important;
    width: 12rem !important;
  }
}
</style>
