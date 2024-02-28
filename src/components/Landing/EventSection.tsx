import React, { useEffect, useState, useRef } from 'react';
import {
	Flex,
	Grid,
	GridItem,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { CSSection } from './CSSection';

export const EventSection: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#1A211B'}
			alignItems={'center'}>
			<VStack w='95%' maxW='1600px' alignItems={'flex-start'} p={20}>
				<VStack w='100%' alignItems={'flex-start'} mb={10}>
					<HStack height={'fit-content'} alignItems={'center'} spacing={10}>
						<Heading
							fontFamily={'League Gothic'}
							fontSize={'7xl'}
							color={'#E4F3DF'}>
							EVENT REPLAYS
						</Heading>
						<Image src={`./pos_assets/icons/arrow.svg`} />
					</HStack>
					<Text fontSize={'xl'} color={'#FFFFFF'} fontWeight={500}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
					</Text>
				</VStack>
				<Flex
					height={'500px'}
					width={'830px'}
					flexDir={'row'}
					justifyContent={'flex-start'}
					alignItems={'flex-end'}
					borderRadius={20}
					overflow={'hidden'}
					backgroundImage={
						`url(./pos_assets/event_replays/event_replays_1.png)`
					}>
					<HStack
						px={20}
						pb={20}
						background={'linear-gradient(#00000000, #000000)'}
						w='100%'
						height={'200px'}
						alignItems={'flex-end'}>
						<Image src={`./pos_assets/icons/play.svg`} mr={10} />
						<Text fontSize={'xl'} color={'#FFFFFF'} fontWeight={600}>
							Proof of Security India
						</Text>
					</HStack>
				</Flex>
			</VStack>
		</Flex>
	);
};
