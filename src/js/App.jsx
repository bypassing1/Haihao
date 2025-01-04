import { HeaderMenu } from "./Header";
import { HeroImageRight } from "./HeroImageRight";
import { FooterSocial } from "./Footer";
import { FeaturesAsymmetrical } from "./FeatureAsymmetrical";
import { MantineProvider } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <HeaderMenu />
      <HeroImageRight />
      <FeaturesAsymmetrical/>
      {/* <ProductCard/> */}
      <FooterSocial/>
    </MantineProvider>
  );
}

export default App;