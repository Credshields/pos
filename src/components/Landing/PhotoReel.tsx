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

export const PhotoReel: React.FC = () => {
	const imgLine1 = ['photo1', 'photo2', 'photo1', 'photo2'];
	const imgLine2 = ['photo4', 'photo5', 'photo4', 'photo5'];

	return (
		<Flex
			width='100%'
			height='fit-content'
			flexDir={'column'}
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}
			py={'300px'}>
			<Marquee pauseOnHover={true}>
				{imgLine1.map((url) => (
					<Image
						mr={10}
						borderRadius={20}
						width={'530px'}
						height={'300px'}
						src={`./pos_assets/photo_reels/${url}.png`}
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
						width={'530px'}
						height={'300px'}
						src={`./pos_assets/photo_reels/${url}.png`}
					/>
				))}
			</Marquee>
		</Flex>
	);
};
