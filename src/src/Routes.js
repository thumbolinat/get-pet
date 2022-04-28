import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import Home from "./components/home/Home";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/user/UserDashboard";
import AdminRoute from "./components/auth/AdminRoute";
import AdminDashboard from "./components/user/AdminDashboard";
import AddCategory from "./components/admin/AddCategory";
import AddProduct from "./components/admin/AddProduct";
import Shop from "./components/home/Shop";
import Product from "./components/home/Product";
import Cart from "./components/home/Cart";
import Orders from "./components/admin/Orders";
import Profile from "./components/user/Profile";
import ManageProducts from "./components/admin/ManageProducts";
import UpdateProduct from "./components/admin/UpdateProduct";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <PrivateRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
