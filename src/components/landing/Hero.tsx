import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-bold text-[#5e5ce6]">
        Remember Everything. Forget Nothing.
      </h1>

      <p className="text-3xl mt-10 text-[#5e5ce6] font-semibold">
        Organize your mind. Unlock your potential.
      </p>

      <div className="mt-20">
        <TryItNow />
      </div>
    </div>
  );
}

function TryItNow() {
  const navigate = useNavigate();

  return (
    <Button
      variant="primary"
      size="lg"
      text="Try It Now"
      onClick={() => {
        navigate("/signup");
      }}
      className="text-xl px-9 font-extrabold"
    />
  );
}
