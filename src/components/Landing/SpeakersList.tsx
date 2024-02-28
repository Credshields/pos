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
			profilePicLink: 'speaker1',
			companyLogoLink: 'comp1',
		},
		{
			name: 'Issac Kim',
			desc1: 'Head of Asia BD',
			desc2: 'SEC 3',
			profilePicLink: 'speaker2',
			companyLogoLink: 'comp2',
		},
		{
			name: 'Charles Dray',
			desc1: 'CEO',
			desc2: 'Resonance Security',
			profilePicLink: 'speaker3',
			companyLogoLink: 'comp3',
		},
		{
			name: 'Shashank',
			desc1: 'Co-founder & CEO',
			desc2: 'Credshields | SolidityScan',
			profilePicLink: 'speaker4',
			companyLogoLink: 'comp4',
		},

		{
			name: 'Mudit Gupta',
			desc1: 'CISO',
			desc2: 'POLYGON',
			profilePicLink: 'speaker1',
			companyLogoLink: 'comp1',
		},
		{
			name: 'Issac Kim',
			desc1: 'Head of Asia BD',
			desc2: 'SEC 3',
			profilePicLink: 'speaker2',
			companyLogoLink: 'comp2',
		},
		{
			name: 'Charles Dray',
			desc1: 'CEO',
			desc2: 'Resonance Security',
			profilePicLink: 'speaker3',
			companyLogoLink: 'comp3',
		},
		{
			name: 'Shashank',
			desc1: 'Co-founder & CEO',
			desc2: 'Credshields | SolidityScan',
			profilePicLink: 'speaker4',
			companyLogoLink: 'comp4',
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
			rowGap={'60px'}
			columnGap={'60px'}
			alignItems={'center'}>
			{data.map((item) => (
				<Flex
					flexDir={'column'}
					justifyContent={'flex-start'}
					width={'300px'}
					alignItems={'flex-start'}
					textAlign={'left'}>
					<Flex
						backgroundImage={`url(./pos_assets/speakers/${item.profilePicLink}.png)`}
						direction={'row'}
						backgroundRepeat={'no-repeat'}
						backgroundSize={'contain'}
						width={'300px'}
						height={'280px'}
						alignItems={'flex-end'}
						justifyContent={'flex-start'}>
						<Flex
							height={'90px'}
							width={'90px'}
							borderRadius={'45px'}
							backgroundColor='#162218'
							justifyContent={'center'}
							alignItems={'center'}>
							<Image
								height={'60px'}
								width={'60px'}
								src={`./pos_assets/speakers/${item.companyLogoLink}.svg`}
							/>
						</Flex>
					</Flex>
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
