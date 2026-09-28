import { IconCard, ProductCard } from "../Registy/Content/Card";
import { ourServices } from "../DummyData";
import useTheme from "../Theme/UseTheme";
import { Themes, type ThemeName } from "../Theme/theme";
import Button from "../Registy/Base/Button";
import Grid from "../Registy/Layout/Grid";
import Fade from "../Registy/Meta/Fade";
import Dropdown from "../Registy/Input/Dropdown";
import Badge from "../Registy/Base/Badge";
import LinkButton from "../Registy/Base/LinkButton";

function App() {
  const themeSystem = useTheme();
  return (
    <div>
      <section
        className="flex flex-col px-20 py-15 bg-linear-to-b from-background3 to-background2"
        
      >
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col md:w-[60%] text-wrap overflow-hidden md:text-left text-center">
            <div className="flex gap-2">
              <Badge text={"Cutting Edge"} displayPiece={"Slice"} shape={"pill"} color="red" border></Badge>
              <Badge text={"Brand New"} displayPiece={"StarPlus"} shape={"pill"} color="green" border></Badge>
              <Badge text={"Scaleable"} displayPiece={"DatabaseArrowUp"} shape={"pill"} color="purple" border></Badge>
            </div>
            <h1 className="">RASP-UI</h1>
            <p>Rapid - Aesthetic - Scalable - Personalised</p>
            <p className="">
              UI system that suits all your needs and can build frontend systems{" "}
              <span className="text-color1">BLAZING</span> fast. No developer wait
              times, no stressing about theming - All encompassing UI tool
            </p>
          </div>
          <div className="flex flex-col mx-auto" >
            <h3 className="text-center">Try it Out!</h3>
            <Dropdown  options={Themes.map((theme) => (theme))} onChange={(v) => {themeSystem.setColorScheme(v as ThemeName)}} defaultLabel={themeSystem.colorScheme}></Dropdown>
            <Button className="mt-5 text-white" onClick={() => {themeSystem.toggleMode()}} data-theme={themeSystem.colorScheme} data-mode={themeSystem.mode}>Toggle Mode</Button>
          </div>
        </div>
        <Grid
          columns={4}
          smallScreenColumns={2}
          className="mt-5 gap-0 h-fit hidden md:grid"
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


      <h2 className="text-center underline decoration-accent mt-10">Our Services</h2>

      <Fade direction="left" speed={"verySlow"}>
        <Grid className="mx-auto gap-8 w-[80%] mb-10">
          {Object.entries(ourServices).map(([serviceName, service]) => (
            <ProductCard
              key={serviceName}
              title={serviceName}
              imageSrc={service.imageSrc}
              features={service.features}
              priceProperty={service.price}
              button={<LinkButton to={service.buttonItems.url} className="m-0 mt-auto text-lg py-5.5" variant={"maximalist"}>
                {service.buttonItems.label}
              </LinkButton>}
              titlePosition="top"
            />
          ))}
        </Grid>
      </Fade>
    </div>
  );
}

export default App;
