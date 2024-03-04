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
			heading: 'Security',
			text: 'Explore cutting-edge cybersecurity strategies and best practices for protecting your digital assets. Learn proactive measures to fortify your organization against growing cyber threats.',
		},
		{
			heading: 'Enhancing Security',
			text: 'Discover practical approaches to meet and exceed compliance expectations, streamline processes, and foster a culture of accountability.',
		},
		{
			heading: 'Tokenization',
			text: `Stay ahead in the world of Real World Asset Tokenization, unlocking insights from experts on tailored strategies. Equip your organization to navigate tokenization frameworks and position for success in the dynamic landscape of asset digitization.`,
		},
	];

	return (
		<Flex
			id='about'
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			backgroundColor={'#031606'}
			alignItems={'center'}>
			<Flex
				justifyContent={['flex-start', 'flex-start', 'space-between']}
				width={'95%'}
				maxW={'1400px'}
				py={20}
				rowGap={'30px'}
				flexDir={['column', 'column', 'row']}
				alignItems={'center'}
				height={'fit-content'}>
				{data.map((item) => (
					<VStack
						width={['90%', '90%', '30%']}
						maxW='400px'
						height={['fit-content', '300px', '420px', '250px']}
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
