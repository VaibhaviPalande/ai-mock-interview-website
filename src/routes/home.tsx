import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl">
              IntervuBot.ai 
            </span>
            <span className="text-gray-500 font-extrabold">
               - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          
        </div>

       
<div className="flex flex-col md:flex-row w-full items-center justify-center gap-12 md:px-12 md:py-16 ">
  <p className="text-4xl font-semibold text-gray-900 text-center">
    <CountUp end={250000} duration={3} separator="," suffix="+" />
    <span className="block text-xl text-muted-foreground font-normal">
      Offers Received
    </span>
  </p>
  <p className="text-4xl font-semibold text-gray-900 text-center">
    <CountUp end={1200000} duration={3} separator="," suffix="+" />
    <span className="block text-xl text-muted-foreground font-normal">
      Interviews Aced
    </span>
  </p>
</div>



        {/* image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[520px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets1/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Interviews Copilot&copy;
          </div>

          
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets1/img/logo/firebase.png" />
          <MarqueImg img="/assets1/img/logo/meet.png" />
          <MarqueImg img="/assets1/img/logo/zoom.png" />
          <MarqueImg img="/assets1/img/logo/firebase.png" />
          <MarqueImg img="/assets1/img/logo/microsoft.png" />
          <MarqueImg img="/assets1/img/logo/meet.png" />
          <MarqueImg img="/assets1/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets1/img/logo/microsoft.png" />
        </Marquee>
      </div>
    <Container className="py-8 space-y-8 bg-[#2ad3a6] rounded-3xl">
        <h2 className="tracking-wide text-2xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets1/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center ">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      
    </div>
    
  );
};

export default HomePage;