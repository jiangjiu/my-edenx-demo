import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  source: {
    alias: {
      '@': './src',
      '@router': '@modern-js/runtime/router',
    },
  },
  performance: {
    preload: true,
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
  output: {
    // disableMinimize: true,
  },
  builderPlugins: [
    // builderPluginWebDoctor({
    //   disableClientServer: Boolean(process.env.CI_ACTOR), // 建议 CI 环境下关闭 server 能力，否则会卡住 pipeline 流程，检测 CI 环境可以使用 `process.env.CI_ACTOR`.
    // }),
  ],
  tools: {},
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      // bundler: 'experimental-rspack',
    }),
    tailwindcssPlugin(),
  ],
});
