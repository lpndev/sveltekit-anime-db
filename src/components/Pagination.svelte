<script>
  let { currentPage, totalPages, onPageChange } = $props();
  
  const getVisiblePages = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };
</script>

<div class="flex justify-center items-center space-x-2 mt-8">
  <!-- Previous button -->
  <button
    onclick={() => onPageChange(currentPage - 1)}
    disabled={currentPage <= 1}
    class="px-3 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
  >
    Previous
  </button>
  
  <!-- First page -->
  {#if currentPage > 3}
    <button
      onclick={() => onPageChange(1)}
      class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded"
    >
      1
    </button>
    {#if currentPage > 4}
      <span class="px-2">...</span>
    {/if}
  {/if}
  
  <!-- Visible page numbers -->
  {#each getVisiblePages() as page}
    <button
      onclick={() => onPageChange(page)}
      class="px-3 py-2 rounded {page === currentPage 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-700 hover:bg-gray-600'}"
    >
      {page}
    </button>
  {/each}
  
  <!-- Last page -->
  {#if currentPage < totalPages - 2}
    {#if currentPage < totalPages - 3}
      <span class="px-2">...</span>
    {/if}
    <button
      onclick={() => onPageChange(totalPages)}
      class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded"
    >
      {totalPages}
    </button>
  {/if}
  
  <!-- Next button -->
  <button
    onclick={() => onPageChange(currentPage + 1)}
    disabled={currentPage >= totalPages}
    class="px-3 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
  >
    Next
  </button>
</div>