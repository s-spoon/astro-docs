<script>
  export let icon = ''; // You can pass an icon (optional)
  let showSpinner = false;

  document.addEventListener('astro:before-preparation', () => {
    showSpinner = true
  });
  document.addEventListener('astro:after-preparation', () => {
    showSpinner = false
  });
</script>

<div class="loading-overlay" class:active={showSpinner}>
  <div class="spinner">
    <!-- Optional icon in the middle of the spinner -->
    {#if icon}
      <img src={icon} alt="Loading Icon" class="icon" />
    {/if}
    <div class="loader"></div>
  </div>
</div>

<style lang="postcss">
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* display: flex; */
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6); /* Slight transparency */
    z-index: 9998;
    transition: opacity 0.3s ease;

    &.active {
      display: flex;
    }
  }
  
  .loader {
    border: 6px solid #f3f3f3;
    border-top: 8px solid theme(colors.aptean.yellow.dark);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    padding: 40px;
    animation: spin 2s linear infinite;
    background-color: white;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .icon {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
</style>
