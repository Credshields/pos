import React, { useEffect, useState, useRef } from 'react';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';

export const PartnerList: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			color={'white'}
			flexDir={'column'}
			px={20}
			alignItems={'center'}>
			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				p={10}>
				<Text fontSize={'3xl'}>Hosted By</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					p={7}
					borderRadius={10}
					border='1px solid #4A4A4A'>
					<Image height={'40px'} src={`./pos_assets/partners/partner1.svg`} />
				</HStack>
			</VStack>

			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				mt={12}
				p={10}>
				<Text fontSize={'3xl'}>Associate Partners</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					borderRadius={10}
					border='1px solid #4A4A4A'>
					<Flex
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w='50%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner2.svg`} />
					</Flex>
					<Flex p={7} justifyContent={'center'} w='50%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner7.svg`} />
					</Flex>
				</HStack>
			</VStack>

			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				mt={12}
				p={10}>
				<Text fontSize={'3xl'}>Sponsors</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					borderRadius={10}
					border='1px solid #4A4A4A'>
					<Flex
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w='25%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner3.svg`} />
					</Flex>
					<Flex
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w='25%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner4.svg`} />
					</Flex>
					<Flex
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w='25%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner5.svg`} />
					</Flex>
					<Flex p={7} justifyContent={'center'} w='25%'>
						<Image height={'40px'} src={`./pos_assets/partners/partner6.svg`} />
					</Flex>
				</HStack>
			</VStack>
		</Flex>
	);
};
