import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { auth, onAuthStateChanged } from '../firebase';
import { signInAction, signOutAction } from '../redux/ducks/userAuth';
import { getUserInfo } from '../helpers/dbHelper';

import { PrivateRoute } from './PrivateRoute';

import { HomeScreen } from '../components/screens/HomeScreen';
import { ProductScreen } from '../components/screens/ProductScreen';
import { CartScreen } from '../components/screens/CartScreen';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/Footer';
import { Checkout } from '../components/screens/Checkout';
import { Shoes } from '../components/categories/Shoes';
import { SigninScreen } from '../components/screens/SigninScreen';
import { PlaceOrderScreen } from '../components/screens/PlaceOrderScreen';
import { ProfileScreen } from '../components/screens/ProfileScreen';
import { PersonalInfoScreen } from '../components/screens/user-profile/PersonalInfoScreen';
import { OrdersScreen } from '../components/screens/user-profile/OrdersScreen';
import { AdressScreen } from '../components/screens/user-profile/AdressScreen';
import { PointsScreen } from '../components/screens/user-profile/PointsScreen';
import { WebpayPayment } from '../components/WebpayPayment';
import { PaymentResponse } from '../components/screens/PaymentResponse';
import { ProfileRoutes } from './ProfileRoutes';
import { CategoryScreen } from '../components/screens/CategoryScreen';
import { Accesories } from '../components/categories/Accesories';
import { Woman } from '../components/categories/Woman';
import { Man } from '../components/categories/Man';
import { Pants } from '../components/categories/Pants';
import { Coats } from '../components/categories/Coats';


export const AppRouter = ({location}) => {

    const dispatch = useDispatch();

    // Firebase user data dispatch
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
            <div>

                <Navbar/>
                <Routes>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route path="/cart/:id?" component={ CartScreen }/>
                    <Route path="/product/:id" component={ ProductScreen } />
                    <Route path="/checkout" component={ Checkout } />

                    <Route path="/category/:category" component={ CategoryScreen } />

                    {/* <PrivateRoute path="/signin" component={ SigninScreen } /> */}

                    <ProfileRoutes exact path="/profile" component={ ProfileScreen } />
                    <ProfileRoutes path="/profile/personalinfo" component={ PersonalInfoScreen } />
                    <ProfileRoutes path="/profile/orders" component={ OrdersScreen } />
                    <ProfileRoutes path="/profile/address" component={ AdressScreen } />
                    <ProfileRoutes path="/profile/points" component={ PointsScreen } />

                    <Route path="/placeorder" component={ PlaceOrderScreen } />
                    <Route path="/webpayPayment" component={ WebpayPayment } /> 
                    <Route path="/paymentResponse" component={ PaymentResponse } /> 
                </Routes>

                <Footer/>

            </div>
        </Router>
    )
}
