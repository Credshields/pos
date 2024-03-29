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
import { assetsUrl } from '../../helpers/values';

export const PartnerList: React.FC = () => {
	return (
		<Flex
			width='100%'
			height='fit-content'
			justifyContent={'center'}
			color={'white'}
			flexDir={'column'}
			px={[3, 5, 20]}
			pb={20}
			alignItems={'center'}>
			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				p={[5, 7, 10]}>
				<Text fontSize={['xl', '2xl', '3xl']}>Hosted By</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					p={[5, 5, 7]}
					borderRadius={10}
					border='1px solid #4A4A4A'>
					<Image
						height={['30px', '35px', '40px']}
						src={`${assetsUrl}/partners/partner1.svg`}
					/>
				</HStack>
			</VStack>

			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				mt={12}
				p={[5, 7, 10]}>
				<Text textAlign={'center'} fontSize={['xl', '2xl', '3xl']}>
					Associate Partners
				</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					borderRadius={10}
					border='1px solid #4A4A4A'>
					<Flex
						p={[5, 5, 7]}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w='50%'>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner2.svg`} />
					</Flex>
					<Flex p={[5, 5, 7]} justifyContent={'center'} w='50%'>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner7.svg`} />
					</Flex>
				</HStack>
			</VStack>

			<VStack
				w='100%'
				backgroundColor={'#191919'}
				borderRadius={20}
				spacing={7}
				mt={12}
				justifyContent={'flex-start'}
				p={[5, 7, 10]}>
				<Text fontSize={['xl', '2xl', '3xl']}>Sponsors</Text>
				<HStack
					w='100%'
					justifyContent={'center'}
					borderRadius={10}
					flexWrap={'wrap'}
					rowGap={0}
					columnGap={0}
					border='1px solid #4A4A4A'>
					<Flex
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w={['50%', '50%', '25%']}>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner3.svg`} />
					</Flex>
					<Flex
						p={7}
						borderRight={['none', 'none', '1px solid #4A4A4A']}
						justifyContent={'center'}
						w={['50%', '50%', '25%']}>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner4.svg`} />
					</Flex>
					<Flex
						borderTop={['1px solid #4A4A4A', '1px solid #4A4A4A', 'none']}
						p={7}
						borderRight={'1px solid #4A4A4A'}
						justifyContent={'center'}
						w={['50%', '50%', '25%']}>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner5.svg`} />
					</Flex>
					<Flex
						borderTop={['1px solid #4A4A4A', '1px solid #4A4A4A', 'none']}
						p={7}
						justifyContent={'center'}
						w={['50%', '50%', '25%']}>
						<Image height={'40px'} src={`${assetsUrl}/partners/partner6.svg`} />
					</Flex>
				</HStack>
			</VStack>
		</Flex>
	);
};
