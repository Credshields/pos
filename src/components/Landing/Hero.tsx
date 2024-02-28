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
	VStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { assetsUrl, socialLink } from '../../helpers/values';

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
				justifyContent={'flex-start'}
				direction={'column'}>
				<HStack
					width={'100%'}
					height={'80px'}
					px='100px'
					backgroundColor={'#232323CC'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<Image
						height={'40px'}
						width={'120px'}
						src={`./pos_assets/logos/cs_logo_main.svg`}
					/>
					<HStack spacing={10}>
						<Link to='#about'>
							<Text color={'white'} cursor={'pointer'}>
								About
							</Text>
						</Link>
						<Link to='#schedule'>
							<Text color={'white'} cursor={'pointer'}>
								Schedule
							</Text>
						</Link>
						<Link to='#speakers'>
							<Text color={'white'} cursor={'pointer'}>
								Speakers
							</Text>
						</Link>
						<Link to='#partners'>
							<Text color={'white'} cursor={'pointer'}>
								Partners
							</Text>
						</Link>
					</HStack>
				</HStack>
				<Flex
					position='relative'
					w='100%'
					h='calc(100% - 80px)'
					justifyContent={'space-between'}
					direction={'row'}>
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
					<VStack mr='50px' spacing={5} mt='20px'>
						{socialLink.map((item) => (
							<Image
								onClick={() => window.open(item.socialUrl, '_blank')}
								src={`./pos_assets/socials/header/${item.imgLink}.svg`}
								height={'50px'}
								width={'50px'}
							/>
						))}
					</VStack>
				</Flex>
			</Flex>
		</Flex>
	);
};
