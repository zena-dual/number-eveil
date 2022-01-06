import { NextPage } from 'next';
import { About } from '../components/About';
import { Overview } from '../components/Overview';
import { Selector } from '../components/Selector';
import { Title } from '../components/Title';

const Index: NextPage = () => (
  <>
    <Title />
    <Overview />
    <Selector />
    <About />
  </>
);

export default Index;
