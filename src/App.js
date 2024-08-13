import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './pages/root/index';
import Home from './pages/home/index';
import About from './pages/about/index';
import Pets from './pages/adopt/pets/index';
import Process from './pages/adopt/process/index';
import Help from './pages/wth/index';
import PageNotFound from './pages/notFound/notFound';

const appRouter = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={ <Root /> } >
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='pets' element={ <Pets /> } />
            <Route path='process' element={ <Process /> } />
            <Route path='help' element={ <Help /> } />
            <Route path='*' element={ <PageNotFound /> } />
        </Route >
    )
);

function App() {
  return (
    <RouterProvider router={appRouter} />
   )
};

export default App;
