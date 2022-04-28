import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiHome";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
   
    return (
        <Layout
            title="Marakesh-North"
            description="Welcome to Marakesh-North"
            className="container-fluid"
        >
            <Search />
            
        </Layout>
    );
};

export default Home;
