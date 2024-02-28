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

export const PartnersCS: React.FC = () => {
	return (
		<Flex
			id='partners'
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#1A211B'}
			alignItems={'center'}>
			<VStack w='95%' maxW='1600px' alignItems={'center'}>
				<SectionHeader
					heading='PARTNERS'
					subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
				/>
				<CSSection iconUrl='cs_partners' />
			</VStack>
		</Flex>
	);
};
