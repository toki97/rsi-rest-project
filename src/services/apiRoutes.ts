const apiRoutes = {
  LOGIN: "/login",
  SONGS: "/songs/user",
  CHANGE_LISTENED_STATUS: "/songs/user/status",
  RATE_SONG: "/songs/user/rate",
  ADD_SONG: (userId: string) => `/songs/user/${userId}`,
  REMOVE_SONG: (userId: string) => `/songs/user/${userId}`,
};

export default apiRoutes;
