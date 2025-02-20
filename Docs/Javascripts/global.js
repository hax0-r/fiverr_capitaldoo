const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });

  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateCounter(id, start, end, duration) {
    let obj = { count: start };
    gsap.to(obj, {
      count: end,
      duration: duration,
      scrollTrigger: {
        trigger: "#counter-section",
        start: "top 80%", // Adjust visibility trigger point
        toggleActions: "play none none none", // Runs once when visible
      },
      onUpdate: function () {
        document.getElementById(id).innerText = Math.floor(obj.count);
      }
    });
  }

  animateCounter("counter1", 0, 10000, 3); 
  animateCounter("counter2", 0, 60, 3);  
  animateCounter("counter3", 0, 300, 3);  
  animateCounter("counter4", 0, 100, 3);  
});
