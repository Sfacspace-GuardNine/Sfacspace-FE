import RankingItem from "@/components/RankingItem";

type TRankingProps = {
  items: string[];
  outline?: boolean;
};

export default function Ranking({ items = [], outline = true }: TRankingProps) {
  return (
    <>
      <div
        className={`rounded-lg p-5 ${outline ? "outline outline-1 outline-[#c3c3c3]" : ""} w-fit`}
      >
        <ul className={"w-full divide-y divide-strokeLine-main10"}>
          {items.length > 0 &&
            items.map((item, index) => (
              <RankingItem link={item} key={index}>
                {item}
              </RankingItem>
            ))}
        </ul>
      </div>
    </>
  );
}
