<script>
  export let numerator = 3;    // Numerator of the fraction
  export let denominator = 4;  // Denominator of the fraction
  export let subtext;
  export let foreground = "text-gray-600";
  export let background = "text-gray-300";
  export let options = {
    showDenominator: true
  }
  export let addtlStyles = "";

  const value = numerator/denominator * 75;
</script>

<div class="relative size-40 {foreground} inline-block {addtlStyles}">
  <svg class="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Circle (Gauge) -->
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current {background}" stroke-width="1" stroke-dasharray="75 100"></circle>

    <!-- Gauge Progress -->
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current {foreground}" stroke-width="2" stroke-dasharray="{value} 100"></circle>
  </svg>

  <!-- Value Text -->
  <div class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-[62%] text-center">
    <span class="numerator text-4xl font-bold block mb-2">{numerator}</span>
    {#if options.showDenominator}
      <hr class="divider border-2 w-8 mx-auto {foreground} "/>
      <span class="denominator text-4xl font-bold block">{denominator}</span>
    {/if}
    <span class="subtext block">{subtext}</span>
  </div>
</div>