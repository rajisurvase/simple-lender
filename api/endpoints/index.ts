export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const endpoints = {
  auth: {
    signup: "user/signup",
    profileUpdate: "user/profile/update"
  },
  cms: {
    about: "aboutpolicy/details"
  }
};
