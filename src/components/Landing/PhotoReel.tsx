import React, { useEffect, useState, useRef } from 'react';
import {
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { CSSection } from './CSSection';
import Marquee from 'react-fast-marquee';
import { assetsUrl } from '../../helpers/values';

export const PhotoReel: React.FC = () => {
	const imgLine1 = [
		'pic1',
		'pic2',
		'pic3',
		'pic4',
		'pic5',
		'pic6',
		'pic7',
		'pic8',
		'pic9',
	];
	const imgLine2 = [
		'pic10',
		'pic11',
		'pic12',
		'pic13',
		'pic14',
		'pic15',
		'pic16',
		'pic17',
		'pic18',
	];

	return (
		<Flex
			width='100%'
			height='fit-content'
			flexDir={'column'}
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}
			py={['100px', '180px', '300px']}>
			<Marquee pauseOnHover={true}>
				{imgLine1.map((url) => (
					<Image
						mr={10}
						borderRadius={20}
						maxW={'530px'}
						width={['70vw', '70vw', '530px']}
						maxH={'300px'}
						height={['45vw', '45vw', '300px']}
						src={`${assetsUrl}/photo_reels/${url}.JPG`}
					/>
				))}
			</Marquee>
			<Marquee
				pauseOnHover={true}
				direction='right'
				style={{
					marginTop: '50px',
				}}>
				{imgLine2.map((url) => (
					<Image
						mr={10}
						borderRadius={20}
						maxW={'530px'}
						width={['70vw', '70vw', '530px']}
						maxH={'300px'}
						height={['45vw', '45vw', '300px']}
						src={`${assetsUrl}/photo_reels/${url}.JPG`}
					/>
				))}
			</Marquee>
		</Flex>
	);
};
