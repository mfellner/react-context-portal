# Render React elements through a "context portal"

Based on @visualglitch91's [tweet](https://twitter.com/visualglitch91/status/1363135740109062146).

Explanation:

```jsx
// Provides page header context:
<PageHeaderProvider>
  <App>
    <Header /> {/* Uses page header context. */}
    <Content>
      {/* Renders children into the context state. */}
      <PageHeaderAddon>Will render in the header.</PageHeaderAddon>
    </Content>
  </App>
</PageHeaderProvider>
```
