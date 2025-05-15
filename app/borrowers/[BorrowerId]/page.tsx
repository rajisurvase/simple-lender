// "use client"


// import RecordsTable from '@/components/Borrower/Records/RecordsTable'
// import { Card } from '@mui/material'
// import React from 'react'


// type IPageProps = {
//     params : {
//         BorrowerId : string
//     }
// }
// const Page = ({ params} : IPageProps) => {


//   return (
//     <Card style={{ margin: "1rem" }}>
//        <RecordsTable borrowerId={params?.BorrowerId as string} />
//     </Card>
//   )
// }

// export default Page

import TransactionComponent from '@/components/Transaction'
import { Card } from '@mui/material'
import React from 'react'

type IPageProps = {
  params: {
    BorrowerId: string;
  };
};

const page = ({params}: IPageProps) => {
  return(
    <Card style={{ margin: "1rem" }}>
      <TransactionComponent BorrowerId={params.BorrowerId} />
    </Card>
  )
}

export default page