import React, { useEffect, useState, useRef } from 'react';
import {
	Divider,
	Flex,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { assetsUrl, socialLink } from '../../helpers/values';
import { Link } from 'react-router-dom';

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
				<Stack spacing={10} flexDir={['column', 'column', 'row']} w='100%'>
					<VStack
						w={['100%', '100%', '50%']}
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack spacing={7}>
							<Image
								src={`${assetsUrl}/icons/vision.svg`}
								height={'50px'}
								width={'50px'}
							/>
							<Text fontSize={'2xl'}>VISION</Text>
						</HStack>
						<Text fontSize={'md'} maxW={'500px'} fontWeight={300}>
							Proof of Security is an initiative by{' '}
							<span
								onClick={() =>
									window.open('https://solidityscan.com/', '_blank')
								}
								style={{
									textDecoration: 'underline',
								}}>
								SolidityScan
							</span>{' '}
							Designed for Devs, Security Researchers, and to all who aspire to
							enter into web3 security.
						</Text>
					</VStack>
					<VStack
						w={['100%', '100%', '50%']}
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack spacing={7}>
							<Image
								src={`${assetsUrl}/icons/mission.svg`}
								height={'50px'}
								width={'50px'}
							/>
							<Text fontSize={'2xl'}>MISSION</Text>
						</HStack>
						<Text fontSize={'md'} maxW={'500px'} fontWeight={300}>
							Proof of Security is a brand by{' '}
							<span
								onClick={() =>
									window.open('https://solidityscan.com/', '_blank')
								}
								style={{
									textDecoration: 'underline',
								}}>
								SolidityScan
							</span>{' '}
							that includes various activities like CTFs, Hackathons, Workshops,
							Meet-ups, Summit, etc.
						</Text>
					</VStack>
				</Stack>
				<Stack
					spacing={[10, 10, 0]}
					flexDir={['column', 'column', 'row']}
					alignItems={['flex-start']}
					w='100%'>
					<VStack
						w={['100%', '100%', '50%', '40%']}
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<HStack>
							<Image
								src={`${assetsUrl}/logos/pos_logo_main.svg`}
								height={'50px'}
								width={'160px'}
							/>

							<Divider orientation='vertical' height={'60px'} />
							<Image
								onClick={() =>
									window.open('https://solidityscan.com/', '_blank')
								}
								cursor='pointer'
								src={`${assetsUrl}/logos/ss_logo_main.svg`}
								height={'50px'}
								width={'200px'}
							/>
						</HStack>
						<Image
							onClick={() => window.open('https://credshields.com/', '_blank')}
							cursor='pointer'
							src={`${assetsUrl}/logos/cs_logo_main.svg`}
							height={'40px'}
							width={'120px'}
						/>{' '}
					</VStack>
					<HStack w={['100%', '100%', '30%', '40%']}>
						<VStack
							w={'50%'}
							spacing={3}
							justifyContent={'flex-start'}
							alignItems={'flex-start'}>
							<Link to='#about'>
								<Text fontSize={'sm'} cursor={'pointer'}>
									About
								</Text>
							</Link>
							<Link to='#schedule'>
								<Text fontSize={'sm'} cursor={'pointer'}>
									Schedule
								</Text>
							</Link>
							<Link to='#speakers'>
								<Text fontSize={'sm'} cursor={'pointer'}>
									Speakers
								</Text>
							</Link>
						</VStack>
						<VStack
							w='50%'
							spacing={3}
							justifyContent={'flex-start'}
							alignItems={'flex-start'}>
							<Link to='#partners'>
								<Text fontSize={'sm'} cursor={'pointer'}>
									Partners
								</Text>
							</Link>
							<Text fontSize={'sm'} cursor={'pointer'}>
								Terms
							</Text>
							<Text fontSize={'sm'} cursor={'pointer'}>
								Privacy
							</Text>
						</VStack>
					</HStack>
					<VStack
						w={['100%', '100%', '15%', '20%']}
						spacing={5}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}>
						<Text cursor={'pointer'}>Stay Connected</Text>
						<HStack>
							{socialLink.map((item) => (
								<Image
									cursor={'pointer'}
									onClick={() => window.open(item.socialUrl, '_blank')}
									src={`${assetsUrl}/socials/footer/${item.imgLink}.svg`}
									height={'30px'}
									width={'30px'}
								/>
							))}
						</HStack>
					</VStack>
				</Stack>
				<Text>
					© Proof Of Security 2024 By SolidityScan. All Rights Reserved
				</Text>
			</VStack>
		</Flex>
	);
};
