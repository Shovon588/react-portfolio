import React from 'react';
import Title from '../common/Title';
import './index.scss';
import ResumeItem from './Item';

const Resume = () => {
	return (
		<div className='page' id='resume'>
			<Title icon={'fa fa-university'}>
				<span style={{ paddingLeft: '10%' }}>EDUCATION</span>
			</Title>

			<ResumeItem
				date={'2016 – 2021'}
				title={'Rajshahi University of Engineering & Technlogy'}
				company={'Rajshahi, Bangladesh'}>
				<p
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: 'black',
					}}>
					Bachelor of Science, Electrical & Computer Engineering
				</p>
			</ResumeItem>

			<ResumeItem
				date={'2013 – 2015'}
				title={'Govt. Bangabandhu College'}
				company={'Rupsha, Khulna'}>
				<p
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: 'black',
					}}>
					Higher Secondary Certificate
				</p>
			</ResumeItem>

			<Title icon={'fa fa-briefcase'}>
				{/*Resume - Total Commercial Experience {moment().diff('09/01/2016', 'years', true).toFixed(2)} years*/}
				<span style={{ paddingLeft: '10%' }}>EXPERIENCE</span>
			</Title>

			<ResumeItem
				date={'Apr 2021 - Current'}
				title={'Software Development Engineer (Full-time)'}
				company={'Craftsmen Ltd., Dhaka, Bangladesh'}>
				- Working as a Full Stack Developer <br />
				- Responsible for developing Frontend and Backend <br />
				- Working with teams in major European company <br />
				- Working with latest tech stack like ReactJs, AWS (serverless) etc <br />
				- Maintaining and improving legacy code <br />
				- Developing new features to the project as per assignment <br />
				- Making life easier for major broadcasting industries through developing OTT platform <br />
				- Leverage knowledge on JavaScript, TypeScript, ReactJs, AWS, Serverless, Terraform etc. 
			</ResumeItem>

			<ResumeItem
				date={'Mar 2021 - Mar 2021'}
				title={'Junior Software Engineer (Full-time)'}
				company={'Field Buzz (Field Information Solutions), Dhaka, Bangladesh'}>
				- Worked as a Django backend developer <br />
				- Maintained existing code and reported to senior engineers
			</ResumeItem>


			<ResumeItem
				date={'Jun 2020 - Feb 2021'}
				title={'Django Backend Developer (Intern)'}
				company={'Enalo, Hyderabad, India'}>
				- Worked as a remote Full-Stack developer <br />
				- Have had hands-on experience working on a real-life project <br />
				- Worked in Django, Django Rest Framework, VanillaJs and ReactJs <br />
				- Had hands on experience on AWS technologies <br />
				- Built and deployed 30+ backend API's that is powering web and mobile application <br />
				- Designed and built responsive and user-friendly web application <br />
				- Had continuous collaboration and discussion with other teammates <br />
				- Designed and built the landing page, widget and integrated Cashfree payment gateway. <br />
				- Leverage knowledge on Django, REST API, AWS, ReactJs, Payment Gateway etc. <br />
			</ResumeItem>

			<ResumeItem
				date={'May 2019 - Jun 2019'}
				title={'Software Engineer (Intern)'}
				company={`SELISE ROCKIN' SOFTWARE, Dhaka, Bangladesh`}>
				- Learnt a lot of industry best practices and software development life cycle <br />
				- Learnt different tools and frameworks required for the development <br />
				- Designed, proposed, and built an online MCQ test application <br />
				- Reported, updated, and work according to feedback <br />
				- Collaborated and had continuous discussions with senior developers for different tasks <br />
				- Was mentored by the CTO and other senior Engineers with decades of experience <br />
				- Experienced a great company environment with excellent culture <br />
				- Leverage knowledge on Jira, Balsamiq, BitBucket, PHP, etc. <br />
			</ResumeItem>

			<Title icon={'fa fa-newspaper'}>
				{/*Resume - Total Commercial Experience {moment().diff('09/01/2016', 'years', true).toFixed(2)} years*/}
				<span style={{ paddingLeft: '10%' }}>PUBLICATION</span>
			</Title>

			<ResumeItem
				date={'June 5-7, 2020'}
				title={
					'RECOGNITION OF HANDWRITTEN BANGLA NUMBER USING MULTI LAYER CONVOLUTIONAL NEURAL NETWORK'
				}
				company={'Accepted on: IEEE Tensymp 2020'}>
				• Used 80000+ unbiased and augmented data to train the model.{' '}
				<br /> • Got an excellent accuracy of about 99%.
			</ResumeItem>
		</div>
	);
};

export default Resume;
