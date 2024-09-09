"use client";

import { useEffect, useState } from "react";

import FileCard from "@/components/FileCard";
import Pagination from "@/components/Pagination";

type TRepository = {
  id: string;
  name: string;
  description: string;
  owner: string;
  isBookmarked?: boolean;
  created_at: string;
};

type TLibraryFilesProps = {
  repos: TRepository[];
};

export default function LibraryFiles({ repos }: TLibraryFilesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalItems = repos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentRepos = repos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <div>
      <div className="grid w-full grid-cols-4 gap-x-6 gap-y-12">
        {currentRepos.map((repo) => (
          <FileCard
            key={repo.id}
            title={repo.name}
            caption={repo.description}
            link={`/my/library/groups/${repo.owner}/${repo.name}`}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          size={totalPages}
          start={1}
          onClickPageButton={handlePageClick}
        />
      </div>
    </div>
  );
}
