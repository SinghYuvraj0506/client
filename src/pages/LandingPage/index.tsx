import ProductGrid from "../../components/ProductGrid";
import ProductSlider from "../../components/ProductSlider";
import { footerData } from "../../lib/constants";
import { useQuery } from "../../lib/hooks";
import HeroSection from "./_components/HeroSection";

const LandingPage = () => {
  const { data: featuredData, loading: featuredLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products"
  );
  const { data: ElectronicsData, loading: electronicsLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products/category/electronics?limit=4"
  );
  const { data: JewelleryData, loading: jeweleryLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products/category/jewelery?limit=4"
  );
  const { data: MensData, loading: MensLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products/category/men's clothing?limit=4"
  );
  const { data: WomenData, loading: WomenLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products/category/women's clothing?limit=4"
  );


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      <ProductSlider
        title="Featured Products"
        data={featuredData}
        loading={featuredLoading}
      />

      <div className="container mx-auto py-12 space-y-5">
        <h2 className="text-2xl font-bold">Categories</h2>

        <div className="grid grid-cols-4 gap-5 box-border">
          <ProductGrid
            title="Electronics"
            categoryLink="/products?category=electronics"
            data={ElectronicsData}
            loading={electronicsLoading}
          />
          <ProductGrid
            title="Jewelry"
            categoryLink="/products?category=jewelery"
            data={JewelleryData}
            loading={jeweleryLoading}
          />
          <ProductGrid
            title="Men's Clothing"
            categoryLink="/products?category=men's clothing"
            data={MensData}
            loading={MensLoading}
          />
          <ProductGrid
            title="Women's Clothing"
            categoryLink="/products?category=women's clothing"
            data={WomenData}
            loading={WomenLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
