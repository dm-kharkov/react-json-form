import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, join } from 'path'
import { readdirSync } from 'fs'
import graphql from '@rollup/plugin-graphql'

const DIST_DIR = join(__dirname, 'dist')
const SRC_DIR = resolve(__dirname, 'src')
const ALIASES = createResolveAliases()

const ENV_VARS = {}

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...mapEnvVars(ENV_VARS),
    ...loadEnv(mode, process.cwd())
  }
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const BRAND_DIR = resolve(__dirname, 'brand', process.env.VITE_BRAND)

  const config = {
    base: '/',
    root: SRC_DIR,
    build: {
      outDir: DIST_DIR,
      chunkSizeWarningLimit: 1600
    },
    plugins: [react(), graphql()],
    esbuild: {
      loader: 'jsx',
      include: /\/src\/.*\.js$/,
      exclude: []
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    },
    resolve: {
      alias: {
        brand: BRAND_DIR,
        ...ALIASES
      }
    },
    server: {
      strictPort: true,
      port: 8000
    }
  }

  if (mode === 'development') {
    config.define = { global: 'window' } // AWS issue handling
  }

  return defineConfig(config)
}

function createResolveAliases () {
  return readdirSync(SRC_DIR, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .reduce((acc, dir) => {
      acc[dir] = join(SRC_DIR, dir)
      return acc
    }, {})
}

function mapEnvVars (vars) {
  const nextVars = {}

  for (const [key, value] of Object.entries(vars)) {
    nextVars[`VITE_${key}`] = value
  }

  return nextVars
}
