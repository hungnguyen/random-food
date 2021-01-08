import React from "react";
import Setting from "../components/Setting";
import Result from "../components/Result";

export default function Home() {
  const [proceed, setProceed] = React.useState(false);
  const handleProcess = () => {
    setProceed(true);
  };
  const handleBack = () => {
    setProceed(false);
  };
  return proceed ? (
    <Result onBack={handleBack} />
  ) : (
    <Setting onProcess={handleProcess} />
  );
}
