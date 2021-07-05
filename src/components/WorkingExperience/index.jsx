import React from 'react';

function WorkingExperience() {
    return (
        <div class="experience" id="experience">
            <div class="container">
                <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <div class="timeline">
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">01 September, 2019 - 30 June, 2021</div>
                            <h2>Junior Software Engineer</h2>
                            <h4>Workspace Infotech Limited</h4>
                            {/* <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p> */}
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">01 May, 2019 - 31 August, 2019</div>
                            <h2>Software Engineer Intern</h2>
                            <h4>Workspace Infotech Limited</h4>
                            {/* <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkingExperience;