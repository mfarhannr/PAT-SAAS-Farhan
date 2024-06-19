import { Carousel, Card, Label, TextInput, Button } from "flowbite-react";

const testimonials = [
  {
    name: "Ahmad Dahlan",
    image:
      "https://sekolah.smktibazma.sch.id/template/assets/img/pakdahlan.png",
    feedback:
      "Sekolah ini bagus mulai dari fasilitasnya, pelajarannya, gratis lagi. Siapa dulu Kepala Sekolahnya",
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-6 mb-2">
          Testimoni
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-6">
          <Carousel
            theme={{
              control: {
                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 group-hover:bg-gray-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                icon: "h-5 w-5 text-gray-600 dark:text-gray-400 sm:h-6 sm:w-6",
              },
            }}
            onSlideChange={(index) => console.log("onSlideChange()", index)}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center">
                  <img
                    alt={`${testimonial.name} image`}
                    src={testimonial.image}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg"
                  />
                </div>
                <div className="text-center mt-4">
                  <h5 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {testimonial.feedback}
                  </p>
                </div>
              </Card>
            ))}
          </Carousel>
          <div className="mt-8">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <Label htmlFor="nama" value="Nama" />
                <TextInput id="nama" type="text" sizing="md" />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" value="Email" />
                <TextInput id="email" type="email" sizing="md" />
              </div>
              <div className="mb-4">
                <Label htmlFor="komentar" value="Komentar" />
                <TextInput id="komentar" type="text" sizing="md" />
              </div>
              <Button color="blue">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
