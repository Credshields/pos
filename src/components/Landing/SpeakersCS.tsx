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

export const SpeakersCS: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}>
			<VStack w='95%' maxW='1600px' alignItems={'center'}>
				<SectionHeader
					heading='SPEAKERS'
					subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
				/>
				<CSSection iconUrl='cs_speakers' />
			</VStack>
		</Flex>
	);
};
