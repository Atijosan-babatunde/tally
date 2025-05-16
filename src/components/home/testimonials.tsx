import { Button, Typography } from "@material-tailwind/react";
import { Arrow } from "../../assets/svg";

const Testimonials = () => {
  return (
    <main className="bg-[#EFFBFA] p-15">
      <div className="max-w-7xl mx-auto container">
        <Typography className="font-bold mb-4 text-[#48D1CC] text-xl text-center">
          Testimonials
        </Typography>
        <Typography className="font-extrabold mb-3 text-black playfair text-5xl text-center">
          What Our{" "}
          <span className="text-[#48D1CC] playfair italic">Residents</span> Say
        </Typography>
        <Typography className="font-medium text-md mb-10 max-w-xl mx-auto text-center text-[#626A6A]">
          At Talley, we're proud to have helped young adults build confidence,
          independence, and sense of belonging. here some of our residents have
          to say about their expereience with us:
        </Typography>
        <div className="flex justify-center">
          <Button className="bg-[#48D1CC] flex items-center gap-3 rounded-full font-bold text-lg text-white px-8 py-3">
            Read More Success Stories
            <Arrow />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
