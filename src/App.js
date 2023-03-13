
import MainApp from './Components/MainApp';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
<GoogleOAuthProvider clientId='176699754845-5v0gabl72l27hi8ehe1lobv9nu9of3ra.apps.googleusercontent.com' >
  <MainApp/>
</GoogleOAuthProvider >)
}

export default App;
