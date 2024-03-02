export function getUserInitials(name) {
  let initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return initials.length > 1 ? initials.substring(0, 2) : initials;
}

export function getActiveIcons(icons) {
  const activeIcons = icons.filter((icon) => icon.link !== null);
  activeIcons.sort((a, b) => a.order - b.order);
  return activeIcons;
}
