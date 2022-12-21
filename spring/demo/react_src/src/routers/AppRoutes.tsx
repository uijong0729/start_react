import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { LoginPage } from '../components/pages/LoginPage';
import { TestPage } from '../components/pages/TestPage';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path=''>
                {/* Home Page */}
                <Route path="/home" element={<Home />}/>
                <Route path="/todo" element={<TestPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/logout" element={<Navigate replace to="/"/>}/>
            </Route>
            
            {/* 404 페이지 */}
            <Route path='*' element={<Home/>}/>
        </Routes>
    )
}