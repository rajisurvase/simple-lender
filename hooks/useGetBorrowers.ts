import { GetBorrowerList, GetBorrowerListParams } from "@/api/functions/borrower.api";
import { QUERYKEY } from "@/config/QueryKey";
import { useQuery } from "react-query";
import { useAppSelector } from "./useAppSelector";


const useGetBorrowers = (params : GetBorrowerListParams) => {
    const { isLoggedIn } = useAppSelector((s) => s.userSlice);
  
     return useQuery({
         queryFn: () =>
           GetBorrowerList(params),
         queryKey: [QUERYKEY.borrower.list, params],
         enabled: !!isLoggedIn,
         select(data) {
           return data.data;
         },
       });
}

export default useGetBorrowers