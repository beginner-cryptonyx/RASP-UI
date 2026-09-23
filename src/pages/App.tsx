import { IconCard, ProductCard } from "../Registy/Content/Card";
import { ourServices } from "../DummyData";
import useTheme from "../Theme/UseTheme";
import { Themes, type ThemeName } from "../Theme/theme";
import Button from "../Registy/Base/Button";
import Grid from "../Registy/layout/Grid";
import Fade from "../Registy/Meta/Fade";

function App() {
  const themeSystem = useTheme();
  return (
    <div>
      <section
        className="flex md:flex-col px-20 py-20 bg-linear-to-b from-background3 to-background2"
        data-theme="Ocean"
        data-mode="dark"
      >
        <div className="flex flex-col w-[60%] text-wrap overflow-hidden">
          <h1>RASP-UI</h1>
          <p>Rapid - Aesthetic - Scalable - Personalised</p>
          <p>
            UI system that suits all your needs and can build frontend systems{" "}
            <span className="text-color1">BLAZING</span> fast. No developer wait
            times, no stressing about theming - All encompassing UI tool
          </p>
        </div>
        <Grid
          columns={4}
          className="mt-5 gap-0 h-fit"
          data-theme="Ocean"
          data-mode="dark"
        >
          <IconCard
            iconAlign="center"
            title="Rapid"
            miniCard
            icon="FastForward"
            className="text-center"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Aesthetic"
            miniCard
            icon="Sparkles"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Scalable"
            miniCard
            icon="Anvil"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Personalised"
            miniCard
            icon="Badge"
          ></IconCard>
        </Grid>
      </section>
      <Grid className="my-9" smallScreenColumns={2}>
        {Themes.map((theme) => (
          <div className="flex items-center justify-center w-[80%] mx-auto">
            <Button
              onClick={() => {
                themeSystem.setColorScheme(theme as ThemeName);
              }}
              data-mode={themeSystem.mode}
              data-theme={theme}
              size={"full"}
              className=""
            >
              {theme}
            </Button>
          </div>
        ))}
        <Button
          onClick={() => {
            themeSystem.toggleMode();
          }}
          variant={"outline"}
          size={"full"}
          className="col-span-2 md:col-span-3 w-[90%] mx-auto"
        >
          Toggle Modeee
        </Button>
      </Grid>

      <h2 className="text-center underline decoration-accent">Our Services</h2>

      <Fade direction="left" speed={"verySlow"}>
        <Grid className="mx-auto gap-8 w-[80%] mb-10">
          {Object.entries(ourServices).map(([serviceName, service]) => (
            <ProductCard
              key={serviceName}
              title={serviceName}
              imageSrc={service.imageSrc}
              features={service.features}
              priceProperty={service.price}
              button={service.buttonItems}
              titlePosition="top"
            />
          ))}
        </Grid>
      </Fade>
    </div>
  );
}

export default App;
