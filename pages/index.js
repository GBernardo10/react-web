// import dynamic from 'next/dynamic';
import Eventos from '../src/components/eventos';

// const Home = ({ children }) =>
//   dynamic(() => import('../src/components/loading'), {
//     loading: () => <div>loading</div>,
//     ssr: true,
//   });

export default () => {
  return <Eventos></Eventos>;
};
