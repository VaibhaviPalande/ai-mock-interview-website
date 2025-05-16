import { Link } from "react-router-dom";
import { GiChaingun } from "react-icons/gi"
export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      
      <GiChaingun className="min-w-10 min-h-10 object-contain" />
    </Link>
  );
};