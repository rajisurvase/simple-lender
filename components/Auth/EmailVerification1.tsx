"use client";

import { emailVerificationMutation } from '@/api/functions/user.api';
import ConfirmationComponent from '@/components/Model/ConfirmationComponent';
import MuiModalWrapper from '@/components/Model/MuiModalWrapper';
import { QUERYKEY } from '@/config/QueryKey';
import {  useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';


const EmailVerification = () => {
    const [isConfirm, setIsConfirm] = useState(false)
  const searchParams = useSearchParams();
  
  const token = searchParams.get("token1");
  const email = searchParams.get("email");

  const handleClose = useCallback(()=>{
    setIsConfirm(false)
  },[setIsConfirm])

 
//   if(isLoading) return "Loading..."

  // Optionally, handle cases where token or email is not provided
//   if (!token || !email) {
//     return <div>404 - Page Not Found</div>; // Or a custom 404 component
//   }

  return (
    <div>
      <MuiModalWrapper open={isConfirm} title={``}  onClose={handleClose} >
       <ConfirmationComponent
       title="Email Verified."
       description="An email has been sent to your address. Please verify that you received it at your earliest convenience."

       icon={<CheckCircleOutlineSharpIcon sx={{ color: 'blue',fontSize:"3rem" }}  />}
       handleConfirmationModel={handleClose}
        />
      </MuiModalWrapper>
    </div>
  );
}

export default EmailVerification;
