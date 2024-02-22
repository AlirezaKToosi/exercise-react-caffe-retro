import { Cosy } from "./components/Cosy";
import { Hot } from "./components/Hot";
import { Juicy } from "./components/Juicy";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <>
      <Nav />
      <Hot />
      <Juicy />
      <Cosy />
    </>
  );
}
