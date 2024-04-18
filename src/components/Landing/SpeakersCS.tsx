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
import { SpeakersSection } from './SpeakersSection';

export const SpeakersCS: React.FC = () => {
	return (
		<VStack w='95%' maxW='1600px' alignItems={'center'}>
			<SectionHeader
				heading='SPEAKERS'
				subText='Meet Our Esteemed Speakers: Experts Leading the Conversation'
			/>
			<SpeakersSection />
		</VStack>
	);
};
