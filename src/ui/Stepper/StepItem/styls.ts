import { Box, styled } from "@mui/material";

export const StyledStepItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  background: `${isActive ? theme.palette.primary.light : "#eee"}`,
  padding: theme.spacing(1, 3),
  cursor: isActive ? "" : "pointer",
  "&:hover": {
    background: `${isActive ? "" : theme.palette.primary.light}`,
  },
}));
