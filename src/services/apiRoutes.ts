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
  REMOVE_SONG: (songId: string) => `/songs/${songId}`,
  REMOVE_FROM_USER_SONGS: (songId: string) => `/songs/user/${songId}`,
  ADD_USER_ALBUM: (albumId: string) => `/discs/user/${albumId}`,
  REMOVE_USER_ALBUM: (albumId: string) => `/discs/user/${albumId}`,
  REMOVE_ALBUM: (albumId: string) => `/discs/${albumId}`,
  RATE_ALBUM: "/discs/user/rate",
  ADD_ALBUM: "/discs",
  UPDATE_SONG: "/songs",
  UPDATE_ALBUM: "/discs",
};

export default apiRoutes;
