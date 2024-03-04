import React, { useEffect, useState, useRef } from 'react';
import {
	Flex,
	Grid,
	GridItem,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { CSSection } from './CSSection';
import { ScheduleContainer } from './ScheduleContainer';

export const ScheduleSection: React.FC = () => {
	return (
		<VStack w='95%' maxW='1600px' alignItems={'center'}>
			<SectionHeader
				heading='SCHEDULE'
				subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
			/>
			<ScheduleContainer />
		</VStack>
	);
};
