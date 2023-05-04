import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ageRanges = ['0-6 years', '7-14 years', '15-18 years'];

export default function AgeRange() {
  const router = useRouter();
  const { diagnosis } = router.query;

  const handleSelect = (ageRange) => {
    router.push(`/app/resources?diagnosis=${diagnosis}&ageRange=${ageRange}`);
  };

  return (
    <Layout>
      <div>
        <h1>Select Age Range</h1>
        <ul>
          {ageRanges.map((ageRange, index) => (
            <li key={index}></li>
          )
          )}
          </ul>
          </div>
          </Layout>)


          }
