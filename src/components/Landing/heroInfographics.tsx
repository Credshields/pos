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

export const HeroInfographics: React.FC = () => {
	const [singleRow, doubleRow] = useMediaQuery([
		'(max-width: 600px)',
		'(max-width: 1200px)',
	]);

	const data: {
		heading: string;
		text: string;
	}[] = [
		{
			heading: 'Proof of Security Summit',
			text: 'The Proof of Security Summit aims to bring together leading experts, developers, researchers, and enthusiasts in the blockchain and Web3Security space.',
		},
		{
			heading: 'Enhancing Security',
			text: 'This event will focus on advancing security practices in fostering collaboration and sharing best practices.',
		},
		{
			heading: 'Integrity and Fortification',
			text: `The summit's primary goal is to ensure the integrity and fortification of blockchain applications through collective efforts and knowledge exchange.`,
		},
	];

	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}>
			<Flex
				justifyContent={'space-between'}
				width={'95%'}
				maxW={'1400px'}
				py={20}
				height={'fit-content'}>
				{data.map((item) => (
					<VStack
						width={'30%'}
						maxW='400px'
						alignItems={'flex-start'}
						textAlign={'left'}
						backgroundColor={'#262525'}
						borderTop={'8px solid #455447'}
						p={6}>
						<Text fontSize={'xl'} color={'white'} fontWeight={700}>
							{item.heading}
						</Text>
						<Text color={'#C5C5C5'} fontWeight={400}>
							{item.text}
						</Text>
					</VStack>
				))}
			</Flex>
		</Flex>
	);
};
