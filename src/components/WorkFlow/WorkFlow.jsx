import React, { useState } from 'react';
import SectionHeader from '../../shared/sectionHeader/SectionHeader';
import './WorkFlow.css';
import WorkflowImage from '../../assets/workflow/workflow.png';

const WorkFlow = () => {
    const [clickedItem, setClickedItem] = useState('1. Defining Goal');

    const handleClick = (e) => {
        setClickedItem(e.target.innerText)
    }
    return (
        <div className="workflow-wrapper">
            <div className="container workflow">
                <SectionHeader
                    center
                    small
                    title={'Workflow'}
                />
                <div className="row workflow-accordion">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="accordion accordion-flush" id="accordionFlushExample">

                            <div className="accordion" id="accordionExample">
                                <div className={`accordion-item ${clickedItem === '1. Defining Goal' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={handleClick}>
                                            1. Defining Goal
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${clickedItem === '2. Product Design' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={handleClick}>
                                            2. Product Design
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.
                                        </div>
                                    </div>
                                </div>

                                <div className={`accordion-item ${clickedItem === '3. Development' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={handleClick}>
                                            3. Development
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.',
                                        </div>
                                    </div>
                                </div>

                                <div className={`accordion-item ${clickedItem === '4. Testing' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={handleClick}>
                                            4. Testing
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.',
                                        </div>
                                    </div>
                                </div>

                                <div className={`accordion-item ${clickedItem === '5. Product Release' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onClick={handleClick}>
                                            5. Product Release
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.',
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${clickedItem === '6. Maintenance Support' ? 'styled-item ' : ''}`} >
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" onClick={handleClick}>
                                            6. Maintenance Support
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.',
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* {
                            workflowData.map(el => <div className="accordion-item">
                                <h2 className="accordion-header" id={el.expandId}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${el.collapseId}`} aria-expanded={el.id === 1 ? true : false} aria-controls={el.collapseId}>
                                        {el.title}
                                    </button>
                                </h2>
                                <div id={el.collapseId} className="accordion-collapse collapse" aria-labelledby={el.expandId} data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {el.description}
                                    </div>
                                </div>
                            </div>)
                        } */}


                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={WorkflowImage} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;