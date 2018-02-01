import React from 'react';
import Tilt from 'react-tilt';
import Brain from './brain-80.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt' options={{ max:45}} style={{height: 200, width: 200}}>
				<div className='Tilt-inner pa3'> 
					<img style={{paddingTop: '5px'}} alt='logo' src={Brain} /> </div>
			</Tilt>
		</div>
	);
}

export default Logo;