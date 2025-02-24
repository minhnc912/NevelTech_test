import Banner from "./components/banner";
import Category from "./components/category";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Category />
    </Layout>
  );
}
