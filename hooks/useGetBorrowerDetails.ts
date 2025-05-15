import { GetBorrowerDetails } from '@/api/functions/borrower.api'
import { QUERYKEY } from '@/config/QueryKey'
import { useQuery } from 'react-query'

const useGetBorrowerDetails = (_id : string) => {
  return useQuery({
    queryFn : ()=>GetBorrowerDetails({
        borrower_id : _id
    }),
    queryKey : [QUERYKEY.borrower, _id],
    enabled : !!_id,
    select(data) {
        return data.data
    },
  })
}

export default useGetBorrowerDetails