import { useQuery } from "react-query";
import { useSearchQuery, useSortByRatingQuery } from "../../AppLayout/hooks";
import apiRoutes from "../../services/apiRoutes";
import SongsService from "../../services/songs";
import { GetSongsResponse } from "../../services/songs/types";

export const useSongsList = () => {
  const { debouncedSearch } = useSearchQuery();
  const [sortByRating] = useSortByRatingQuery();

  const { data: sortedSongs } = useQuery<GetSongsResponse>(
    [apiRoutes.SONGS_SORTED_BY_RATING, sortByRating],
    () => SongsService.getSongsSortedByRating(),
    {
      enabled: sortByRating,
    }
  );

  const { data: searchedSongs } = useQuery<GetSongsResponse>(
    [apiRoutes.SONGS_SEARCH, debouncedSearch],
    () => SongsService.searchSongs(debouncedSearch as string),
    {
      enabled: !!debouncedSearch && debouncedSearch.length > 0,
    }
  );

  const { data: songs, refetch } = useQuery<GetSongsResponse>(
    apiRoutes.SONGS,
    SongsService.getSongs,
    {
      enabled:
        (!debouncedSearch || debouncedSearch.length <= 0) && !sortByRating,
    }
  );

  return {
    songs:
      (!!debouncedSearch && debouncedSearch.length > 0
        ? searchedSongs
        : sortByRating
        ? sortedSongs
        : songs) ?? [],
    refetch,
  };
};
