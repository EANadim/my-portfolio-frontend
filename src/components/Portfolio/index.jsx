import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

function Portfolio({ projects }) {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const handleProjectFilter = (key) => {
        document.querySelectorAll('*[id^="technoloy_"]').forEach(node => {
            node.classList.remove('filter-active');
        })
        document.getElementById("technoloy_" + key).classList.add('filter-active');
        if (key === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.technologies.includes(key));
            setFilteredProjects(filtered);
        }
    }

    return (
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="portfolio-filter">
                            <li id={"technoloy_All"} class="filter-active" onClick={() => handleProjectFilter("All")}>All</li>
                            <li id={"technoloy_Django"} onClick={() => handleProjectFilter("Django")}>Django</li>
                            <li id={"technoloy_React"} onClick={() => handleProjectFilter("React")} >React</li>
                            <li id={"technoloy_Angular"} onClick={() => handleProjectFilter("Angular")}>Angular</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    {filteredProjects.map(project => (
                        <div key={project.name} class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                            <div class="portfolio-wrap">
                                <div class="portfolio-img">
                                    <img src={project.imgSrc} alt="Image" />
                                    <span className="technology-text"><b>{project.technologies.join(" | ")}</b></span>
                                </div>
                                <div class="portfolio-text">
                                    <h3>{project.name}</h3>
                                    <a class="btn" data-tip data-for={"tooltip_" + project.name} href={project.url} data-lightbox="portfolio"><i class="fa fa-info"></i></a>
                                    <ReactTooltip id={"tooltip_" + project.name} className={"tooltip"}>
                                        <span>{project.details}</span>
                                    </ReactTooltip>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;