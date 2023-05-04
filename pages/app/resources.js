import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// Dummy data for resources
const resources = [
  {
    id: 1,
    title: 'Resource 1',
    diagnosis: 'Autism',
    ageRange: '0-6 years',
  },
  {
    id: 2,
    title: 'Resource 2',
    diagnosis: 'Autism',
    ageRange: '7-14 years',
  },
  // Add more resources as needed
];

export default function Resources() {
  const router = useRouter();
  const { diagnosis, ageRange } = router.query;

  const filteredResources = resources.filter(
    (resource) =>
      resource.diagnosis === diagnosis && resource.ageRange === ageRange
  );

  return (
    <Layout>
      <div>
        <h1>Resources</h1>
        <p>
          Showing resources for {diagnosis} with age range {ageRange}
        </p>
        <ul>
          {filteredResources.map((resource) => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
