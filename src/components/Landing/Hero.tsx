import React from 'react';
import {
	Flex,
	Heading,
	Button,
	HStack,
	Image,
	Divider,
	VStack,
} from '@chakra-ui/react';
import { assetsUrl, socialLink } from '../../helpers/values';

export const Hero: React.FC = () => {
	return (
		<Flex
			position='relative'
			w='100%'
			h='calc(100% - 240px)'
			justifyContent={'space-between'}
			direction={'row'}>
			<Flex
				direction={'column'}
				justifyContent={['space-between', 'space-between', 'flex-start']}
				alignItems={['center', 'center', 'flex-start']}
				w={['100%', '100%', '100%', '50%']}
				h='100%'
				p={[10, 10, 20]}>
				<HStack
					justifyContent={['flex-end', 'flex-end', 'space-between']}
					w='100%'
					alignItems={'flex-end'}>
					<HStack spacing={5} display={['none', 'none', 'flex']}>
						<Image
							onClick={() => window.open('https://solidityscan.com/', '_blank')}
							cursor='pointer'
							src={`${assetsUrl}/logos/pos_logo_main.svg`}
							height='80px'
							width='240px'
						/>
						<Divider
							height={'100px'}
							bgColor={'white'}
							orientation='vertical'
						/>
						<Image
							src={`${assetsUrl}/logos/ss_logo_main.svg`}
							height='80px'
							width='240px'
						/>
					</HStack>
					<VStack display={['flex', 'flex', 'none']} spacing={[2, 3, 5, 5]}>
						{socialLink.map((item) => (
							<Image
								cursor={'pointer'}
								onClick={() => window.open(item.socialUrl, '_blank')}
								src={`${assetsUrl}/socials/header/${item.imgLink}.svg`}
								height={'30px'}
								width={'30px'}
							/>
						))}
					</VStack>
				</HStack>

				<VStack w='100%' display={['flex', 'flex', 'none']}>
					<Heading
						fontFamily={'League Gothic'}
						mt={10}
						textAlign={'center'}
						fontSize={'5xl'}
						color={'white'}>
						PROOF OF SECURITY
					</Heading>
					<Heading
						fontFamily={'League Gothic'}
						fontSize={'5xl'}
						textAlign={'center'}
						color={'white'}>
						SUMMIT - 2024 DUBAI
					</Heading>
					<Button
						sx={{
							background:
								'linear-gradient(129.18deg, #52FF00 8.52%, #00EEFD 93.94%)',
							boxShadow: '0px 4px 23px rgba(47, 248, 107, 0.45)',
							color: 'black',
						}}
						borderRadius={30}
						variant={'solid'}
						px={10}
						mt={5}
						size={'lg'}>
						RSVP
					</Button>
				</VStack>
				<Heading
					display={['none', 'none', 'block']}
					fontFamily={'League Gothic'}
					mt={10}
					fontSize={'8xl'}
					color={'white'}>
					PROOF OF
				</Heading>
				<Heading
					display={['none', 'none', 'block']}
					fontFamily={'League Gothic'}
					fontSize={'8xl'}
					color={'white'}>
					SECURITY SUMMIT
				</Heading>
				<Heading
					display={['none', 'none', 'block']}
					fontFamily={'League Gothic'}
					fontSize={'7xl'}
					color={'white'}>
					2024 - DUBAI
				</Heading>
			</Flex>

			<VStack
				display={['none', 'none', 'flex']}
				mr='50px'
				spacing={5}
				mt='20px'>
				{socialLink.map((item) => (
					<Image
						onClick={() => window.open(item.socialUrl, '_blank')}
						src={`${assetsUrl}/socials/header/${item.imgLink}.svg`}
						height={'50px'}
						width={'50px'}
					/>
				))}
			</VStack>
		</Flex>
	);
};
