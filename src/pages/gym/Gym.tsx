import { useEffect, useState } from "react";
import { FeaturedPrograms } from "../../data/GymData";
import { gymProgressionTimeline } from "../../DummyData";
import Timeline from "../../Registery/Content/Timeline";
import useTheme from "../../Theme/UseTheme";
import TextDivider from "../../Registery/Base/TextDivider";
import Grid from "../../Registery/Layout/Grid";
import Statistic from "../../Registery/Content/Statistic";
import ImageCard from "../../Registery/Content/Cards/ImageCard";
import Badge from "../../Registery/Base/Badge";

export default function Gym() {
  const { setColorScheme, mode } = useTheme();
  const [selectedMainProgram, setSelectedMainProgram] =
    useState("summer-shred");

  useEffect(() => {
    setColorScheme("Crimson");
  }, [setColorScheme]);

  return (
    <div
      className="py-4 bg-background1"
      data-theme={FeaturedPrograms[selectedMainProgram].theme}
      data-mode={mode}
    >
      <TextDivider className="">
        <h3>Featured Plans</h3>
      </TextDivider>
      <div className="flex justify-center">
        {Object.keys(FeaturedPrograms).map((program) => {
          const data = FeaturedPrograms[program];
          return (
            <ImageCard
              key={program}
              imageSrc={data.images[1]}
              imageType="contain"
              className="w-70"
              title={data.name}
              subtext={`${data.daysPerWeek} days / week`}
              imageAspectRatio="landscape"
              extraContent={
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {data.tags.slice(0, 3).map((tag) => (
                    <Badge
                      text={tag}
                      shape={"rounded"}
                      border
                      key={tag}
                    ></Badge>
                  ))}
                </div>
              }
              onClick={() => {
                setSelectedMainProgram(program);
                console.log("click");
              }}
              data-mode={mode}
              data-theme={data.theme}
            ></ImageCard>
          );
        })}
      </div>
      <div className="flex justify-center gap-10 **:transition-colors **:duration-500">
        <Timeline
          {...FeaturedPrograms[selectedMainProgram].progression}
          className="w-[60vw] m-0 p-0"
        />
        <Grid columns={1}>
          {FeaturedPrograms[selectedMainProgram].statistics.map((stat) => (
            <div className="flex flex-col justify-center items-center bg-background2 rounded-lg m-5 border border-color2/70">
              <Statistic {...stat} className="*:mx-auto *:px-4"></Statistic>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}
