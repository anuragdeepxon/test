import UserLayout from '../app/components/layouts/UserLayout';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <UserLayout>
      <NextNProgress
        color="#30ff8d"
        startPosition={0.3}
        stopDelayMs={100}
        height={5}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </UserLayout>
  );
}

export default MyApp;
