import ClippingCard from "@/components/ClippingCard";

export default function ClippingFiles() {
  return (
    <>
      <div className={"grid grid-cols-3 gap-6"}>
        {/* 더미 데이터 */}
        <ClippingCard label={"취약성 보고서"} date={new Date(0)} disabled>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard
          label={"취약성 알림"}
          date={new Date(0)}
          variant={"purple"}
        >
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 경고"} date={new Date(0)} variant={"pink"}>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 보고서"} date={new Date(0)} disabled>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard
          label={"취약성 알림"}
          date={new Date(0)}
          variant={"purple"}
        >
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 경고"} date={new Date(0)} variant={"pink"}>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 보고서"} date={new Date(0)} disabled>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard
          label={"취약성 알림"}
          date={new Date(0)}
          variant={"purple"}
        >
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 경고"} date={new Date(0)} variant={"pink"}>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 보고서"} date={new Date(0)} disabled>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard
          label={"취약성 알림"}
          date={new Date(0)}
          variant={"purple"}
        >
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
        <ClippingCard label={"취약성 경고"} date={new Date(0)} variant={"pink"}>
          Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </ClippingCard>
      </div>
    </>
  );
}
