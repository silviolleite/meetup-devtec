import React from 'react';
import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./Header";
import Partners from "./Partners";
import About from "./About";
import Speakers from "./Speakers";
import Subjects from "./Subjects";
import Subscription from "./Subscription";
import Social from "./Social";

export default function Home(props) {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Partners/>
            <About/>
            <Speakers/>
            <Subjects/>
            <Subscription/>
            <Social/>
            <Footer />
        </div>
    )
}