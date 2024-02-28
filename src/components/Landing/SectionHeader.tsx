import React, { useEffect, useState, useRef } from 'react';
import {
	Flex,
	Grid,
	GridItem,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';

export const SectionHeader: React.FC<{ heading: string; subText: string }> = ({
	heading,
	subText,
}) => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			alignItems={'center'}
			p={20}>
			<VStack w='100%' alignItems={'flex-start'}>
				<HStack height={'fit-content'} alignItems={'center'} spacing={10}>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'7xl'}
						color={'#E4F3DF'}>
						{heading}
					</Heading>
					<Image src={`./pos_assets/icons/arrow.svg`} />
				</HStack>
				<Text fontSize={'xl'} color={'#FFFFFF'} fontWeight={500}>
					{subText}
				</Text>
			</VStack>
		</Flex>
	);
};
