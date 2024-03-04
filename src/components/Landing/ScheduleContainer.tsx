import React, { useEffect, useState, useRef } from 'react';
import {
	Flex,
	Grid,
	GridItem,
	HStack,
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
import { TimelineList } from './TimelineList';

export const ScheduleContainer: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			alignItems={'center'}
			px={[5, 5, 10, 20]}>
			<Tabs w='100%' height='fit-content'>
				<TabList color={'white'} borderBottom={'4px solid #4E4E4E'} w='100%'>
					<Tab
						borderBottom={'4px solid #4E4E4E'}
						_selected={{
							borderBottom: '4px solid #E4F3DF',
						}}
						w='50%'>
						<HStack>
							<Text fontSize={'4xl'}>18</Text>
							<Text fontSize={'xl'}>April</Text>
						</HStack>
					</Tab>
					<Tab
						borderBottom={'4px solid #4E4E4E'}
						_selected={{
							borderBottom: '4px solid #E4F3DF',
						}}
						w='50%'>
						<HStack>
							<Text fontSize={'4xl'}>19</Text>
							<Text fontSize={'xl'}>April</Text>
						</HStack>
					</Tab>
				</TabList>

				<TabPanels w='100%'>
					<TabPanel w='100%'>
						<TimelineList />
					</TabPanel>
					<TabPanel w='100%'>
						<TimelineList />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};
