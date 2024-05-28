import CustomAvatar from "@/ui/Avatar/CustomAvatar";
import React from "react";



const AllAvatar = () => {
  return (
    <div>
      <CustomAvatar image="/vercel.svg" alt="logo" size={50} variant="dot" />
      <CustomAvatar alt="logo" size={50} variant="dot">
        <span>NA</span>
      </CustomAvatar>

      <CustomAvatar
        image="/vercel.svg"
        alt="logo"
        size={250}
        variant="standard"
      />
    </div>
  );
};

export default AllAvatar;
