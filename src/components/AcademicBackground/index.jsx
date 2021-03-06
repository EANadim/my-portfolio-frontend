import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import useStyles from './styles';

function AcademicBackground() {
    const classes = useStyles();
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
                        <TreeView
                            className={classes.root}
                            expanded={["1"]}
                            defaultCollapseIcon={<i className={"fa fa-trophy"}></i>}
                            defaultExpandIcon={<i className={"fa fa-trophy"}></i>}
                        >
                            <TreeItem className={"root-award"} nodeId="1" label={<b>Achievements</b>}>
                                <TreeItem className={"award"} nodeId="2" label="Awarded Magna Cum Laude distinction in 19th convocation" />
                                <TreeItem className={"award"} nodeId="3" label="Awarded Dean's List Honor for Fall Semester 2018-19" />
                                <TreeItem className={"award"} nodeId="4" label="Awarded Dean's List Honor for Spring Semester 2016-17" />
                                <TreeItem className={"award"} nodeId="5" label="Awarded Dean's List Honor for Fall Semester 2016-17" />
                                <TreeItem className={"award"} nodeId="6" label="Awarded academic scholarship for outstanding results" />
                            </TreeItem>
                        </TreeView>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AcademicBackground;