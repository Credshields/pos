import React from 'react';
import { Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { CSSection } from './CSSection';
import { assetsUrl } from '../../helpers/values';

export const EventSection: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#1A211B'}
			alignItems={'center'}>
			<VStack w='95%' maxW='1600px' alignItems={'flex-start'} p={[5, 10, 20]}>
				<VStack w='100%' alignItems={'flex-start'} mb={10}>
					<HStack height={'fit-content'} alignItems={'center'} spacing={10}>
						<Heading
							fontFamily={'League Gothic'}
							fontSize={['5xl', '6xl', '7xl']}
							color={'#E4F3DF'}>
							EVENT REPLAYS
						</Heading>
						<Image src={`${assetsUrl}/icons/arrow.svg`} />
					</HStack>
					<Text
						fontSize={['md', 'lg', 'xl']}
						color={'#FFFFFF'}
						fontWeight={500}>
						Catch Up on Missed Moments
					</Text>
				</VStack>
				<Flex
					height={['50vw', '50vw', '50vw', '500px']}
					maxW='830px'
					maxH={'500px'}
					width={['100%', '100%', '100%', '830px']}
					flexDir={'row'}
					justifyContent={'flex-start'}
					alignItems={'flex-end'}
					borderRadius={20}
					overflow={'hidden'}
					backgroundSize={'contain'}
					backgroundImage={`url(${assetsUrl}/event_replays/event_replays_1.png)`}>
					<HStack
						px={[7, 10, 20]}
						pb={[7, 10, 20]}
						background={'linear-gradient(#00000000, #000000)'}
						w='100%'
						height={['50%', '50%', '50%', '200px']}
						alignItems={'flex-end'}>
						<Image
							src={`${assetsUrl}/icons/play.svg`}
							height={['30px', '40px', '50px']}
							width={['30px', '40px', '50px']}
							mr={[5, 7, 10]}
							onClick={() =>
								window.open(
									'https://youtu.be/p8nbUYY9PBU?si=cqrCiNb81Rg9D39P',
									'_blank'
								)
							}
						/>
						<Text
							fontSize={['md', 'lg', 'xl']}
							color={'#FFFFFF'}
							fontWeight={600}>
							Proof of Security Summit’23 - India
						</Text>
					</HStack>
				</Flex>
			</VStack>
		</Flex>
	);
};
