import { GetAllTransaction, IGetAllTransactionParamsType } from '@/api/functions/transaction.api';
import { QUERYKEY } from '@/config/QueryKey';
import { useQuery } from 'react-query';
import { useAppSelector } from './useAppSelector';

const useGetTranscations = (params:IGetAllTransactionParamsType) => {
    const { isLoggedIn } = useAppSelector((s) => s.userSlice);

    return useQuery({
        queryFn: () =>
            GetAllTransaction(params),
        queryKey: [QUERYKEY.transcation.list, params],
        enabled: !!isLoggedIn,
        select(data) {
            return data.data;
        },
    });
}

export default useGetTranscations