import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    require.resolve("@umijs/plugins/dist/antd"),
    require.resolve("@alita/plugins/dist/keepalive"),
    require.resolve("@alita/plugins/dist/tabs-layout"),
  ],
  antd: {},
  keepalive: [/./],
  tabsLayout: {},
});
