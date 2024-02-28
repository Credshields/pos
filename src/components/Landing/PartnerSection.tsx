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
import { PartnerList } from './PartnerList';

export const PartnerSection: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#1A211B'}
			alignItems={'center'}
			py={20}>
			<VStack w='95%' maxW='1600px' alignItems={'center'}>
				<SectionHeader
					heading='PARTNERS'
					subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
				/>
				<PartnerList />
			</VStack>
		</Flex>
	);
};
