import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const diagnoses = [
  'Autism',
  'Down Syndrome',
  'Cognitive Delays/Developmental Disabilities',
  'FASD',
  'Genetic Disorders',
  'Other',
];

export default function Diagnosis() {
  const router = useRouter();

  const handleSelect = (diagnosis) => {
    router.push(`/app/age-range?diagnosis=${diagnosis}`);
  };

  return (
    <Layout>
      <div>
        <h1>Select Diagnosis</h1>
        <ul>
          {diagnoses.map((diagnosis, index) => (
            <li key={index} onClick={() => handleSelect(diagnosis)}>
              {diagnosis}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
