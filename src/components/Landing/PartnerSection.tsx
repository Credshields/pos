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
		<VStack w='95%' maxW='1600px' alignItems={'center'}>
			<SectionHeader
				heading='PARTNERS'
				subText='Meet Our Partners: Collaborators Driving Innovation Together'
			/>
			<PartnerList />
		</VStack>
	);
};
