import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-6">
          <div>
            <Button variant={"elevated"}>
              Hello World
            </Button>
          </div>
          <div>
            <Input placeholder="Enter text here" />
          </div>
          <div>
            <Progress value={50} />
          </div>
          <div>
            <Textarea placeholder="Enter more text here" />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>

    </div>

  );
}
