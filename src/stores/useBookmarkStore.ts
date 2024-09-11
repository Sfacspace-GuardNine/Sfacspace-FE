import { create } from "zustand";

type BookmarkStore = {
  bookmarks: {
    repos: string[];
    files: string[];
  };
  toggleBookmark: (id: string, type: "repo" | "file") => void;
};

const hydrateBookmarks = () => {
  if (typeof window !== "undefined") {
    const storedRepos = localStorage.getItem("bookmarkedRepos");
    const storedFiles = localStorage.getItem("bookmarkedFiles");

    return {
      repos: storedRepos ? JSON.parse(storedRepos) : [],
      files: storedFiles ? JSON.parse(storedFiles) : [],
    };
  }
  return { repos: [], files: [] };
};

const useBookmarkStore = create<BookmarkStore>((set) => ({
  bookmarks: hydrateBookmarks(),
  toggleBookmark: (id: string, type: "repo" | "file") => {
    set((state) => {
      const isBookmarked =
        type === "repo"
          ? state.bookmarks.repos.includes(id)
          : state.bookmarks.files.includes(id);

      const newBookmarks = {
        repos:
          type === "repo"
            ? isBookmarked
              ? state.bookmarks.repos.filter((repoId) => repoId !== id)
              : [...state.bookmarks.repos, id]
            : state.bookmarks.repos,
        files:
          type === "file"
            ? isBookmarked
              ? state.bookmarks.files.filter((filePath) => filePath !== id)
              : [...state.bookmarks.files, id]
            : state.bookmarks.files,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "bookmarkedRepos",
          JSON.stringify(newBookmarks.repos),
        );
        localStorage.setItem(
          "bookmarkedFiles",
          JSON.stringify(newBookmarks.files),
        );
      }

      return { bookmarks: newBookmarks };
    });
  },
}));

export default useBookmarkStore;
