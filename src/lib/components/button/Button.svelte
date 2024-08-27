<script lang="ts">
  // No props needed, direct usage in component
</script>

<div class="flex justify-center items-center" style="height: 100vh;">
  <button class="relative bg-[#FF8500] text-white font-bold text-lg uppercase tracking-widest overflow-hidden" style="border: none; outline: none; width: 320px; height: 50px; padding: 0 20px; box-sizing: border-box;">
    Quote
    <div style="position: absolute; inset-y-0 right-0; width: 20%; min-width: 60px; background: white; clip-path: polygon(100% 0, 0 50%, 100% 100%);">
      <!-- Ensuring the triangle maintains proportion across sizes -->
    </div>
  </button>
</div>

<style>
  button {
    font-family: 'Arial', sans-serif; /* Ensuring text consistency */
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensures text and triangle do not overlap */
  }
</style>
