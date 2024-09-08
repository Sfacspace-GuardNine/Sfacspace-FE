export default function ProgressBar({ value = 0 }: { value: number }) {
  if (value > 100) value = 100;

  return (
    <>
      <div className={"mt-1 h-1 rounded-full bg-strokeLine-main10"}>
        <div
          className={"h-full rounded-full bg-system-accent"}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </>
  );
}
