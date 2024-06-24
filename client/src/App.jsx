import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './Components/Header'
import FooterCom from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost.jsx'
import PostPage from './pages/PostPage.jsx'
// import Search from './pages/Search.jsx'
import Search from './pages/Search.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

export default function App() {
  return (
<BrowserRouter>
<ScrollToTop/>
<Header/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/sign-in" element={<Signin/>}/>
   <Route path="/sign-up" element={<Signup/>}/>
   <Route path="/search" element={<Search/>}/>
  
    <Route element={<PrivateRoute/>}>
  

           

   <Route path="/dashboard" element={<Dashboard/>}/>
   
   
   </Route>




   <Route element={<OnlyAdminPrivateRoute/>}>
  

           

   <Route path="/create-post" element={<CreatePost/>}/>
   <Route path="/update-post/:postId" element={<UpdatePost/>}/>
   
   
   
   </Route>








   <Route path='/projects' element={<Projects/>}/>
   <Route path='/post/:postSlug' element={<PostPage/>}/>



  
  
  
  </Routes>
<FooterCom/>
</BrowserRouter>
  )
}
