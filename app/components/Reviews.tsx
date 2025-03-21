export default function Reviews() {
  const reviews = [
    {
      text: "TryckDesign levererade en fantastisk webbplats som överträffade våra förväntningar. Deras professionella approach och kreativa lösningar hjälpte oss att nå våra mål.",
      author: "Maria Andersson",
      role: "VD, Tech Solutions AB",
      rating: 5,
    },
    {
      text: "Otroligt nöjd med den grafiska profilen som TryckDesign skapade för mitt företag. Deras team förstod verkligen vår vision och levererade högkvalitativt arbete.",
      author: "Johan Bergström",
      role: "Grundare, Bergströms Café",
      rating: 5,
    },
    {
      text: "Vår digitala marknadsföring har fått ett rejält lyft tack vare TryckDesign. Professionella, kreativa och alltid tillgängliga för support.",
      author: "Anna Lindberg",
      role: "Marknadschef, Retail Plus",
      rating: 5,
    },
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div id="recensioner" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vad våra kunder säger
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Vi är stolta över att ha hjälpt många företag att lyckas med sin digitala närvaro.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>
              <blockquote>
                <p className="text-lg text-gray-600 mb-4">{review.text}</p>
                <footer>
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <p className="text-gray-500">{review.role}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 