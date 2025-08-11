import { Button } from "./components/Button";
import Card from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        text="Share Brain"
        onClick={() => {
          alert("hello world");
        }}
        startIcon={<ShareIcon />}
      />
      <Button
        variant="secondary"
        size="lg"
        text="Add Content"
        onClick={() => {
          alert("hello world");
        }}
        startIcon={<PlusIcon />}
      />

      {/* card component */}
      <Card />
    </div>
  );
}

export default App;
