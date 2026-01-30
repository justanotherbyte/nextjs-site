import Section from "./section";
import CountdownTimer from "./timer";

export default async function RocketLaunches() {
    const resp = await fetch("https://fdo.rocketlaunch.live/json/launches/next/1");
    const data = await resp.json();

    const launch = data["result"][0];
    const description = launch["launch_description"];
    const timestamp = launch["sort_date"];

    return (
        <Section id="launches" name="Next Rocket Launch">
            <CountdownTimer timestamp={timestamp * 1000}></CountdownTimer>
            <p className="text-zinc-600 dark:text-zinc-400 text-center mt-3">{description}</p>
        </Section >
    )
}