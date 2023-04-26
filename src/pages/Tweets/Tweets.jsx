import { Button } from "components/Button/Button";
import { useLocation } from "react-router-dom";

export const Tweets = () => {
   const location = useLocation();
  return (
    <main key={location.pathname}>
       <Button />
    </main>
  );
};
