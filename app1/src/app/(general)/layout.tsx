import NavBar from "../Componentes/NavBar";
import ProviderGasto from "../../Provider/ProviderGasto";

export default function LayoutGasto({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProviderGasto>
        <NavBar></NavBar>
        {children}
      </ProviderGasto>
    </div>
  );
}