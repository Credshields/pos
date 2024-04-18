import React, { useEffect, useState, useRef } from 'react';
import {
	Button,
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
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './panelSlider.css';
import { assetsUrl } from '../../helpers/values';

export const PanelSlider: React.FC = () => {
	const data: {
		list: {
			name: string;
			desc: string;

			imgLink: string;
		}[];
		title: string;
		description: string;
	}[] = [
		{
			title: 'FIRESIDE',
			description:
				'“On the crossroads of traditions and latest technology: how the crypto adoption evolve cultural life in the Middle East”',
			list: [
				{
					name: 'Vugar',
					desc: 'COO, Bitget',
					imgLink: 'vugar',
				},
				{
					name: 'Mary Pedler',
					desc: 'Founder, INPUT Comms',
					imgLink: 'mary',
				},
			],
		},
		{
			title: 'PANEL DISCUSSION',
			description: '“The Future of Web3 Regulation and Compliance”',
			list: [
				{
					name: 'Thomas',
					desc: 'Co-founder, Nadmah',
					imgLink: 'thomas',
				},
				{
					name: 'Harly',
					desc: 'Managing Partner, Neo Legal',
					imgLink: 'harly',
				},
				{
					name: 'AJ',
					desc: 'Nordek',
					imgLink: 'aj',
				},
			],
		},
		{
			title: 'FIRESIDE',
			description: '“Web3 security and Beyond!”',
			list: [
				{
					name: 'Anirudh',
					desc: 'Head of Growth, Etherspot',
					imgLink: 'anirudh',
				},
				{
					name: 'Shashank',
					desc: 'Co-Founder and CEO, CredShields',
					imgLink: 'shashank',
				},
				{
					name: 'Igor',
					desc: 'Hacken',
					imgLink: 'igor',
				},
				{
					name: 'Mudit Gupta',
					desc: 'Polygon',
					imgLink: 'mudit',
				},
				{
					name: 'Mohamed',
					desc: 'Japan Open Chain',
					imgLink: 'mohamed',
				},
			],
		},
	];

	return (
		<>
			{data.map((arrayItem) => (
				<Flex
					width='90%'
					height='fit-content'
					justifyContent={'center'}
					mt={[10, 10, 20]}
					py={[5, 8, 20]}
					px={[3, 5, 10]}
					borderRadius={'30px'}
					backgroundColor={'#2A2A2A'}
					alignItems={'center'}>
					<Flex
						style={{
							width: '100%',
							height: 'fit-content',
							justifyContent: 'flex-start',
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
						}}>
						<VStack height={'fit-content'} alignItems={'center'} mb={20}>
							<Heading
								fontFamily={'League Gothic'}
								fontSize={'5xl'}
								color={'#E4F3DF'}>
								{arrayItem.title}
							</Heading>
							<Text
								textAlign={'center'}
								fontSize={'lg'}
								color={'#FFFFFF'}
								fontWeight={500}>
								{arrayItem.description}
							</Text>
						</VStack>
						<HStack
							flexWrap={'wrap'}
							justifyContent={'center'}
							rowGap={10}
							columnGap={[5, 10]}
							width={['100%', '100%', '85%']}>
							{arrayItem.list.map((item) => (
								<Flex
									flexDir={'column'}
									justifyContent={'flex-start'}
									width={['45%', '45%', '220px', '275px']}
									color={'white'}
									alignItems={'flex-start'}
									textAlign={'left'}>
									<Image
										src={`${assetsUrl}/speakers/${item.imgLink}.svg`}
										backgroundRepeat={'no-repeat'}
										backgroundSize={'contain'}
										width={['100%', '100%', '220px', '275px']}
										height={['30vw', '30vw', '200px', '250px']}
									/>
									<Text mt={5} fontWeight={600} fontSize={['md', 'lg', 'xl']}>
										{item.name}
									</Text>
									<Text fontWeight={400} fontSize={['sm', 'md']}>
										{item.desc}
									</Text>
								</Flex>
							))}
						</HStack>
					</Flex>
				</Flex>
			))}
		</>
	);
};
