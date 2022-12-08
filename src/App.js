// import logo from './logo.svg';
import './App.css';
import RouterPage from './page/RouterPage';

function App() {
  console.error = (function() {
    var error = console.error

    return function(exception) {
        if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
            error.apply(console, arguments)
        }
    }
  })()
  return (
    <RouterPage />
  );
}

export default App;