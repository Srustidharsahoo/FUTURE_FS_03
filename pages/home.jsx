import { Banner } from "../component/banner"
import { Catagory } from "../component/catagory"
import { Feature } from "../component/feature"
import { Fotter } from "../component/fotter"
import { Nav } from "../component/navbar"
import { Product } from "../component/product"
import { PromoCards } from "../component/PromoCards"
import { useState } from "react";
import { food_items } from "../food"
import { useSearch } from "../contex/searchContex"



export const Home = () => {

    const { search } = useSearch();

    return (
        <>
            <Nav />
            
            {/* Conditionally render Banner, Category, and PromoCards based on the search term */}
            {!search && (
                <>
                    <Banner />
                    <Catagory/>
                    <PromoCards />
                </>
            )}

            <Product />
            <Feature />
            <Fotter />
        </>
    )
}