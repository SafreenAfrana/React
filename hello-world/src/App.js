import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import Ternary from './components/Ternary'
import NameList from './components/NameList'
import Index from './components/Index'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './components/appStyles.css'
import   './components/appStyles1.css'
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      {/*<Greet name='safreen' nickName='smart'>
      <button>Action</button>
  </Greet>*/}
      {/*<Welcome name='afrana'/>*/}
      {/*<Message />*/}
      {/*<Counter />*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick />*/}
      {/*<EventBind />*/}
      {/*<ParentComponent />*/}
      {/*<UserGreeting />*/}
      {/*<Ternary />*/}
      {/*<NameList />*/}
      {/*<Index />*/}
      {/*<StyleSheet primary={true} />*/}
      {/*<Inline />*/}
      {/*<h1 className='error'>This is an error statement</h1>*/}
      {/*<h1 className='success'>Success</h1>*/}
      <Form />
      {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
  Hello React</p>
      <a className="App-link" href="https://reactjs.org" target="_blank"
      rel="noopener noreferrer">Learn React</a>
</header>*/}


    </div>
  );
}

export default App;
