import { Container } from '@chakra-ui/react';
import React, { useEffect, lazy, Suspense } from 'react';
import { Hero } from '../../components/Landing/Hero';
import { HeroInfographics } from '../../components/Landing/heroInfographics';
import { SpeakersCS } from '../../components/Landing/SpeakersCS';
import { PartnersCS } from '../../components/Landing/PartnersCS';
import { ScheduleCS } from '../../components/Landing/ScheduleCS';
import { EventSection } from '../../components/Landing/EventSection';
import { PhotoReel } from '../../components/Landing/PhotoReel';
import { SpeakersSection } from '../../components/Landing/SpeakersSection';
import { PartnerSection } from '../../components/Landing/PartnerSection';
import { ScheduleSection } from '../../components/Landing/ScheduleSection';

export default function Landing() {
	return (
		<Container
			maxW={'100vw'}
			overflowX='hidden'
			overflowY='scroll'
			padding={0}
			m={0}
			backgroundColor={'#031606'}
			h='100vh'>
			<Hero />
			<HeroInfographics />
			<SpeakersSection />
			<PartnerSection />
			<ScheduleSection />
			<EventSection />
			<PhotoReel />
		</Container>
	);
}
