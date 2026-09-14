
export const environment = {
  production: true,
  apiUrl: 'https://api.athl-logistics.africatalentprojets.tech',
  cloudinary: {
    cloudName: 'drfq0bt4z',
    uploadPreset: 'xbanking'
  },
  endpoints: {
    auth: {
      authenticate: 'api/v1/authenticate',
    },
    users: {
      currentUser: 'api/v1/users/current-user',
      register: 'api/v1/users/register',
      activation: 'api/v1/users/activation',
      resendActivation: 'api/v1/users/resend-activation-code',
      updateProfile: 'api/v1/users/update-profile',
      changePassword: 'api/v1/users/change-password',
      list: 'api/v1/users',
      resetPassword: (userId: number | string) => `api/v1/users/${userId}/reset-password`,
      block: (userId: number | string) => `api/v1/users/${userId}/block`,
      unblock: (userId: number | string) => `api/v1/users/${userId}/unblock`,
      byId: (userId: number | string) => `api/v1/users/${userId}`,
    },
  },
};
