/**
 * Hero Component - The main landing section of your homepage
 *
 * This is a "presentation component" - it focuses on displaying content
 * We'll add interactivity and animations in later iterations
 */

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      {/*
        min-h-screen = full viewport height
        flex flex-col = vertical flexbox layout
        items-center justify-center = center content horizontally and vertically
        pt-20 = padding-top to account for fixed navigation
      */}

      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Small label above name - adds hierarchy */}
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
          <span className="text-sm font-semibold text-gray-600 tracking-wider">AVAILABLE FOR WORK</span>
        </div>

        {/* Main heading - your name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
          Your Name
        </h1>

        {/* Subtitle - what you do */}
        <p className="text-2xl md:text-3xl text-gray-600 font-light">
          Creative Developer & Designer
        </p>

        {/* Short bio/tagline */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Building digital experiences at the intersection of design,
          technology, and storytelling.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#connect"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - tells users there's more below */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-400">Scroll to explore</span>
        <div className="text-2xl text-gray-400">↓</div>
      </div>
    </section>
  )
}
