import {
	Box,
	Container,
	Flex,
	HStack,
	useBreakpointValue,
	useMediaQuery,
	Text,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
	VStack,
	Button,
} from '@chakra-ui/react';
import { Hero } from '../../components/Landing/Hero';
import { HeroInfographics } from '../../components/Landing/heroInfographics';
import { SpeakersCS } from '../../components/Landing/SpeakersCS';
import { PartnersCS } from '../../components/Landing/PartnersCS';
import { ScheduleCS } from '../../components/Landing/ScheduleCS';
import { EventSection } from '../../components/Landing/EventSection';
import { PhotoReel } from '../../components/Landing/PhotoReel';

import { FooterSection } from '../../components/Landing/FooterSection';
import { assetsUrl } from '../../helpers/values';
import { Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { PartnerList } from '../../components/Landing/PartnerList';
import { PartnerSection } from '../../components/Landing/PartnerSection';

export default function Landing() {
	let bannerUrl =
		useBreakpointValue({
			base: 'pos_banner_potrait.png',
			sm: 'pos_banner_potrait.png',
			md: 'pos_banner_landscape.png',
		}) || 'pos_banner_landscape.png';

	const [isDesktopView, isTabletView, isMobileView] = useMediaQuery([
		'(min-width: 1000px)',
		'(min-width: 500px)',
		'(min-width: 100px)',
	]);

	const scrollTo = (elementId: string) => {
		const element = document.getElementById(elementId);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};
	const { isOpen, onOpen, onClose } = useDisclosure();

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
							height: '100%',
						}}
						autoPlay
						muted
						loop>
						{isDesktopView && (
							<source
								src={`${assetsUrl}/video/landing_video_desktop.mp4`}
								type='video/mp4'
							/>
						)}
						{isTabletView && (
							<source
								src={`${assetsUrl}/video/landing_video_tablet.mp4`}
								type='video/mp4'
							/>
						)}
						{isMobileView && (
							<source
								src={`${assetsUrl}/video/landing_video_mobile.mp4`}
								type='video/mp4'
							/>
						)}
					</video>
				</Box>
				<Flex
					position='relative'
					w='100%'
					h='100%'
					zIndex={1}
					backgroundColor={'#00000060'}
					background={'linear-gradient(to right, #000000, #00000000)'}
					justifyContent={'flex-start'}
					alignItems={'center'}
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
							onClick={onOpen}
						/>
						<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
							<DrawerOverlay />
							<DrawerContent bgColor={'#1A211B'}>
								<DrawerCloseButton />

								<DrawerBody p={10} bgColor={'#1A211B'}>
									<VStack spacing={5} w='100%'>
										<Image
											mb='30px'
											height={'40px'}
											width={'120px'}
											src={`${assetsUrl}/logos/cs_logo_main.svg`}
										/>
										<Text
											onClick={() => {
												scrollTo('about');
											}}
											color={'white'}
											fontSize={'xl'}
											cursor={'pointer'}>
											About
										</Text>

										<Text
											onClick={() => {
												scrollTo('schedule');
											}}
											color={'white'}
											fontSize={'xl'}
											cursor={'pointer'}>
											Schedule
										</Text>

										<Text
											onClick={() => {
												scrollTo('speakers');
											}}
											color={'white'}
											fontSize={'xl'}
											cursor={'pointer'}>
											Speakers
										</Text>

										<Text
											onClick={() => {
												scrollTo('partners');
											}}
											color={'white'}
											fontSize={'xl'}
											cursor={'pointer'}>
											Partners
										</Text>
									</VStack>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
						<HStack spacing={10} display={['none', 'none', 'flex']}>
							<Text
								onClick={() => {
									scrollTo('about');
								}}
								color={'white'}
								cursor={'pointer'}>
								About
							</Text>

							<Text
								onClick={() => {
									scrollTo('schedule');
								}}
								color={'white'}
								cursor={'pointer'}>
								Schedule
							</Text>

							<Text
								onClick={() => {
									scrollTo('speakers');
								}}
								color={'white'}
								cursor={'pointer'}>
								Speakers
							</Text>

							<Text
								onClick={() => {
									scrollTo('partners');
								}}
								color={'white'}
								cursor={'pointer'}>
								Partners
							</Text>
						</HStack>
					</HStack>
					<Hero />
					<Button
						display={['none', 'none', 'block']}
						sx={{
							background:
								'linear-gradient(129.18deg, #52FF00 8.52%, #00EEFD 93.94%)',
							boxShadow: '0px 4px 23px rgba(47, 248, 107, 0.45)',
							color: 'black',
						}}
						maxW={'300px'}
						w='90%'
						borderRadius={30}
						onClick={() => window.open('https://lu.ma/ProofofsecurityDubai')}
						variant={'solid'}
						px={10}
						mt={5}
						size={'lg'}>
						RSVP
					</Button>
				</Flex>
			</Flex>
			<HeroInfographics />
			<Image
				onClick={() => window.open('https://lu.ma/ProofofsecurityDubai')}
				cursor={'pointer'}
				src={`${assetsUrl}/pos_banner/${bannerUrl}`}
				height='auto'
				mx='auto'
				my={['50px']}
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
				<SpeakersCS />
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
				<ScheduleCS />
			</Flex>
			<EventSection />
			<PhotoReel />
			<FooterSection />
		</Container>
	);
}
