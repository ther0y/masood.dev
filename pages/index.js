import { MeCard } from '../components/me-card/me-card';

console.log('dcsd');

export default function Home() {
  return (
    <main>
      <div className="flex flex-col flex-grow items-center justify-center mt-40">
        <div className="mb-24">
          <MeCard />
        </div>
      </div>
    </main>
  );
}