import React, { useContext } from 'react';
import './index.scss';
import TypedText from '../TypedText';
import SocialLinks from '../SocialLinks';
import Info from '../Info';
import Skills from '../Skills';
import { ThemeContext } from '../../context/ThemeContext';

const Profile = () => {
	const { backgroundImage, type } = useContext(ThemeContext);
	return (
		<div className='profile'>
			<div className='profile__banner'>
				<div
					className={`profile__photo`}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				/>
				<img src='https://i.ibb.co/SVC1Hr3/dp-small.jpg' alt={type} />
			</div>
			<div className='profile__content'>
				<div className='profile__title'>Md. Minul Islam Shovon</div>
				<TypedText
					dataText={[
						'Competitive Programmer',
						'Full Stack Developer',
						'Software Development Engineer',
					]}
				/>
				<SocialLinks />
				<Info icon='location'>Dhaka, Bangladesh</Info>

				<Skills />
			</div>
			<div className='profile__contact'>
				<a
					href='https://tinyurl.com/shovon588'
					target='_blank'
					rel='noreferrer'>
					<span>Download Resume</span>
				</a>
				<a
					href='mailto:mainulislam588@gmail.com'
					blank='_blank'
					rel='noreferrer'>
					<span>Contact Me</span>
				</a>
			</div>
		</div>
	);
};

export default Profile;
