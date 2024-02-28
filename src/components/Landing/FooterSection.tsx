import React, { useEffect, useState, useRef } from 'react';
import {
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { CSSection } from './CSSection';
import { socialLink } from '../../helpers/values';

export const FooterSection: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#2A2A2A'}
			alignItems={'center'}
			color={'white'}
			py='50px'>
			<VStack w='90%' maxW='1400px' alignItems={'center'} spacing={10}>
				<HStack w='100%'>
					<VStack
						w='50%'
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack spacing={7}>
							<Image
								src={`./pos_assets/icons/vision.svg`}
								height={'50px'}
								width={'50px'}
							/>
							<Text fontSize={'2xl'}>VISION</Text>
						</HStack>
						<Text fontSize={'md'} maxW={'500px'} fontWeight={300}>
							Proof of Security is an initiative by SolidityScan Designed for
							Devs, Security Researchers, and to all who aspire to enter into
							web3 security.
						</Text>
					</VStack>
					<VStack
						w='50%'
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack spacing={7}>
							<Image
								src={`./pos_assets/icons/mission.svg`}
								height={'50px'}
								width={'50px'}
							/>
							<Text fontSize={'2xl'}>MISSION</Text>
						</HStack>
						<Text fontSize={'md'} maxW={'500px'} fontWeight={300}>
							Proof of Security is a brand by SolidityScan that includes various
							activities like CTFs, Hackathons, Workshops, Meet-ups, Summit,
							etc.
						</Text>
					</VStack>
				</HStack>
				<HStack w='100%'>
					<VStack
						w='40%'
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack>
							<Image
								src={`./pos_assets/logos/cs_logo_main.svg`}
								height={'40px'}
								width={'120px'}
							/>{' '}
							<Divider orientation='vertical' height={'60px'} />
							<Image
								src={`./pos_assets/logos/ss_logo_main.svg`}
								height={'50px'}
								width={'200px'}
							/>
						</HStack>
						<Image
							src={`./pos_assets/logos/pos_logo_main.svg`}
							height={'70px'}
							width={'210px'}
						/>
					</VStack>
					<VStack
						w='20%'
						spacing={3}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<Text fontSize={'sm'} cursor={'pointer'}>
							About
						</Text>
						<Text fontSize={'sm'} cursor={'pointer'}>
							Schedule
						</Text>
						<Text fontSize={'sm'} cursor={'pointer'}>
							Speakers
						</Text>
					</VStack>
					<VStack
						w='20%'
						spacing={3}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<Text fontSize={'sm'} cursor={'pointer'}>
							Partners
						</Text>
						<Text fontSize={'sm'} cursor={'pointer'}>
							Terms
						</Text>
						<Text fontSize={'sm'} cursor={'pointer'}>
							Privacy
						</Text>
					</VStack>
					<VStack
						w='20%'
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<Text cursor={'pointer'}>Stay Connected</Text>
						<HStack>
							{socialLink.map((item) => (
								<Image
									onClick={() => window.open(item.socialUrl, '_blank')}
									src={`./pos_assets/socials/footer/${item.imgLink}.svg`}
									height={'30px'}
									width={'30px'}
								/>
							))}
						</HStack>
					</VStack>
				</HStack>
			</VStack>
		</Flex>
	);
};
