import Cookies from 'js-cookie'
import { getCookieStorage} from '../../utils/storage';
export function requireAuthentication(gssp) {
  return async (ctx) => {
    const { req } = ctx;
    if (req.headers.cookie) {
      const  accessToken  = getCookieStorage("token")
      try {
        if (!accessToken) {
          return {
            redirect: {
              permanent: false,
              destination: '/login',
            },
          };
        }
      } catch (error) {
        return {
          redirect: {
            permanent: false,
            destination: '/login',
          },
        };
      }
    }
    return await gssp(ctx);
  };
}
