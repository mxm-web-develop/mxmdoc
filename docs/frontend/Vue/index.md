
# Vue中的包装React组件

在 Vue 中，您可以创建一个包装器组件，该组件将在其模板中渲染一个 React 组件。这个包装器组件将在 Vue 的生命周期方法中创建和销毁 React 组件，并将其渲染到 Vue 模板中。

以下是一个使用 Vue 包装器组件渲染 React 组件的示例代码：

```javascript
html
Copy code
<template>
  <div ref="container"></div>
</template>

<script>
import React from 'react';
import ReactDOM from 'react-dom';

export default {
  name: 'VueReactWrapper',
  props: {
    componentName: String
  },
  mounted() {
    // 创建 React 组件实例
    const reactInstance = React.createElement(
      this.componentName,
      {},
      null
    );

    // 将 React 组件渲染到 Vue 模板中
    ReactDOM.render(reactInstance, this.$refs.container);
  },
  beforeUnmount() {
    // 销毁 React 组件实例
    ReactDOM.unmountComponentAtNode(this.$refs.container);
  }
};
</script>
```
在这个例子中，我们定义了一个名为 VueReactWrapper 的 Vue 组件。该组件具有一个名为 componentName 的 prop，该 prop 指定要渲染的 React 组件的名称。在 mounted 生命周期方法中，我们使用 React.createElement 创建了一个 React 组件实例，并使用 ReactDOM.render 将其渲染到 Vue 模板中。在 beforeUnmount 生命周期方法中，我们使用 ReactDOM.unmountComponentAtNode 销毁 React 组件实例。

在 Vue 模板中，您可以使用以下代码来渲染包装器组件：

```javascript
<template>
  <VueReactWrapper componentName="MyReactComponent" />
</template>

<script>
import VueReactWrapper from './components/VueReactWrapper.vue';

export default {
  name: 'App',
  components: {
    VueReactWrapper
  }
};
</script>
```
在这个例子中，我们将 VueReactWrapper 组件导入到 Vue 应用程序中，并将其注册为 App 组件的子组件。在模板中，我们使用 VueReactWrapper 标签渲染该组件，并使用 componentName prop 指定要渲染的 React 组件的名称。