import React from 'react';
import Header from '../Layout/Header';
import Banner from '../Banner';
import Skills from '../Skills';
import Services from '../Services';
import Footer from '../Layout/Footer';
import WorkingExperience from "../WorkingExperience";
import Portfolio from '../Portfolio';
import AcademicBackground from "../AcademicBackground";
import Review from '../Review';
import Contact from '../Contact';
import Blog from '../Blog';
import { projects } from "../../contents/projects";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Skills />
            <Services />
            <WorkingExperience />
            <AcademicBackground />
            <Portfolio projects={projects} />
            {/* <Review /> */}
            <Contact />
            {/* <Blog/> */}
            <Footer />
        </>
    );
}

export default App;