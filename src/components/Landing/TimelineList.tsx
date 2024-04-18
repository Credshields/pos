import React from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const timeline = [
	{
		number: '1',
		time: '15:00PM - 15:30PM',
		heading: 'Networking Opening Session',
		subHeading: '',
	},
	{
		number: '2',
		time: '15:30PM 15:45PM',
		heading: 'Welcome Speech (Drishti)',
		subHeading: '',
	},
	{
		number: '3',
		time: '15:45PM - 16:15PM',
		heading: 'Fireside Chat I  ',
		subHeading:
			'Akhil Reddy, Founder, Dojima Network Praveen, CTO & Co-founder, ONEWAYX | Nordek Rahul Saxena, Protocol Security, zk sync Anirudh, Growth and ',
	},
	{
		number: '4',
		time: '16:15PM - 16:45PM',
		heading: 'Fireside Chat II',
		subHeading: '',
	},
	{
		number: '5',
		time: '8:15 PM - 8:45 PM',
		heading: 'AccelChain Panel',
		subHeading: '',
	},
	{
		number: '6',
		time: '16:45PM - 17:30PM',
		heading: 'Panel Discussion',
		subHeading: '',
	},
	{
		number: '7',
		time: '17:30PM - 19:00PM',
		heading: 'Networking and Refreshments',
		subHeading: '',
	},
	{
		number: '8',
		time: '9:30 PM - 10:00 PM',
		heading: 'AccelChain Panel',
		subHeading:
			'Ram Shanmugam, Co-founder, Accelchain Mudit Gupta - CISO Polygon Puneet Singh, PwC Deep Chenna, Google Cloud',
	},
	{
		number: '9',
		time: '10:00 PM - 11:00 PM',
		heading: 'Speaker',
		subHeading: 'Charles Dray, CEO, Resonance Security',
	},
];

export const TimelineList: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			flexDir={'row'}
			justifyContent={'flex-start'}
			alignItems={'flex-start'}
			py={10}>
			<VerticalTimeline
				className='timeline-container'
				lineColor='#50FE05'
				layout='2-columns'>
				{timeline.map((item) => (
					<VerticalTimelineElement
						position='right'
						contentStyle={{ background: 'none', color: '#fff', borderWidth: 0 }}
						contentArrowStyle={{ display: 'none' }}
						icon={<NumericIcon number={item.number} />}
						date={item.time}
						iconStyle={{
							background: 'linear-gradient(#52FF00, #00EEFC)',
							borderWidth: 0,
							color: '#fff',
						}}>
						<h3 className='vertical-timeline-element-title'>{item.heading}</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							{item.subHeading}{' '}
						</h4>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Flex>
	);
};

const NumericIcon: React.FC<{ number: string }> = ({ number }) => {
	const [isDesktopView] = useMediaQuery('(min-width: 1170px)');
	return (
		<Flex
			w={isDesktopView ? '60px' : '40px'}
			h={isDesktopView ? '60px' : '40px'}
			justifyContent={'center'}
			alignItems={'center'}>
			<Text fontSize={isDesktopView ? '2xl' : 'xl'} color='#000000'>
				{number}
			</Text>
		</Flex>
	);
};
