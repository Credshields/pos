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
		name: string;
		desc: string;

		imgLink: string;
	}[] = [
		{
			name: 'Mudit Gupta',
			desc: 'CISO',
			imgLink: 'panel1',
		},
		{
			name: 'Issac Kim',
			desc: 'Head of Asia BD',
			imgLink: 'panel2',
		},
		{
			name: 'Charles Dray',
			desc: 'CEO',
			imgLink: 'panel3',
		},
		{
			name: 'Shashank',
			desc: 'Co-founder & CEO',
			imgLink: 'panel4',
		},
	];

	return (
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
			<Swiper
				initialSlide={1}
				slidesPerView={1}
				spaceBetween={0}
				centeredSlides={true}
				navigation={true}
				onSwiper={(swiper: any) => console.log(swiper)}
				pagination={true}
				style={{
					width: '100%',
					height: 'fit-content',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
				modules={[Navigation, Pagination]}>
				{[1, 2, 3, 4, 5].map((item) => (
					<SwiperSlide
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
								PANEL DISCUSSION
							</Heading>
							<Text
								textAlign={'center'}
								fontSize={'lg'}
								color={'#FFFFFF'}
								fontWeight={500}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod
							</Text>
						</VStack>
						<HStack
							flexWrap={'wrap'}
							justifyContent={'center'}
							rowGap={10}
							columnGap={[5, 10]}
							width={['100%', '100%', '85%']}>
							{data.map((item) => (
								<Flex
									flexDir={'column'}
									justifyContent={'flex-start'}
									width={['45%', '45%', '220px', '275px']}
									color={'white'}
									alignItems={'flex-start'}
									textAlign={'left'}>
									<Image
										src={`${assetsUrl}/speakers/${item.imgLink}.png`}
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
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
};
