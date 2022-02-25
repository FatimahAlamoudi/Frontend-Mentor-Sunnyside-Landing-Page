module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',

        /* Nuteral */
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'white': 'hsl(0, 0%, 100%)',

      },
      fontFamily: {
        'barlow': ["'Barlow'", 'san-serif'],
        'fraunces' : ["'Fraunces'", 'san-serif'],
      },

      backgroundImage: {
        /* Desktop */
        'desktop-cone': 'url("../dist/img/desktop/image-gallery-cone.jpg")',
        'desktop-milkbottle': 'url("../dist/img/desktop/image-gallery-milkbottles.jpg")',
        'desktop-orange': 'url("../dist/img/desktop/image-gallery-orange.jpg")',
        'desktop-sugarcubes': 'url("../dist/img/desktop/image-gallery-sugarcubes.jpg")',
        'desktop-graphicdesign': 'url("../dist/img/desktop/image-graphic-design.jpg")',
        'desktop-header': 'url("../dist/img/desktop/image-header.jpg")',
        'desktop-photography': 'url("../dist/img/desktop/image-photography.jpg")',
        'desktop-standout': 'url("../dist/img/desktop/image-stand-out.jpg")',
        'desktop-transform': 'url("../dist/img/desktop/image-transform.jpg")',

         /* Mobile */

         'mobile-cone': 'url("../dist/img/mobile/image-gallery-cone.jpg")',
         'mobile-milkbottle': 'url("../dist/img/mobile/image-gallery-milkbottles.jpg")',
         'mobile-orange': 'url("../dist/img/mobile/image-gallery-orange.jpg")',
         'mobile-sugarcubes': 'url("../dist/img/mobile/image-gallery-sugar-cubes.jpg")',
         'mobile-graphicdesign': 'url("../dist/img/mobile/image-graphic-design.jpg")',
         'mobile-header': 'url("../dist/img/mobile/image-header.jpg")',
         'mobile-photography': 'url("../dist/img/mobile/image-photography.jpg")',
         'mobile-standout': 'url("../dist/img/mobile/image-stand-out.jpg")',
         'mobile-transform': 'url("../dist/img/mobile/image-transform.jpg")',
        
      }
    },
  },
  plugins: [],
}
