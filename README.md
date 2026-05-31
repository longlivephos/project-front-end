# Project Front End
 
## What I Learned ദ്ദി◝ ⩊ ◜.ᐟ

### Reading a design before touching code

Before touching the editor, the first step was studying the design across all three breakpoints — desktop (1200px), tablet (768px), and mobile (375px) — and asking:
- What are the major **sections** on this page?
- What **repeats**? What only appears once?
- How does the **layout shift** between screen sizes?

This "design reading" phase saved a lot of time because it prevented writing code that had to be torn down and rewritten later.

---

### Identifying layout

Every section on the page is built from a predictable container hierarchy:

```
<section>          ← full-width section with vertical padding
  <div.container>  ← centered, max-width wrapper
    <div>          ← inner layout (flex, grid, stack)
      ...content
    </div>
  </div>
</section>
```

Learning to spot this hierarchy in a design made it much easier to decide what CSS to reach for. For example this is what i found while learning:

- A row of cards → `flex` or `grid`
- A two-column layout that stacks on mobile → `grid grid-cols-1 md:grid-cols-2`
- A centered block of text → `flex justify-center` + `text-center`

---

### Spotting reusable components

I feel like one of the main skills practiced here was identifying **what should be a component** vs. what can stay as inline markup. I was struggling to tell but then i spotted something.

A piece of UI is worth extracting into a component when:
- It appears **more than once** (e.g. a feature card, an integration card)
- It has **variations** that can be passed as props (e.g. a `Button` with `variant="primary"` or `variant="secondary"`)
- It carries **its own logic or styling rules** that would be messy to repeat (e.g. `Tag`, `Pointer`, `Key`)

Components built in this project:

| Component | Why it was extracted |
|---|---|
| `Tag` | Used in every section heading; consistent pill/label style |
| `Button` | Two visual variants (primary/secondary) + size prop |
| `FeatureCard` | Repeated card structure in the Features section |
| `Key` | Individual keyboard key visual, reused in a shortcut combo |
| `Pointer` | Cursor indicator with color variants (blue/red) |
| `Avatar` | Profile picture circle, used in a stacked group |

---

### Translating visual

Designs communicate importance through size, weight, and color. Learning to map those visual cues to Tailwind classes was a key exercise:

- Section labels → small, uppercase, bordered pill (`Tag` component)
- Section headings → `text-4xl md:text-5xl font-medium`
- Supporting text → `text-white/50` (opacity communicates secondary importance)
- Accent/highlight words → `text-lime-400` inline within a heading

The pattern of mixing `text-white` with `text-white/15` or `text-white/30` for body text was especially useful — it creates visual depth without introducing new colors.

---

### Responsive layout

Each section was designed with a **mobile-first** approach, meaning the base styles handle the smallest screen and breakpoint prefixes (`md:`, `lg:`) progressively enhance the layout. I used the Polypane software that was recommended in the video and it helps me a lot.

| Layout | Mobile | Tablet | Desktop |
|---|---|---|---|
| Feature cards | stacked (`flex-col`) | 2-col grid | 3-col (`flex-row`) |
| Integrations | single col | 2-col grid | 2-col grid + sticky text |
| Hero | centered stack | centered stack | left text / right UI |

---
