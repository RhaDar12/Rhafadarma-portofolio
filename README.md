# Portfolio Rhafadarma Nakaula

Website profil pribadi (portofolio) yang dibangun pakai **Astro 7** (framework web modern, static site generation) dengan island React di halaman About, animasi GSAP + ScrollTrigger, dan halaman responsif.

## Halaman
- `/` (index.html) : hero interaktif, coverflow proyek GitHub, orbit tech stack, sertifikat, pengalaman, pendidikan, kontak
- `/about.html` : profil lengkap, dirender dengan React (island, Babel standalone)
- `/projects.html` : daftar proyek + filter

## Stack
- Astro (build static, komponen `.astro`, layout bersama di `src/layouts/Base.astro`)
- GSAP 3 + ScrollTrigger (animasi scroll, dive canvas)
- React 18 (halaman About)
- CSS custom + design token (tanpa framework CSS tambahan)

## Development
```bash
npm install
npm run dev      # http://localhost:4321/portfolio-astro/
npm run build    # output ke dist/
npm run preview
```

## Deploy
Hosting gratis di **GitHub Pages** lewat GitHub Actions, otomatis build + deploy setiap push ke `main` (workflow: `.github/workflows/deploy.yml`).

Live: https://rhadar12.github.io/portfolio-astro/
