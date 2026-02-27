# Potefolio — Contexte Projet

## Vision
Dashboard gamifié pour designers déjà formés souhaitant entrer dans le monde professionnel.
Modèle d'apprentissage par la pratique, inspiré de Duolingo / 7speaking.

## Fonctionnalités principales
- **Authentification** : Discord OAuth2 (création de compte lié à Discord)
- **Briefs individuels** : générés par IA, avec date de rendu, filtrables par type (UX/UI, logo, motion, etc.)
- **Briefs groupés** : organisés sur Discord en vocal — côté user : interface pour voir ses projets rendus et ses appréciations
- **Peer-to-peer** : système d'appréciation et notation entre utilisateurs pour les briefs individuels
- **Gamification** : montée en compétences progressive, badges, niveaux

## Arborescence
- `/` — Landing page
- `/login` — Page connexion (Discord OAuth2)
- `/dashboard` — Dashboard principal

## Stack technique
- **Framework** : Next.js (App Router)
- **Style** : CSS uniquement — jamais Tailwind, jamais de style inline
- **Fichier CSS** : `globals.css` uniquement pour tous les styles globaux

## Design System

### Variables CSS
```css
--background: #ffffff;   /* Blanc — fond principal */
--secondary: #e5e5e5;    /* Gris — couleur secondaire */
--bouton: #000000;       /* Noir — couleur bouton */
```

### Typographie
- Font : **Inter Variable** (Google Fonts ou next/font)

### Espacement
- Padding : multiples de 4px uniquement (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96...)

## Structure Landing Page
1. **Header** — Logo + navigation + CTA connexion
2. **Hero** — Promesse principale
3. **Section 1** — Problème actuel des designers juniors
4. **Section 2** — Présentation de la solution (dashboard + communauté Discord)
5. **Section 3** — Social proof (témoignages, stats)
6. **CTA final** — Appel à l'action fort
7. **Section Tarifs** — Dashboard gratuit + audit 1:1 payant
8. **Footer** — Liens, réseaux, mentions légales

## Conventions de code
- Composants en PascalCase dans `/components`
- Pages dans `/app` (App Router Next.js)
- Pas de styles inline, tout dans `globals.css`
- Nommage des classes CSS en kebab-case
