import React from "react";
import { Calendar, Clock, MapPin, Utensils, Music, Beer } from "lucide-react";

export default function NielsBBQUitnodiging() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 font-sans">
      <header className="pt-12 pb-6 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-orange-800 rotate-1">
            Hé Niels! Ja, jij!
          </h1>
          <p className="mt-4 text-xl text-orange-700 -rotate-1">
            De Ultieme Alleen-Voor-Niels BBQ!
          </p>
        </div>
      </header>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-full max-w-3xl mx-auto transform hover:rotate-1 transition-transform">
              <div className="absolute -inset-1 bg-orange-300 rounded-lg blur-md opacity-75"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-dashed border-orange-400">
                <Utensils className="w-16 h-16 mx-auto mb-6 text-orange-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
                  Jij bent uitgenodigd!
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-orange-700">
                  Als je{" "}
                  <span className="font-bold underline decoration-wavy decoration-orange-500">
                    Niels
                  </span>{" "}
                  heet, nodigen we je uit voor de vetste barbecue van het jaar!
                </p>
                <div className="grid gap-6 md:grid-cols-2 text-left">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Datum</h3>
                      <p className="text-lg">27 september 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Tijd</h3>
                      <p className="text-lg">15:00 - 21:00 uur</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <MapPin className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Locatie</h3>
                      <p className="text-lg">Nielspark, Barbecuelaan 123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 text-center">
              <h3 className="text-2xl font-bold text-orange-800">
                Wat kun je verwachten:
              </h3>
              <ul className="text-lg space-y-2 text-orange-700">
                <li>🔥 Sappige burgers & worstjes van de grill</li>
                <li>🍺 Koude biertjes & frisse drankjes</li>
                <li>🎮 Spelletjes & gezelligheid</li>
                <li>🎵 Muziek om op te dansen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-orange-600 text-white transform -skew-y-1">
        <div className="container px-4 md:px-6 transform skew-y-1">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">Doe je mee?</h2>
            <p className="text-xl md:text-2xl">
              Als je Niels heet, willen we je er graag bij hebben! Klik
              hieronder om je aan te melden.
            </p>
            <p className="text-lg italic">
              (ID-controle bij de deur - alleen voor Niels'en!)
            </p>
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: "none", cursor: "default" }}
              className="text-xl px-8 py-6 bg-white hover:bg-gray-100 text-orange-800 hover:text-orange-900 rounded-full transform transition-transform hover:scale-105"
            >
              Aanmelden kan binnenkort
            </a>
            <p className="text-sm opacity-80">
              Graag aanmelden vóór 20 september, zodat we weten hoeveel Niels'en
              er komen!
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-200 transform hover:-rotate-2 transition-transform">
              <Beer className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-800">Drankjes</h3>
              <p className="mt-2">
                Genoeg bier, wijn en fris voor iedereen! Eerste drankje is op
                ons!
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-200 transform hover:rotate-2 transition-transform">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-800">Eten</h3>
              <p className="mt-2">
                Hamburgers, worstjes, speklapjes en ook vegetarische opties!
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-200 transform hover:-rotate-2 transition-transform">
              <Music className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-800">Muziek</h3>
              <p className="mt-2">
                Lekkere muziek om op te dansen en te chillen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-800 mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Wat als ik Nils heet, niet Niels?
              </h3>
              <p>
                Sorry maat, deze BBQ is exclusief voor mensen die Niels heten
                met de juiste spelling. Misschien volgende keer!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Mag ik iemand meenemen?
              </h3>
              <p>
                Jazeker! Alleen Niels'en kunnen zich aanmelden, maar elke Niels
                mag één gast meenemen.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Is er een dresscode?
              </h3>
              <p>
                Gewoon lekker casual! Extra punten als je iets oranjes of
                BBQ-gerelateerds draagt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-orange-800 text-orange-100">
        <div className="container px-4 md:px-6 text-center">
          <p className="mb-4">
            Georganiseerd door de Verenigde Compagnie der Lage Landen
          </p>
          <p className="text-sm opacity-75">
            Vragen? Mail naar: niels@mokkenstorm.dev
          </p>
          <p className="mt-6 text-xs opacity-60">
            © {new Date().getFullYear()} Alleen-Voor-Niels BBQ. Alle rechten
            voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}
