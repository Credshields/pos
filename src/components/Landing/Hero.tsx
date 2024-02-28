import React from 'react';
import {
	Flex,
	Box,
	Heading,
	Button,
	Text,
	useMediaQuery,
	HStack,
	Image,
	Divider,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { assetsUrl } from '../../helpers/values';

export const Hero: React.FC = () => {
	const [isDesktopView] = useMediaQuery('(min-width: 1000px)');

	return (
		<Flex
			as='section'
			w='100%'
			height={'800px'}
			textAlign={['center', 'center', 'left']}
			display={['flex']}
			flexDirection={isDesktopView ? 'row' : 'column'}
			alignItems={'center'}
			position='relative'
			width='100vw'
			justifyContent={isDesktopView ? 'space-between' : 'flex-start'}>
			<Box
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					top: 0,
					left: 0,
					filter: 'blur(2px)',
					zIndex: 0,
				}}>
				<video
					style={{
						width: '100%',
						height: 'auto',
						maxHeight: '800px',
					}}
					autoPlay
					muted
					loop>
					<source
						src='./pos_assets/video/landing_video_desktop.mp4'
						type='video/mp4'
					/>
				</video>
			</Box>
			<Flex
				position='relative'
				w='100%'
				h='100%'
				zIndex={1}
				backgroundColor={'#00000060'}
				justifyContent={'space-between'}
				direction={['column', 'column', 'row']}>
				<Flex
					direction={'column'}
					justifyContent={'flex-start'}
					alignItems={'flex-start'}
					w='50%'
					h='100%'
					p={20}
					background={'linear-gradient(to right, #000000, #00000000)'}>
					<HStack spacing={10}>
						<Image
							src={`./pos_assets/logos/pos_logo_main.svg`}
							height='80px'
							width='240px'
						/>
						<Divider orientation='vertical' />
						<Image
							src={`./pos_assets/logos/ss_logo_main.svg`}
							height='80px'
							width='240px'
						/>
					</HStack>
					<Heading
						fontFamily={'League Gothic'}
						mt={10}
						fontSize={'8xl'}
						color={'white'}>
						PROOF OF
					</Heading>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'8xl'}
						color={'white'}>
						SECURITY SUMMIT
					</Heading>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'7xl'}
						color={'white'}>
						2024 - DUBAI
					</Heading>
					<Button
						bgColor={'#E4F3DF'}
						borderRadius={30}
						variant={'solid'}
						px={10}
						mt={5}
						size={'lg'}>
						RSVP
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};
