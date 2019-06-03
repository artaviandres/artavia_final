<template>
  <div class="progress-container">
    <div class="progress-label">
      <label>{{ name }}</label>
    </div>
    <div class="progress-graph">
      <div class="actual-progress" :style="{ width: progress }"></div>
    </div>
    <label class="progress-number">{{ progress }}</label>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    name: String,
    progress: String,
  }
}
</script>

<style>
  .progress-container {
    width: 100%;
    display: flex;
    border: 1px solid black;
    height: 35px;
    align-items: center;
  }

  /* .progress-container label {
    background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */

  .progress-label {
    width: 20%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
    color: white;
    background-color: #ff5f6d;
  }

  .progress-graph {
    width: 80%;
    height: 100%;
  }

  .actual-progress {
    background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
    height: 100%;
  }

  .progress-number {
    padding-right: 5px;
  }
</style>
