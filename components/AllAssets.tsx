import assest from "@/json/assest";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const AllAssets = () => {
  return (
    <div>
      {Object.keys(assest).map((icon) => (
        <Image src={assest[icon]} alt={icon} height={125} width={125} />
      ))}

      <Divider />

      <Image src={assest.testicon} alt="Test icon" height={125} width={125} />
    </div>
  );
};

export default AllAssets;
