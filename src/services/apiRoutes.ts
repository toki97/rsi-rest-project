const apiRoutes = {
  LOGIN: "/login",
  SONGS: "/songs",
  USER_SONGS: "/songs/user",
  ALBUMS: "/discs",
  USER_ALBUMS: "/discs/user",
  CHANGE_LISTENED_STATUS: "/songs/user/status",
  RATE_SONG: "/songs/user/rate",
  ADD_SONG: "/songs",
  ADD_USER_SONG: (songId: string) => `/songs/user/${songId}`,
  REMOVE_SONG: (userId: string) => `/songs/user/${userId}`,
  ADD_USER_ALBUM: (albumId: string) => `/discs/user/${albumId}`,
  REMOVE_USER_ALBUM: (albumId: string) => `/discs/user/${albumId}`,
  RATE_ALBUM: "/discs/user/rate",
};

export default apiRoutes;
