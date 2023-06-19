/*import React, { useState } from 'react'
import './style.css'

import AceEditor from 'react-ace';
import "../../node_modules/ace-builds/src-min-noconflict/theme-monokai"
import "../../node_modules/ace-builds/src-min-noconflict/theme-twilight"
import { ToastContainer, toast } from 'react-toastify';


function Editor() {
   const [change,setChange]=useState("")

   const handleClick=()=>{
    const data={
      change
    }
    console.log(data)
    toast.success('User Logged in Successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
 }
     

    return (
        <div>
            <div className="h-100 text-white mt-3">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
            <ToastContainer />
                <div className="d-flex justify-content-between flex-md-row flex-column">
                    <div className='problem grey rounded overflow-hidden'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true">
                                    
                                    Description
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                            
                                    All Submissions
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active p-3 hh"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                                tabIndex={0}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>1. Two Sum</h5>

                                    <h5 className=" fw-semibold" style={{ color: 'green' }}>Easy</h5>

                                </div>
                                <hr />
                                <div id="desc">
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-5 grey solution rounded overflow-hidden mt-md-0 mt-2">
                            <div className="d-flex justify-content-between py-2">
                                <div className="col-md-3 ms-2">
                                    <select onChange={(e) => setChange(e.target.value)} id="inputState" className="form-select a form-select grey border-secondary text-white">
                                        <option value="javascript" selected="" className="mb-3 ">
                                            Javascript
                                        </option>
                                        <option value="java">java</option>
                                        <option value="python">Python</option>
                                    </select>
                                </div>
                                <div>
                                    <button onClick={handleClick} className="btn btn-secondary me-4 lightGreen border-0">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className="code black d-flex flex-column justify-content-between align-items-between ">
                                
                                <div className="border coding overflow-auto grey rounded-bottom">
                                    <AceEditor
                                        placeholder={"Enter your code here"}
                                        
                                        height={263}
                                        width='100%'
                                        theme="twilight"
                                        name="blah2"
                                        
                                        fontSize={12}
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                       
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: true,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 0,
                                        }} />
                                </div>

                            </div>
                            </div>




                        </div>



                    </div>

                </div>

            </div>
            )
}
            export default Editor

            */


import React from "react"
function Editor() {
    return (
        <div>

            <h1 className="text-white">Editor</h1>
        </div>
    )
}
export default Editor

