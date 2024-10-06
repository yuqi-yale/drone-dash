import { MapProvider } from "../providers/map-provider";
import {MapComponent} from "@/components/Maps"

export default function Home() {

  return (
    <MapProvider>
      <MapComponent/>
    </MapProvider>
  );
}