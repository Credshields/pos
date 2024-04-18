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
import { ScheduleSection } from './ScheduleSection';

export const ScheduleCS: React.FC = () => {
	return (
		<VStack w='95%' maxW='1600px' alignItems={'center'}>
			<SectionHeader
				heading='SCHEDULE'
				subText='Your Guide to Engaging Sessions and Discussions'
			/>
			<ScheduleSection />
		</VStack>
	);
};
