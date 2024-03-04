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
		<VStack w='95%' maxW='1800px' alignItems={'center'}>
			<SectionHeader
				heading='SPEAKERS'
				subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
			/>
			<SpeakerList />
			<PanelSlider />
		</VStack>
	);
};
