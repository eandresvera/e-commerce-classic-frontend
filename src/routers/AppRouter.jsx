import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { auth, onAuthStateChanged } from '../firebase';
import { signInAction, signOutAction } from '../redux/ducks/userAuth';
import { getUserInfo } from '../helpers/dbHelper';

import { HomeScreen } from '../components/screens/HomeScreen';
import { ProductScreen } from '../components/screens/ProductScreen';
import { CartScreen } from '../components/screens/CartScreen';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/Footer';
import { Checkout } from '../components/screens/Checkout';
import { SigninScreen } from '../components/screens/SigninScreen';
import { PlaceOrderScreen } from '../components/screens/PlaceOrderScreen';
import { ProfileScreen } from '../components/screens/ProfileScreen';
import { PersonalInfoScreen } from '../components/screens/user-profile/PersonalInfoScreen';
import { OrdersScreen } from '../components/screens/user-profile/OrdersScreen';
import { AdressScreen } from '../components/screens/user-profile/AdressScreen';
import { PointsScreen } from '../components/screens/user-profile/PointsScreen';
import { WebpayPayment } from '../components/WebpayPayment';
import { PaymentResponse } from '../components/screens/PaymentResponse';
import { CategoryScreen } from '../components/screens/CategoryScreen';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = ({location}) => {

    const dispatch = useDispatch();

    // Firebase user data dispatch
    // 
    // User states 
    // user = null -> No authenticated user
    // user = undefined -> Awaiting response
    // user = true -> User authenticated
    useEffect(() => {

        onAuthStateChanged( auth, async user => {

            if (user) {

                try {
                    const data = await getUserInfo( user.uid, user  );
                    dispatch( signInAction(data) );
                } catch (error) {
                    console.log(error);
                }
            }else{
                dispatch( signOutAction() );
            }
        })
    }, [dispatch])    

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <HomeScreen /> }/>

                <Route path="cart/:id?" element={ <CartScreen /> }/>

                <Route path="/product/:productId" element={ <ProductScreen /> } />
                <Route path="/checkout" element={ <Checkout /> } />

                <Route path="/category/:category" element={ <CategoryScreen /> } />

                <Route path="/signin" element={ <SigninScreen /> } />

                <Route path="profile" element={   <ProtectedRoute> <Outlet /> </ProtectedRoute>   }>
                    <Route index element={ <ProfileScreen /> } />
                    <Route path="personalinfo" element={ <PersonalInfoScreen /> }/>
                    <Route path="orders" element={ <OrdersScreen /> }/>
                    <Route path="address" element={ <AdressScreen /> }/>
                    <Route path="points" element={ <PointsScreen /> }/>
                </Route>

                <Route path="/placeorder" element={ <PlaceOrderScreen /> } />
                <Route path="/webpayPayment" element={ <WebpayPayment /> } /> 
                <Route path="/paymentResponse" element={ <PaymentResponse /> } /> 
            </Routes>

            <Footer/>
        </Router>
    )
}
