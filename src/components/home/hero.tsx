// import { Button, Typography } from "@material-tailwind/react";
// import frame from "../../assets/images/frame1.png";

// const Hero = () => {
//   return (
//     <main className="bg-[#EFFBFA] h-auto w-full pt-[50px]">
//       <section className="max-w-7xl container m-auto">
//         <div>
//           <Typography className="text-6xl playfair font-bold text-center">
//             Building Independence
//           </Typography>
//           <Typography className="playfair text-[#48D1CC] text-center mt-2 font-bold italic text-6xl">
//             Empowering <span className="text-black">Lives</span>
//           </Typography>
//           <Typography className="font-medium text-[#626A6A] mt-8 text-lg text-center ">
//             Safe and supportive semi-independent accommodation for 18+
//           </Typography>
//         </div>
//         <section className="flex gap-3 justify-center mt-12">
//           <Button className="bg-[#48D1CC] rounded-full font-bold text-lg text-white px-8 py-3">
//             Find Your New Home Now
//           </Button>
//           <Button className="bg-white px-8 text-[#48D1CC] rounded-full py-3 font-bold text-lg">
//             Learn More
//           </Button>
//         </section>
//         <div className="mx-auto mt-6 w-[650px]">
//           <img src={frame} alt="frame" className="w-[100px" />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;

import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="bg-[#EFFBFA] h-auto w-full pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl container mx-auto">
        <div className="px-2 md:px-4">
          <Typography className="text-4xl sm:text-5xl md:text-6xl playfair font-bold text-center">
            Building Independence
          </Typography>
          <Typography className="playfair text-[#48D1CC] text-center mt-2 font-bold italic text-4xl sm:text-5xl md:text-6xl">
            Empowering <span className="text-black">Lives</span>
          </Typography>
          <Typography className="font-medium text-[#626A6A] mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto">
            Safe and supportive semi-independent accommodation for 18+
          </Typography>
        </div>

        <section className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10 md:mt-12 px-2 md:px-4">
          <Link to="ROUTE.accomodation">
            <Button className="bg-[#48D1CC] rounded-full font-bold text-base sm:text-lg text-white px-6 sm:px-8 py-3 shadow-md hover:shadow-lg transition-all">
              Find Your New Home Now
            </Button>
          </Link>
          <Button className="bg-white px-6 sm:px-8 text-[#48D1CC] rounded-full py-3 font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all">
            Learn More
          </Button>
        </section>

        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
          <img src={frame} alt="frame" className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
