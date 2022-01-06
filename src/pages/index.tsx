import { NextPage } from 'next';
import { Overview } from '../components/Overview';
import { Selector } from '../components/Selector';
import { Title } from '../components/Title';

const Index: NextPage = () => (
  <>
    <Title />
    <Overview />
    <Selector />
  </>
);

export default Index;
