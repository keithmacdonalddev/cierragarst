import React from 'react';
import Navbar from '../Navbar';
import About from '../About';
import Skills from '../Skills';
import Profile from '../Profile';
import Portfolio from '../Portfolio';
import Education from '../Education';
import Experience from '../Experience';

const Home = () => {
	return (
		<section>
			<Navbar />
			<div className='container'>
				<div className='row'>
					<div className='col s12 m4 l3'>
						<Profile />
					</div>
					<div className='col s12 m8 l9'>
						<About />
						<Skills />
						<Experience />
						<Education />
						<Portfolio />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
