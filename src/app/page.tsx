import dynamic from 'next/dynamic';

const IChingPage = dynamic(
  () => import('../components/IChingPage/IChingPage'),
  { ssr: false }
);

export default function Home() {
  return <IChingPage />;
}
