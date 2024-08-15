export default function ProgressBar({ value = 0 }: { value: number }) {
  if (value > 100) value = 100;

  return (
    <>
      <div className={"h-3 rounded-full bg-strokeLine-main10"}>
        <div
          className={"h-full rounded-full bg-system-success"}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </>
  );
}
