import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../../App.css';

const Profile = () => {
	return (
		<div className='card'>
			<div className='card-image'>
				<img src='' alt='Profile' className='activator' />
				<Link className='btn-floating halfway-fab waves-effect wave-light red'>
					<i className='material-icons activator'>more_vert</i>
				</Link>
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>Cierra Garst</span>
				<p>Emergency Telecommunications Specialist</p>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					Follow Me
					<i className='material-icons right'>close</i>
				</span>
				<p className='flex-container'>
					<i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
					<i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
					<i className='fab fa-pinterest grey-text text-darken-4 social-style'></i>
					<i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
					<i className='fab fa-linkedin grey-text text-darken-4 social-style'></i>
				</p>
			</div>
		</div>
	);
};

export default Profile;
