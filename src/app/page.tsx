import Footer from "@/components/Footer";
import MainDivFifth from "@/components/main/MainDivFifth";
import MainDivFirst from "@/components/main/MainDivFirst";
import MainDivFourth from "@/components/main/MainDivFourth";
import MainDivSecond from "@/components/main/MainDivSecond";
import MainDivThird from "@/components/main/MainDivThird";

export default function Home() {
  return (
    <>
      <div className={"flex flex-col"}>
        <MainDivFirst />
        <MainDivSecond />
        <MainDivThird />
        <MainDivFourth />
        <MainDivFifth />
        <Footer />
      </div>
    </>
  );
}
