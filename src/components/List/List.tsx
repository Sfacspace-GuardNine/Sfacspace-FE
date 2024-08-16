import Image from "next/image";

import ListItem from "./ListItem";

export type TFileItemProps = {
  type: "folder" | "file";
  name: string;
  status?: "analyzing" | "pending" | "completed" | "error";
  isChecked?: boolean;
};

type TListProps = {
  items: TFileItemProps[];
};

export default function List({ items }: TListProps) {
  return (
    <div className="divide-y divide-[#C3C3C3] overflow-hidden rounded-xl border border-[#C3C3C3]">
      <div className="flex justify-between bg-primary-50 p-[20px]">
        <div className="flex items-center gap-[10px] text-xl">
          <Image
            src="/images/profile-default.png"
            alt="userImage"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span>userName</span>
        </div>
        <Image
          src="./images/list-caption.svg"
          alt="listCaption"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <div>
        <ul className="w-full divide-y divide-neutral-10">
          {items.length > 0 &&
            items.map((item, index) => <ListItem {...item} key={index} />)}
        </ul>
      </div>
    </div>
  );
}
