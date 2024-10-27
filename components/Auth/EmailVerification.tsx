// components/Auth/EmailVerification.tsx
"use client";

import React, { useCallback, useState } from 'react';
import MuiModalWrapper from '../Model/MuiModalWrapper';
import ConfirmationComponent from '../Model/ConfirmationComponent';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { emailVerificationMutation } from '@/api/functions/user.api';
import { QUERYKEY } from '@/config/QueryKey';
import { CircularProgress, Stack } from '@mui/material';

type EmailVerificationProps = {
  token : string,
  email : string
};

const EmailVerification: React.FC<EmailVerificationProps> = ({token, email}) => {
  const router = useRouter()
  const [isConfirm, setIsConfirm] = useState(false)

  const {isLoading} = useQuery({
    queryFn : ()=>emailVerificationMutation({
      email,
      token
    }),
    queryKey : [QUERYKEY?.auth?.VERIFY],
    enabled : !!token && !!email,
    onSuccess:(res)=>{
        if(res?.status ===200){
          setIsConfirm(true)
        } 
    }
  })

  const handleCloseAction = useCallback(()=>{
    router?.push("/auth/signin")
  },[])


  if (isLoading) {
    return (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }} // This makes the Stack take full height of the viewport
      >
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <MuiModalWrapper title='' open={true} onClose={handleCloseAction}>
      <ConfirmationComponent
        title={isConfirm ? "Email Verified." : "Something Went Wrong"}
        description={isConfirm? `Your email, ${email}, has been successfully verified. You can now enjoy all the features and benefits of your account.` : "Please try again.." }
        icon={<CheckCircleOutlineSharpIcon sx={{ color: 'blue', fontSize: "3rem" }} />}
        handleConfirmationModel={handleCloseAction}
      />
    </MuiModalWrapper>
  );
};

export default EmailVerification;
