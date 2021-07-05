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
                            <span>October 2020 - Present</span>
                        </div>
                        <p>Masters of Science in <b>Computational Social Systems</b></p>
                    </section>
                </div>
                <div class="row row-2">
                    <section>
                        <i class="icon fas fa-graduation-cap"></i>
                        <div class="details">
                            <span class="title">American International University-Bangladesh (AIUB), Germany</span>
                            <span>May 2016 - January 2020</span>
                        </div>
                        <p>Bachelor of Science in <b>Computer Science & Engineering</b></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AcademicBackground;