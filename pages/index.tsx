import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag } from '../components/Htag/Htag';

function Home({ menu }: HomeProps): JSX.Element {

	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
		</>
	);
}

export default Home;