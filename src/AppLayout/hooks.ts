import { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { BooleanParam, StringParam, useQueryParam } from "use-query-params";
import routes from "../setup/routes";

export const useLogout = () => {
  const history = useHistory();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    history.push(routes.LOGIN);
  }, [history]);

  return logout;
};

export const useIsLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const useSearchQuery = () => {
  const [search, setSearch] = useQueryParam("search", StringParam);
  const [debouncedSearch] = useDebounce(search, 250);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setSearch(!value || value.length <= 0 ? undefined : value);

  return {
    search,
    debouncedSearch,
    handleSearchChange,
  };
};

export const useSortByRatingQuery = () => {
  const [sortByRating, setSortByRating] = useQueryParam(
    "sortByRating",
    BooleanParam
  );

  const handleSortByRatingChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => setSortByRating(checked ? checked : undefined);

  return [!!sortByRating, handleSortByRatingChange] as const;
};
