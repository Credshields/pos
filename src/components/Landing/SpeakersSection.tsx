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
import { SpeakerList } from './SpeakersList';
import { PanelSlider } from './PanelSlider';

export const SpeakersSection: React.FC = () => {
	return (
		<Flex
			id='speakers'
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}
			py={20}>
			<VStack w='95%' maxW='1600px' alignItems={'center'}>
				<SectionHeader
					heading='SPEAKERS'
					subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
				/>
				<SpeakerList />
				<PanelSlider />
			</VStack>
		</Flex>
	);
};
