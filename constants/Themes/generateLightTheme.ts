import {Theme} from "./Theme";  

  export default function generateLightTheme(hexCode: string): Theme {
  // Function to convert hex to RGB
  function hexToRgb(hex: string): string {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
      hex = hex.split('').map(s => s + s).join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to calculate lighter shade (20% lighter)
  function lightenRgb(rgb: string, factor: number): string {
    const values = rgb.match(/\d+/g)?.map(Number);
    if (!values || values.length !== 3) return rgb;

    const r = Math.min(255, Math.round(values[0] + (255 - values[0]) * factor));
    const g = Math.min(255, Math.round(values[1] + (255 - values[1]) * factor));
    const b = Math.min(255, Math.round(values[2] + (255 - values[2]) * factor));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to calculate darker shade (20% darker)
  function darkenRgb(rgb: string, factor: number): string {
    const values = rgb.match(/\d+/g)?.map(Number);
    if (!values || values.length !== 3) return rgb;

    const r = Math.round(values[0] * (1 - factor));
    const g = Math.round(values[1] * (1 - factor));
    const b = Math.round(values[2] * (1 - factor));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Generate shades based on the provided hex code
  const primary = hexToRgb(hexCode);
  const onPrimary = "rgb(255, 255, 255)";
  const primaryContainer = darkenRgb(primary, 0.2);
  const onPrimaryContainer = "rgb(255, 255, 255)";
  const secondary = lightenRgb(primary, 0.2);
  const onSecondary = "rgb(255, 255, 255)";
  const secondaryContainer = darkenRgb(secondary, 0.2);
  const onSecondaryContainer = "rgb(255, 255, 255)";
  const tertiary = lightenRgb(secondary, 0.2);
  const onTertiary = "rgb(255, 255, 255)";
  const tertiaryContainer = darkenRgb(tertiary, 0.2);
  const onTertiaryContainer = "rgb(255, 255, 255)";
  const error = "rgb(186, 26, 26)";
  const onError = "rgb(255, 255, 255)";
  const errorContainer = "rgb(255, 218, 214)";
  const onErrorContainer = "rgb(65, 0, 2)";
  const background = lightenRgb(primary, 0.8); // Lighten the primary color for background
  const onBackground = darkenRgb(primary, 0.8); // Darken the primary color for contrast on background
  const surface = background; // Use the same as background for surface
  const onSurface = onBackground; // Use the same as onBackground for contrast on surface
  const surfaceVariant = lightenRgb(primary, 0.6); // Lighten the primary color a bit more for surface variant
  const onSurfaceVariant = darkenRgb(primary, 0.6); // Darken the primary color a bit more for contrast on surface variant
  const outline = lightenRgb(primary, 0.3); // Lighten the primary color for outline
  const outlineVariant = lightenRgb(primary, 0.4); // Lighten the primary color a bit more for outline variant
  // const text = '#001021';

  const shadow = '#000000'; // Black for shadow
  const scrim = '#000000'; // Black for scrim

  const inverseSurface = darkenRgb(primary, 0.6); // Darken the primary color for inverse surface
  const inverseOnSurface = lightenRgb(primary, 0.6); // Lighten the primary color for contrast on inverse surface
  const inversePrimary = lightenRgb(primary, 0.2);
  const elevation = {
    level0: "transparent",
    level1: lightenRgb(primary, 0.92),
    level2: lightenRgb(primary, 0.88),
    level3: lightenRgb(primary, 0.84),
    level4: lightenRgb(primary, 0.80),
    level5: lightenRgb(primary, 0.76)
  };
  const surfaceDisabled = `rgba(${primary}, 0.12)`; // Teal with transparency for disabled surface
  const onSurfaceDisabled = `rgba(${primary}, 0.38)`; // Teal with more transparency for disabled on surface
  const backdrop = `rgba(${primary}, 0.4)`; // Teal with transparency for backdrop

  // Construct the theme object
  const theme: Theme = {
    primary,
    // text,
    onPrimary,
    primaryContainer,
    onPrimaryContainer,
    secondary,
    onSecondary,
    secondaryContainer,
    onSecondaryContainer,
    tertiary,
    onTertiary,
    tertiaryContainer,
    onTertiaryContainer,
    error,
    onError,
    errorContainer,
    onErrorContainer,
    background,
    onBackground,
    surface,
    onSurface,
    surfaceVariant,
    onSurfaceVariant,
    outline,
    outlineVariant,
    shadow,
    scrim,
    inverseSurface,
    inverseOnSurface,
    inversePrimary,
    elevation,
    surfaceDisabled,
    onSurfaceDisabled,
    backdrop
  };

  return theme;
  }
  
  // Example usage:
  const theme = generateLightTheme("#008080");
  console.log(theme);
  