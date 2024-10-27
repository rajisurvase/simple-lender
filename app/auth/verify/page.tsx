// app/[slug]/page.tsx
import EmailVerification from "@/components/Auth/EmailVerification";
import { emailVerificationMutation } from "@/api/functions/user.api";

export default async function Page({
  searchParams,
}: {
  searchParams: { token?: string; email?: string };
}) {
  const { token, email } = searchParams;

  // Early return if token or email is missing
  if (!token || !email) {
    return <div>Missing token or email.</div>;
  }

  
  return <EmailVerification 
  token={token}
  email={email}
  />;
}
