import adapter from '@sveltejs/adapter-auto'

const config = {
  kit: {
    // adapter: adapter(),
    alias: {
      '@': './src/*'
    }
  }
}

export default config
