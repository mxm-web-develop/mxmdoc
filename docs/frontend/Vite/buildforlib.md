# lib打包配置
## UI项目工具包打包
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/components/main.tsx'),
      name: 'uilib',
      fileName: (format) => `uilib.${format}.js`,
      formats:['es','cjs','umd']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react','antd'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          React: 'react',
          antd:'antd'
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@', // 别名
        replacement: path.resolve(__dirname, 'src') // 别名对应地址
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  },
  plugins: [
    dts({
      insertTypesEntry:true
    }),
    svgr({
    svgrOptions: {
      icon: true,
    },
  }),
  react()],
})
```
- dts工具用来生成对应的type文件
- 'vite-plugin-static-copy' 插件用于复制对应的pakage.json文件进入打包项目中
- "vite-plugin-svgr" -推荐 用于ui库的svg打包
- path要配合ts.config进行配置
  ```json
   "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "components": ["src/components/*"]
    },
   }
  ```