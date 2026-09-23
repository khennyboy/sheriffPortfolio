import { extendTheme } from "@chakra-ui/react";

// Config: dark by default (matches the current site), but fully toggleable.
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Brand purple, pulled from the existing site's accent color.
const brand = {
  50: "#F3EEFF",
  100: "#E1D4FF",
  200: "#C7B0FF",
  300: "#AB8AFF",
  400: "#9269FA",
  500: "#7C4DEF", // primary accent
  600: "#6A38DE",
  700: "#582CB8",
  800: "#452291",
  900: "#331A6B",
};

const theme = extendTheme({
  config,
  colors: {
    brand,
    // Dark navy surfaces, matched to the current dark-mode site.
    surface: {
      dark: "#0A0F1E",
      darkAlt: "#111827",
      darkCard: "#131C2E",
      light: "#FFFFFF",
      lightAlt: "#F6F6F9",
      lightCard: "#FAFAFC",
    },
  },
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "surface.dark" : "surface.light",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
      "::selection": {
        background: "brand.400",
        color: "white",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "full",
      },
      variants: {
        solid: (props) => ({
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.600", transform: "translateY(-1px)" },
          _active: { bg: "brand.700" },
          transition: "all 0.15s ease",
        }),
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "whiteAlpha.300" : "gray.300",
          color: props.colorMode === "dark" ? "white" : "gray.800",
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "gray.100",
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
      },
    },
  },
});

export default theme;
