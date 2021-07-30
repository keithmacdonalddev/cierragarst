import React from 'react';

const About = () => {
	return (
		<div className='card'>
			<div className='card-content'>
				<h6 className='mt-bottom'>
					<strong>ABOUT ME</strong>
				</h6>
				<p className='grey-text'>
					I am a recent graduate of Fanshawe College’s Emergency Telecommunications program. In addition to graduating
					with a 3.99 GPA, I achieved academic excellence and Dean’s Honour-roll.
				</p>
			</div>
			<div className='card-action'>
				<h6>
					<strong>PERSONAL INFO</strong>
				</h6>
				<div className='row mt'>
					<div className='col s12 m6 l6 xl6'>
						<p>
							<strong>Address:</strong> 199 Telecom drive
						</p>
						<p>
							<strong>Email:</strong> test@gmail.com
						</p>
						<p>
							<strong>Phone:</strong> (123) 456-7890
						</p>
					</div>
					<div className='s12 m6 l6 xl6'>
						<p>
							<strong>Main Language:</strong> English
						</p>
						<p>
							<strong>Second Language:</strong> Na'vi
						</p>
						<p>
							<strong>Third Language:</strong> Wookie
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
