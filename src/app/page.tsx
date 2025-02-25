import Banner from "./components/banner/banner";
import Category from "./components/category/category";
import ExclusiveGames from "./components/exclusiveGames/exclusiveGames";
import Layout from "./components/layout";
import Provider from "./components/provider/provider";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Category />
      <ExclusiveGames />
      <Provider />
    </Layout>
  );
}
