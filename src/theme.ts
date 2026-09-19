const themes = ["crimson", "ocean"] as const;

type Theme = typeof themes[number];

export type {Theme}
export {themes}