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
import { assetsUrl } from '../../helpers/values';

export const SpeakerList: React.FC = () => {
	const data: {
		name: string;
		desc1: string;
		desc2: string;
		profilePicLink: string;
		companyLogoLink: string;
	}[] = [
		{
			name: 'Mudit Gupta',
			desc1: 'CISO',
			desc2: 'POLYGON',
			profilePicLink: 'mudit',
			companyLogoLink: 'comp1',
		},
		{
			name: 'VUGAR',
			desc1: 'COO ',
			desc2: 'Bitget',
			profilePicLink: 'vugar',
			companyLogoLink: 'comp2',
		},
		{
			name: 'Mary Pedler',
			desc1: 'Founder',
			desc2: ' INPUT Comms',
			profilePicLink: 'mary',
			companyLogoLink: 'comp3',
		},
		{
			name: 'Thomas',
			desc1: 'Co-founder',
			desc2: 'Nadmah',
			profilePicLink: 'thomas',
			companyLogoLink: 'comp4',
		},

		{
			name: 'Harly Zappino',
			desc1: 'Managing Partner',
			desc2: 'Neo Lega',
			profilePicLink: 'harly',
			companyLogoLink: 'comp1',
		},
		{
			name: 'AJ',
			desc1: 'Nordek',
			desc2: '',
			profilePicLink: 'aj',
			companyLogoLink: 'comp2',
		},
		{
			name: 'Anirudh',
			desc1: 'Head of Growth',
			desc2: 'Etherspot',
			profilePicLink: 'anirudh',
			companyLogoLink: 'comp3',
		},
		{
			name: 'Shashank',
			desc1: 'Co-founder & CEO',
			desc2: 'Credshields | SolidityScan',
			profilePicLink: 'shashank',
			companyLogoLink: 'comp4',
		},
		{
			name: 'Igor',
			desc1: 'Hacken',
			desc2: '',
			profilePicLink: 'igor',
			companyLogoLink: 'comp3',
		},
		{
			name: 'Mohamed',
			desc1: 'Japan Open Chain',
			desc2: '',
			profilePicLink: 'mohamed',
			companyLogoLink: 'comp3',
		},
	];

	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			flexWrap={'wrap'}
			color={'white'}
			px={20}
			rowGap={'30px'}
			columnGap={'30px'}
			alignItems={'center'}>
			{data.map((item) => (
				<Flex
					flexDir={'column'}
					justifyContent={'flex-start'}
					width={'300px'}
					alignItems={'flex-start'}
					textAlign={'left'}>
					<Flex
						backgroundImage={`url(${assetsUrl}/speakers/${item.profilePicLink}.svg)`}
						direction={'row'}
						backgroundRepeat={'no-repeat'}
						backgroundSize={'contain'}
						width={'300px'}
						height={'280px'}
						alignItems={'flex-end'}
						justifyContent={'flex-start'}></Flex>
					<Text mt={5} fontWeight={600} fontSize={'xl'}>
						{item.name}
					</Text>
					<Text fontWeight={400} fontSize={'md'}>
						{item.desc1}
					</Text>
					<Text fontWeight={400} fontSize={'md'}>
						{item.desc2}
					</Text>
				</Flex>
			))}
		</Flex>
	);
};
