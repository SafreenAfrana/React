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
import LifecycleA from './components/LifecycleA'
import LifecycleC from './components/LifecycleC';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import ParentComp from './components/ParentComp'
import ParentMemo from './components/ParentMemo'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo'
import Name from './components/Name';
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/Context/ComponentC'
import {UserProvider} from './components/Context/UserContext'
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
      {/*<Form />*/}
      {/*<LifecycleA />*/}
    
      {/*<LifecycleC />*/}
      {/*<FragmentDemo />*/}
      {/*<Table />*/}
      {/*<ParentComp />*/}
      {/*<ParentMemo />*/}
      {/*<RefsDemo />*/}
      {/*<FocusInput />*/}
      {/*<FRParentInput />*/}
      {/*<PortalDemo />*/}
      {/*<ErrorBoundary>
      <Name  myName='Safreen' /></ErrorBoundary>
      <ErrorBoundary>
      <Name  myName='Afrana' />
      </ErrorBoundary>*/}
      {/*<ClickCounter />
      <HoverCounter />*/}
      <UserProvider value="safreen">
      <ComponentC />
      </UserProvider>
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
