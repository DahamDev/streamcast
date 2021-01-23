
import FooterContainer from './containers/footer';
import JumboContainer from './containers/jumbotron';
import FaqContainer from './containers/faqs';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {Home, Browser, SignIn, SignUp} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>

        <Route exact path={ROUTES.BROWSE}>
          <Browser/>
        </Route>

        <Route exact path={ROUTES.SIGNIN}>
          <SignIn/>
        </Route>

        <Route exact path={ROUTES.SIGNUP}>
          <SignUp/>
        </Route>
        
      </Router>
        
    </div>
  );
}

export default App;
