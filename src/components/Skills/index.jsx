import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
    const basicColor = "#106a72"
    return (
        <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="section-header text-center">
                            <p>Skills</p>
                            <h2>Two Years Experience</h2>
                            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida</span> */}
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="skills">
                                <div class="skill-name">
                                    <p>React</p><p>80%</p>
                                </div>
                                <ProgressBar completed={80} bgColor={basicColor}/>
                                <div class="skill-name">
                                    <p>Angular</p><p>70%</p>
                                </div>
                                <ProgressBar completed={70} bgColor={basicColor} />
                                <div class="skill-name">
                                    <p>Django</p><p>70%</p>
                                </div>
                                <ProgressBar completed={70} bgColor={basicColor} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="skills">
                                <div class="skill-name">
                                    <p>PostGres</p><p>60%</p>
                                </div>
                                <ProgressBar completed={60} bgColor={basicColor} />

                                <div class="skill-name">
                                    <p>CSS</p><p>60%</p>
                                </div>
                                <ProgressBar completed={60} bgColor={basicColor} />
                                <div class="skill-name">
                                    <p>Scrappy</p><p>50%</p>
                                </div>
                                <ProgressBar completed={50} bgColor={basicColor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;