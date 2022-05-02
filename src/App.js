import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';





function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="post">
          <Route index element={<NewPost/>} />
          <Route path=":id" element={<PostPage/>} />
        </Route>
        <Route path='/edit/:id' element={<EditPost />}/>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  </Router>
    
  );
}

export default App;
