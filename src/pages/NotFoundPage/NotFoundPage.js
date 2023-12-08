import { Helmet } from 'react-helmet';

export default function NotFoundPage() {
  return (
    <main>
      <Helmet title="Not Found..." />
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 28 }}>404</h2>
        <p>Sorry, we couldn't find that page...</p>
      </div>
    </main>
  );
}
