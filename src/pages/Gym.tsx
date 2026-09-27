import { gymProgressionTimeline } from "../DummyData";
import Timeline from "../Registy/Content/Timeline";

export default function Gym() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Gym Progression</h1>
        <Timeline elements={gymProgressionTimeline} alternating={"right"} ></Timeline>
        </div>
    );
}