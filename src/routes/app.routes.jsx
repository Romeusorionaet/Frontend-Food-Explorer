import {Routes, Route} from 'react-router-dom';

import {AdminEdit} from '../pages/AdminEdit';
import {AdminAddPlate} from '../pages/AdminAddPlate';
import {Details} from '../pages/Details';
import {Home} from '../pages/Home';
import {Payment} from '../pages/Payment';
import {OrderHistory} from '../pages/OrderHistory';
import {OrderHistoryAdm} from '../pages/OrderHistoryAdm';
import {Favorites} from '../pages/Favorites';
import {FavoritesAdmin} from '../pages/FavoritesAdmin';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/AdminEdit/:id' element={<AdminEdit />} />
            <Route path='/AdminAddPlate' element={<AdminAddPlate />} />
            <Route path='/Details/:id' element={<Details />} />
            <Route path='/' element={<Home />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/OrderHistory' element={<OrderHistory />} />
            <Route path='/OrderHistoryAdm' element={<OrderHistoryAdm />} />
            <Route path='/Favorites' element={<Favorites />} />
            <Route path='/FavoritesAdmin' element={<FavoritesAdmin />} />
        </Routes>
    )
}