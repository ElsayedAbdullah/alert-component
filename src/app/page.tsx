import Alert from "../components/Alert";
import { BellRing, Ban, Info, CheckCheck, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex gap-5 flex-col max-w-2xl m-auto justify-between p-5 sm:p-10">
      <Alert
        name="alert-default"
        icon={<BellRing />}
        title="Default Alert Title"
      >
        <p>
          Lorem ipsum dolor sit amet, <a href="/">I am a link</a> consectetur
          adipisicing elit. In, est!
        </p>
      </Alert>
      <Alert
        name="alert-error"
        icon={<Ban />}
        title="Error Alert Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, est!"
      />
      <Alert
        name="alert-info"
        icon={<Info />}
        title="Info Alert Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, est!"
      />
      <Alert
        name="alert-success"
        icon={<CheckCheck />}
        title="Success Alert Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, est!"
      />
      <Alert
        name="alert-warning"
        icon={<AlertTriangle />}
        title="Warning Alert Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, est!"
      />
    </main>
  );
}
