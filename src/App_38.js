import './App_38.scss';
import Homepage_38 from './pages/Homepage_38';
import Shoppage_38 from './pages/Shoppage_38';
import ContactPage_38 from './pages/ContactPage_38';
import SigninPage_38 from './pages/SigninPage_38';
import { Switch, Route } from 'react-router-dom';
import Header_38 from './components/Header_38';
function App_38() {
  return (
    <div >
      <Header_38/>
      <Switch>
        <Route exact path='/' component={Homepage_38} />
        <Route exact path='/shop_38' component={Shoppage_38} />
        <Route exact path='/contact_38' component={ContactPage_38} />
        <Route exact path='/signin_38' component={SigninPage_38} />
      </Switch>
    </div>
  );
}

export default App_38;
