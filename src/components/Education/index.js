import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Education = () => {
	return (
		<div className='card'>
			<div className='card-content'>
				<h6>
					<strong>EDUCATION</strong>
				</h6>
				<table className='striped'>
					<thead>
						<tr>
							<th>Certification</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Emergency Telecommunications</td>
							<td>2019</td>
							<td>
								<Link className='btn blue lighten-2'>View</Link>
							</td>
						</tr>
						<tr>
							<td>Emergency Telecommunications</td>
							<td>2019</td>
							<td>
								<Link className='btn blue lighten-2'>View</Link>
							</td>
						</tr>
						<tr>
							<td>Emergency Telecommunications</td>
							<td>2019</td>
							<td>
								<Link className='btn blue lighten-2'>View</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Education;
