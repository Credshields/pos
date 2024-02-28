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

export const CSSection: React.FC<{ iconUrl: string }> = ({ iconUrl }) => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			alignItems={'center'}
			p={20}
			pt={5}>
			<HStack w='100%' alignItems={'center'} justifyContent={'center'}>
				<VStack w='fit-content'>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'6xl'}
						color={'#E4F3DF'}>
						Announcing
					</Heading>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'6xl'}
						color={'#E4F3DF'}>
						Soon
					</Heading>
				</VStack>
				<Image src={`./pos_assets/icons/cs_icons/${iconUrl}.svg`} />
			</HStack>
		</Flex>
	);
};
