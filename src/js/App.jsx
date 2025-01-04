import { HeaderMenu } from "./Header";
import { HeroImageRight } from "./HeroImageRight";
import { FooterSocial } from "./Footer";
import { FeaturesAsymmetrical } from "./FeatureAsymmetrical";
import { MantineProvider } from "@mantine/core";
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
      <FooterSocial/>
    </MantineProvider>
  );
}

export default App;