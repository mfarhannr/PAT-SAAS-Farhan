import { Carousel, Card, Label, TextInput, Button } from "flowbite-react";

const testimonials = [
  {
    name: "Ahmad Dahlan",
    image:
      "https://sekolah.smktibazma.sch.id/template/assets/img/pakdahlan.png",
    feedback:
      " Sekolah ini bagus mulai dari fasilitasnya, pelajarannya, gratis lagi. Siapa dulu Kepala Sekolahnya",
  },
  {
    name: "Raymond Chin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhaaGs6q6Rxz4jTN-Rz_jUa2LxKtJ18c5JQ&s",
    feedback:
      "Sekolah ini sangat bagus, menjanjikan anak -anak gen z yang membawa Indonesia Emas pada tahun 2045",
  },
  {
    name: "Erick Tohir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEPOqVHlbKjsMd_CWajDsWPTgr8l4HR7UVd9H1W1Tph8Llpqw_g0eeMN5hELF109j_as&usqp=CAU",
    feedback:
      "Sekolah bagus yang akan menambah talenta IT masa depan yang berkualitas",
  },
  // Tambahkan testimoni lainnya jika diperlukan
];

function Testimonial() {
  return (
    <div id="testimoni">
      <div className="container mx-auto my-12">
        <div className="col">
          <h1 className="text-[32px] font-bold mx-6 mb-2">Testimoni</h1>
          <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-128 mx-6">
            <Carousel
              theme={{
                control: {
                  base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray/30 group-hover:bg-gray/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                  icon: "h-5 w-5 text-gray dark:text-gray-800 sm:h-6 sm:w-6",
                },
              }}
              onSlideChange={(index) => console.log("onSlideChange()", index)}
            >
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="max-w-lg">
                  <div className="flex h-full items-center justify-center dark:text-white">
                    <div className="flex flex-col items-center pb-10">
                      <img
                        alt={`${testimonial.name} image`}
                        height="128"
                        src={testimonial.image}
                        width="128"
                        className="mb-3 rounded-full shadow-lg"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {testimonial.feedback}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>
          <
          <div className="flex max-w-md flex-col gap-4 ml-24">
            <div className="w-[40rem]">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nama" value="Nama" />
                </div>
                <TextInput id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="base" type="text" sizing="md" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="large" value="Komentar" />
                </div>
                <TextInput id="large" type="text" sizing="lg" />
              </div>
              <div className="mt-4">
                <Button color="blue">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
