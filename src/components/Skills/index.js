import React from 'react';

const Skills = () => {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>PROFESSIONAL SKILLS</strong>
					</h6>
					<div className='row mt-top'>
						<div className='col s6'>
							<p>Problem Solving</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '89%' }}></div>
							</div>
						</div>
						<div className='col s6'>
							<p>Communication</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '95%' }}></div>
							</div>
						</div>
						<div className='col s6'>
							<p>Teamwork</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '90%' }}></div>
							</div>
						</div>
						<div className='col s6'>
							<p>Creativity</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '79%' }}></div>
							</div>
						</div>
						<div className='col s6'>
							<p>Emotional Intelligence</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '85%' }}></div>
							</div>
						</div>
						<div className='col s6'>
							<p>Organization</p>
							<div className='progress grey lighten-1'>
								<div className='determinate blue' style={{ width: '92%' }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
