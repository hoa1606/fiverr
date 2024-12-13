import useRouteElements from './routers/useRoteElements'
function App() {
  const routerElement = useRouteElements();

  return <>{routerElement}</>

}

export default App;
