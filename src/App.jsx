import './App.css'
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import Details from './components/Details';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <nav className='navigation'>
        <a href='http://localhost:5173/' className='homepage'>HOME</a>
      </nav>
      <BrowserRouter basename='/blogpages'>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/view-post' element={<ViewPost/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
