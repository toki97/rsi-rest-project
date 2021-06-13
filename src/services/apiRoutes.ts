const apiRoutes = {
  LOGIN: "/login",
  SONGS: "/songs",
  USER_SONGS: "/songs/user",
  ALBUMS: "/albums",
  USER_ALBUMS: "/albums/user",
  CHANGE_LISTENED_STATUS: "/songs/user/status",
  RATE_SONG: "/songs/user/rate",
  ADD_SONG: "/songs",
  ADD_USER_SONG: (songId: string) => `/songs/user/${songId}`,
  REMOVE_SONG: (userId: string) => `/songs/user/${userId}`,
};

export default apiRoutes;
