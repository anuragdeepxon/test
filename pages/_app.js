import UserLayout from '../app/components/layouts/UserLayout';
import AdminLayout from '../app/components/layouts/AdminLayout';
import '../app/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps, userRole }) {
  const Layout = userRole === 'admin' ? AdminLayout : UserLayout;

  return (
    <>
      <Layout>
      <NextNProgress
          color="#30ff8d"
          startPosition={0.3}
          stopDelayMs={100}
          height={5}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
