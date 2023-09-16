import Layout from "./layout/Layout";
import JobListings from "./job/JobListings";
export default function App() {
  return (
    <Layout>
      <div className="container">
        <JobListings />
      </div>
    </Layout>
  );
}
