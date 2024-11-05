import { useSearchParams } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import { useQuery } from '../lib/hooks';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: similarData, loading: similarLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + `/products/category/${searchParams.get("category")}`,
    !!searchParams.get("category")
  );

  const { data: featuredData, loading: featuredLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + "/products"
  );


  return (
    <div>
      <ProductSlider
        title=""
        data={similarData}
        loading={similarLoading}
      />

      <ProductSlider
        title="Other Featured Products"
        data={featuredData}
        loading={featuredLoading}
      />

    </div>
  )
}

export default ProductsPage