import React from 'react'
import Split from 'react-split'
import ProblemDescription from './ProblemDescription'
import './style.css'
import AceEditor from 'react-ace';
import "../../node_modules/ace-builds/src-min-noconflict/theme-twilight"

function Workspace() {
    return (
        <Split className="split">
            <ProblemDescription  />
            <div>
                <div className="border coding overflow-auto grey rounded-bottom">
                
                <div className="d-flex justify-content-between py-2">
                  <div className="col-md-3 ms-2">
                   <select  id="inputState" className="form-select a form-select grey border-secondary text-white">
                    
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                    <option value="java">Javascript</option>
                  </select>
                  </div>
                  <div>
                    <button   className="btn btn-secondary me-4 lightgreen border-0">
                      Submit
                    </button>
                  </div>
                </div>
                

                    <AceEditor
                        placeholder={"Enter your code here"}

                        height={400}
                        width='100%'
                        theme="twilight"
                        name="codingPandaEditor"

                        fontSize={20}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}

                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 0

                        }} 
                       />
                       
                </div>
                
                <div className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden">
                    <p>Your code is Running Please wait!!</p>
                </div>
                </div>


            
        </Split>
    )
}
export default Workspace;