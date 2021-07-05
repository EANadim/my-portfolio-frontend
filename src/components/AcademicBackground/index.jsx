import React from 'react';

function AcademicBackground() {
    return (
        <div class="academic-background" data-wow-delay="0.1s">
            <header class="bg-colorful-section-header text-center" data-wow-delay="0.1s">
                <p>Academic Background</p>
                <h2>Degree & Institutes</h2>
            </header>
            <div class="wrapper">
                <div class="center-line">
                    <a class="scroll-icon"><i class="fas fa-caret-up"></i></a>
                </div>
                <div class="row row-1">
                    <section>
                        <i class="icon fas fa-graduation-cap"></i>
                        <div class="details">
                            <span class="title">RWTH Aachen University, Germany</span>
                            <span><i>October 2020 - Present</i></span>
                        </div>
                        <br />
                        <p>Masters of Science in <b>Computational Social Systems</b></p>
                    </section>
                </div>
                <div class="row row-2">
                    <section>
                        <i class="icon fas fa-graduation-cap"></i>
                        <div class="details">
                            <span class="title">American International University-Bangladesh (AIUB), Bangladesh</span>
                            <span><i>May 2016 - January 2020</i></span>
                        </div>
                        <br />
                        <p>Bachelor of Science in <b>Computer Science & Engineering</b></p>
                        <p><i><b>Cgpa: </b>1.2 in German scale</i></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AcademicBackground;