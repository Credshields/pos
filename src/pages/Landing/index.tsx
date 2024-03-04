import {
	Box,
	Container,
	Flex,
	HStack,
	Link,
	useBreakpointValue,
	useMediaQuery,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, lazy, Suspense } from 'react';
import { Hero } from '../../components/Landing/Hero';
import { HeroInfographics } from '../../components/Landing/heroInfographics';
import { SpeakersCS } from '../../components/Landing/SpeakersCS';
import { PartnersCS } from '../../components/Landing/PartnersCS';
import { ScheduleCS } from '../../components/Landing/ScheduleCS';
import { EventSection } from '../../components/Landing/EventSection';
import { PhotoReel } from '../../components/Landing/PhotoReel';
import { SpeakersSection } from '../../components/Landing/SpeakersSection';
import { PartnerSection } from '../../components/Landing/PartnerSection';
import { ScheduleSection } from '../../components/Landing/ScheduleSection';
import { FooterSection } from '../../components/Landing/FooterSection';
import { assetsUrl } from '../../helpers/values';
import { Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Landing() {
	let bannerUrl =
		useBreakpointValue({
			base: 'pos_banner_potrait.png',
			sm: 'pos_banner_potrait.png',
			md: 'pos_banner_landscape.png',
		}) || 'pos_banner_landscape.png';

	const [isDesktopView] = useMediaQuery('(min-width: 1000px)');

	let videoUrl =
		useBreakpointValue({
			base: 'landing_video_mobile',
			sm: 'landing_video_tablet',
			md: 'landing_video_desktop',
		}) || 'landing_video_desktop';

	return (
		<Container
			maxW={'100vw'}
			overflowX='hidden'
			overflowY='scroll'
			padding={0}
			m={0}
			backgroundColor={'#031606'}
			h='100vh'>
			<Flex
				as='section'
				w='100%'
				height={['700px', '700px', '1300px', '800px']}
				textAlign={['center', 'center', 'left']}
				display={['flex']}
				flexDirection={isDesktopView ? 'row' : 'column'}
				alignItems={'center'}
				position='relative'
				width='100vw'
				justifyContent={isDesktopView ? 'space-between' : 'flex-start'}>
				<Box
					style={{
						width: '100vw',
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
							width: '100vw',
							height: '700px',
						}}
						autoPlay
						muted
						loop>
						<source
							src={`${assetsUrl}/video/${videoUrl}.mp4`}
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
						px={[10, 20, '100px']}
						backgroundColor={'#232323CC'}
						justifyContent={'space-between'}
						alignItems={'center'}>
						<Image
							height={'40px'}
							width={'120px'}
							src={`${assetsUrl}/logos/cs_logo_main.svg`}
						/>
						<HamburgerIcon
							display={['flex', 'flex', 'none']}
							color={'white'}
							fontSize={'xl'}
						/>
						<HStack spacing={10} display={['none', 'none', 'flex']}>
							<Text color={'white'} cursor={'pointer'}>
								About
							</Text>

							<Text color={'white'} cursor={'pointer'}>
								Schedule
							</Text>

							<Text color={'white'} cursor={'pointer'}>
								Speakers
							</Text>

							<Text color={'white'} cursor={'pointer'}>
								Partners
							</Text>
						</HStack>
					</HStack>
					<Hero />
				</Flex>
			</Flex>
			<HeroInfographics />
			<Image
				src={`${assetsUrl}/pos_banner/${bannerUrl}`}
				height='auto'
				mx='auto'
				my={['50px', '80px', '100px', '150px']}
				borderRadius={'50px'}
				width='80%'
			/>
			<Flex
				id='speakers'
				width='100%'
				height='fit-content'
				justifyContent={'center'}
				backgroundColor={'#031606'}
				alignItems={'center'}>
				<SpeakersSection />
			</Flex>
			<Flex
				id='partners'
				width='100%'
				height='fit-content'
				justifyContent={'center'}
				backgroundColor={'#1A211B'}
				alignItems={'center'}>
				<PartnerSection />
			</Flex>
			<Flex
				id='schedule'
				width='100%'
				height='fit-content'
				justifyContent={'center'}
				backgroundColor={'#031606'}
				alignItems={'center'}>
				<ScheduleSection />
			</Flex>
			<EventSection />
			<PhotoReel />
			<FooterSection />
		</Container>
	);
}
