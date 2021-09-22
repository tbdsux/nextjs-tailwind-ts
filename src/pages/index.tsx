import Seo from '../components/Seo';
import DefaultLayout from '../layouts/Default';

export default function Home() {
  return (
    <DefaultLayout>
      <Seo title="Home" />

      <div>start coding!</div>
    </DefaultLayout>
  );
}
