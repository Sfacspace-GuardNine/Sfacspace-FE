import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";

import useGitContentsStore, {
  TRepoContentItem,
} from "@/stores/useGitContentsStore";
import useGitRepoStore from "@/stores/useGitRepoStore";

import ListItem from "./ListItem";

type TListProps = {
  setCurrentFile: (item: TRepoContentItem) => void;
};

const List = ({ setCurrentFile }: TListProps) => {
  const { owner, name } = useParams();
  const repoOwner = Array.isArray(owner) ? owner[0] : owner;
  const repoName = Array.isArray(name) ? name[0] : name;

  const {
    repoContents,
    fetchRepoContents,
    setRepoContents,
    toggleFileSelection,
  } = useGitContentsStore();
  const { gitToken } = useGitRepoStore();

  const [expandedDirs, setExpandedDirs] = useState<{ [key: string]: boolean }>(
    {},
  );

  const [dirContents, setDirContents] = useState<{
    [key: string]: TRepoContentItem[];
  }>({});

  useEffect(() => {
    const fetchContents = async () => {
      if (repoOwner && repoName && gitToken) {
        const contents = await fetchRepoContents({
          token: gitToken,
          owner: repoOwner,
          repo: repoName,
        });

        setRepoContents(contents);
      }
    };

    fetchContents();
  }, [repoOwner, repoName, gitToken, fetchRepoContents, setRepoContents]);

  const handleDirectoryClick = async (item: TRepoContentItem) => {
    const { path } = item;
    const isExpanded = expandedDirs[path];

    setExpandedDirs((prevState) => ({
      ...prevState,
      [path]: !isExpanded,
    }));

    // 하위 콘텐츠 토글
    if (!isExpanded && !dirContents[path] && gitToken) {
      const children = await fetchRepoContents({
        token: gitToken,
        owner: repoOwner,
        repo: repoName,
        path: path,
      });

      if (children) {
        setDirContents((prevState) => ({
          ...prevState,
          [path]: children,
        }));
      }
    }
  };

  const handleFileClick = (item: TRepoContentItem) => {
    toggleFileSelection(item);
    setCurrentFile(item);
  };

  // 파일 렌더링
  const renderFileItem = (item: TRepoContentItem) => (
    <div onClick={() => handleFileClick(item)}>
      <ListItem
        type={item.type}
        key={item.path}
        name={item.name}
        path={item.path}
      />
    </div>
  );

  // 디렉토리 렌더링
  const renderDirItem = (item: TRepoContentItem) => {
    const isExpanded = expandedDirs[item.path];
    const children = dirContents[item.path];

    return (
      <div key={item.path}>
        <div
          onClick={() => handleDirectoryClick(item)}
          style={{ cursor: "pointer" }}
        >
          <ListItem
            type={item.type}
            key={item.path}
            name={item.name}
            path={item.path}
          />
        </div>
        {isExpanded && children && (
          <div>
            {children.map((childItem) => (
              <React.Fragment key={childItem.path}>
                {childItem.type === "file"
                  ? renderFileItem(childItem)
                  : renderDirItem(childItem)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderList = (items: TRepoContentItem[]) => {
    return items.map((item) =>
      item.type === "file" ? renderFileItem(item) : renderDirItem(item),
    );
  };

  return (
    <>
      <div className="divide-y divide-[#C3C3C3] overflow-hidden rounded-xl border border-[#C3C3C3]">
        <div className="flex justify-between bg-primary-50 p-[20px]">
          <div className="flex items-center text-xl">
            <span>Files</span>
          </div>
          <div className="flex gap-[14px]">
            <Image
              src="/images/multi-file-check.svg"
              alt="listCaption"
              width={30}
              height={30}
              className="rounded-full"
            />
            <Image
              src="/images/list-caption.svg"
              alt="listCaption"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <ul className="w-full divide-y divide-neutral-10">
            {renderList(repoContents)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
