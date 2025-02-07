<script>
  import { onMount } from 'svelte';

  export let headings = [];
  let currentHeading = '';
  const dispatchChange = () => {
    const event = new CustomEvent('heading-change', {
      detail: currentHeading
    })
    window.dispatchEvent(event);
  };

  onMount(() => {
    // Intersection Observer configuration
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '-80% 0px -20% 0px',
      threshold: 0, // 10% of the heading needs to be visible
    };

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentHeading = entry.target.id;
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each heading
    headings.forEach((headingId) => {
      const element = document.getElementById(headingId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  });

  $: currentHeading && dispatchChange();
</script>
