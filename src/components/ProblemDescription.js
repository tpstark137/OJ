import React from "react";
import "./style.css"


function ProblemDescription() {
    return (
		<div className="h-screen black text-white mt-4">
			{/* TAB */}
			<div className="d-flex justify-content-between flex-md-row flex-column">
				<div className=" problem grey rounded overflow-hidden ">
				<ul
				className="nav nav-tabs" id="myTab" role="tablist"
			  >
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
					
					Description
				  </button>
				</li>
				<li className="nav-item " role="presentation">
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
					
					Submissions
				  </button>
				</li>
				</ul>
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>1. Two Sum</div>
						</div>
						<hr />
						
							<div className='flex items-center mt-3'>
								<div
									className={` inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
								>
									<p className="text-green">Easy</p>
								</div>
								

							</div>
						

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							<p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

                            You may assume that each input would have exactly one solution, and you may not use the same element twice.
                            
                            You can return the answer in any order.</p>
						</div>

						{/* Examples */}
						<div className='mt-4'>
							
								<div>
									<p className='font-medium text-white '>Example 1: </p>
									
									<div className='example-card'>
										<pre>
											<strong className='text-white'>Input: </strong> 
                                            <p className="text-white">nums = [2,7,11,15], target = 9</p>
											<br />
											<strong className="text-white">Output:</strong>
											<p>[0,1]</p>
                                            <br />
                                            <strong >Explanation:</strong>
                                            <p>Because nums[0] + nums[1] == 9, we return [0, 1].</p>
                                            
											
										</pre>
									</div>
								</div>
							
						</div>

						{/* Constraints */}
						<div className='my-8 pb-4'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc '>
								<li> nums.length==100</li>
								<li>a greater then 10</li>
								<li>b grater then 10</li>
								<li>ans lie between 100</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;